import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5'>
      <div className='col-span-1'>
          <Sidebar/>
      </div>
      <div className='grid-cols-6'>
            Dashboard content
      </div>
    </div>
    </>
  )
}

export default Dashboard