import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'


function AdminHeader() {
  const [listStatus,setListStatus]=useState(false)
  return (
    <>
     <div className='grid grid-cols-3 p-3'>
        
          <div className='flex items-center'>
              <img src="https://i.pinimg.com/1200x/7d/cc/24/7dcc24f963f0523c1e09d8a9251d42df.jpg" alt="" width={'70px'}/>
              <h1 className='text-2xl font-bold ms-3 md:hidden'>BookStore.</h1>
          </div>
        <div className='md:flex items-center justify-center hidden'>
              <h1 className='text-3xl font-bold'>BookStore.</h1>
        </div>
        <div className=' md:flex justify-end items-center hidden'>
          <Link to={'/login'} className='ms-5 border border-black rounded-full py-2 px-3'>
          Logout
          </Link>
        </div>
    </div>
        
    <div className='flex w-full bg-black text-white p-3'>
          <div className='flex w-full'>
              <marquee behavior="" direction="">Welcome Admin!You're all set to manage and monitor</marquee>
          </div>
    </div>
    </>
  )
}

export default AdminHeader