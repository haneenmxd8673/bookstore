import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

function Auth({ register }) {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: register ? 'demo' : '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: register
        ? Yup.string().min(3, 'Must be at least 3 characters').required('Required')
        : Yup.string(),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      if (register) {
        handleRegister(values)
      } else {
        handleLogin(values)
      }
      resetForm()
    }
  })

  const handleRegister = async (userData) => {
    const result = await registerAPI(userData)
    if (result.status === 200) {
      toast.success('Registration successful, please login')
      navigate('/login')
    } else if (result.status === 409) {
      toast.error(result.response)
    } else {
      toast.error('Registration failed')
    }
  }

  const handleLogin = async (userData) => {
    const result = await loginAPI(userData)
    if (result.status === 200) {
      toast.success('Login successful!!')
      sessionStorage.setItem('user', JSON.stringify(result.data.user))
      sessionStorage.setItem('token', result.data.token)
      setTimeout(() => {
        if (result.data.user.role === 'admin') {
          window.location.href = '/admin-dashboard'
        } else {
          window.location.href = '/'
        }
      }, 800)
    } else {
      toast.error(result.response || 'Login failed')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    const { name, email, picture } = decoded

    const res = await googleLoginAPI({
      username: name,
      email,
      password: 'googlepassword',
      picture
    })

    if (res.status === 200) {
      toast.success('Login successful!!')
      sessionStorage.setItem('user', JSON.stringify(res.data.user))
      sessionStorage.setItem('token', res.data.token)

      setTimeout(() => {
        if (res.data.user.role === 'admin') {
          window.location.href = '/admin-dashboard'
        } else {
          window.location.href = '/'
        }
      }, 1500)
    } else {
      toast.error('Google login failed')
    }
  }

  return (
    <section
      id='signup'
      className="w-full min-h-screen bg-[url('https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg')] bg-cover bg-center flex justify-center items-center flex-col"
    >
      <div className='w-full flex items-center justify-center flex-col p-10'>
        <div className='flex justify-center items-center flex-col bg-gray-950/50 rounded-3xl text-white p-5 w-2/4'>
          <h1 className='text-4xl font-bold text-white p-4'>BOOK STORE</h1>

          <FontAwesomeIcon
            icon={faUser}
            style={{ borderRadius: '50%' }}
            className='border rounded p-5 text-white text-6xl'
          />

          {register ? (
            <h3 className='text-white mt-3 text-xl'>Register</h3>
          ) : (
            <h3 className='text-white mt-3 text-xl'>Login</h3>
          )}

          <form className='w-full' onSubmit={formik.handleSubmit}>
            {register && (
              <div className='mt-5 w-full'>
                <input
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  type='text'
                  className='bg-white text-black placeholder-gray-700 px-2 py-2 rounded-xl w-full'
                  placeholder='User Name'
                />
              </div>
            )}

            <div className='mt-5 w-full'>
              <input
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                type='text'
                className='bg-white text-black placeholder-gray-700 px-2 py-2 rounded-xl w-full'
                placeholder='Email Id'
              />
            </div>

            <div className='mt-5 w-full'>
              <input
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                type='password'
                className='bg-white text-black placeholder-gray-700 px-2 py-2 rounded-xl w-full'
                placeholder='Password'
              />
            </div>

            <p className='text-yellow-500 mt-3'>*Never share password with others</p>

            {register ? (
              <button type='submit' className='bg-green-900 text-white p-2 w-full mt-2 rounded'>
                Signup
              </button>
            ) : (
              <button type='submit' className='bg-green-900 text-white p-2 w-full mt-2 rounded'>
                Login
              </button>
            )}
          </form>

          {!register && (
            <div className='mt-3'>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log('Login Failed')
                  toast.error('Google login failed')
                }}
              />
            </div>
          )}

          {register ? (
            <p className='text-white mt-2 text-center'>
              Already a user?{' '}
              <Link className='text-blue-700 underline' to={'/login'}>Login</Link>
            </p>
          ) : (
            <p className='text-white mt-2 text-center'>
              New user?{' '}
              <Link className='text-blue-700 underline' to={'/signup'}>Signup</Link>
            </p>
          )}
        </div>

        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </section>
  )
}

export default Auth