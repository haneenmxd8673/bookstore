import { faBook, faGear, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  
  
  return (
    <>
    <div className=' flex items-center justify-center bg-blue-200 p-5 flex-col'>
        <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='w-30'/>
        <h2 className='text-xl mt-4 font-bold'>Bookstore Admin</h2>
        <div className=' md-7 flex items-center justify-center p-5 flex-col'>
          <Link to={'/'} className='font-bold text-m my-2'> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link>
          <Link to={'/admin-resource'} className='font-bold text-m my-2'> <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>All Books</Link>
          <Link to={'/admin-settings'} className='font-bold text-m my-2'> <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>Settings</Link>
        </div>
    </div>
    
    </>
  )
}

export default Sidebar