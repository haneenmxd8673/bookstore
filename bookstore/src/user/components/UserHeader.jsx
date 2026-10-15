import React, { useEffect, useState } from 'react'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const FALLBACK_DP = 'https://i.pinimg.com/236x/5d/02/f7/5d02f7a385be2e52c836bd25192029dd.jpg'

function UserHeader() {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropdown, setDropDown] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("user") && sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setUserDp(user.picture)
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <>
      <div className='grid grid-cols-3 p-3'>

        <div className='flex items-center'>
          <img src="https://i.pinimg.com/1200x/7d/cc/24/7dcc24f963f0523c1e09d8a9251d42df.jpg" alt="" width={'70px'} />
          <h1 className='text-2xl font-bold ms-3 md:hidden'>BookStore.</h1>
        </div>
        <div className='md:flex items-center justify-center hidden'>
          <h1 className='text-3xl font-bold'>BookStore.</h1>
        </div>
        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon className='text-2xl' icon={faInstagram} />
          <FontAwesomeIcon className='text-2xl' icon={faXTwitter} />
          <FontAwesomeIcon className='text-2xl' icon={faFacebook} />
          {
            !token ? (
              <Link to={'/login'} className='ms-5 border border-black rounded-full py-2 px-3'>
                <FontAwesomeIcon icon={faUser} />
                Login
              </Link>
            ) : (
              <div className='relative'>
                {/* profile */}
                <button onClick={() => setDropDown(!dropdown)} className='shadow-sm rounded p-1 ms-5'>
                  <img
                    width={'40px'}
                    height={'40px'}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                    src={userDp === "" ? FALLBACK_DP : userDp}
                    onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_DP }}
                    alt="profile"
                  />
                </button>
                {/* dropdown */}
                {
                  dropdown &&
                  <div className='absolute right-0 top-14 ring-black/40 shadow w-40 rounded p-2 bg-white ring z-50'>
                    <Link to={'/profile'} className='ms-1 block py-1'>Profile</Link>
                    <button onClick={handleLogout} className='p-2 block w-full text-left'>Logout</button>
                  </div>
                }
              </div>
            )
          }

        </div>
      </div>
      <nav className='md:flex items-center justify-center p-2' style={{ backgroundColor: '#EC2627' }}>
        <div className='flex justify-between items-center w-full md:hidden'>
          <button onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon className='text-2xl' icon={faBars} /></button>
          {
            !token ? (
              <Link to={'/login'} className='ms-5 border border-black rounded-full py-2 px-3'>
                <FontAwesomeIcon icon={faUser} />
                Login
              </Link>
            ) : (
              <button onClick={() => setDropDown(!dropdown)} className='shadow-sm rounded p-1'>
                <img
                  width={'35px'}
                  height={'35px'}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                  src={userDp === "" ? FALLBACK_DP : userDp}
                  onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_DP }}
                  alt="profile"
                />
              </button>
            )
          }
        </div>
        <div className={listStatus ? 'flex flex-col' : 'md:flex hidden'}>
          <Link to={'/'} className='md:mx-4 mt-2 '>Home</Link>
          <Link to={'/all-books'} className='md:mx-4 mt-2 '>Books</Link>
          <Link to={'/contact'} className='md:mx-4 mt-2 '>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default UserHeader