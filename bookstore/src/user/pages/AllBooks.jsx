import React from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'


function AllBooks() {
  return (
    <>
      <UserHeader />
      <section className='flex justify-center items-center flex-col'>
        <div>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl mt-5 font-bold'>Collections</h1>
            <div className='mt-3 flex'>
              <input type="text" placeholder='Search by Title' className='border p-1 ps-3' />
              <button className='bg-sky-500 p-1 ps-5 pe-5 text-white '>Search</button>
            </div>
          </div>

          {/* <div className='md:flex'> */}
          <div className='grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 mt-5'>
            <div>
                <h3 className='text-2xl font-bold'>Filter</h3>
              <div className='md:flex flex-col'>
                <div className='mt-3 '>
                  <input type="radio" name="" id="" /> <label htmlFor="">Literary Fiction</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Philosophy</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Romance</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Mystery/Thriller</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Politics</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Self-Help</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Auto/Biography</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">Horror</label>
                </div>
                <div>
                  <input type="radio" name="" id="" /> <label htmlFor="">No Filter</label>
                </div>
              </div>
            </div>

            {/* <div className='md:grid grid-cols-4 mt-3'> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='p-3'>
                <div className='shadow p-3 rounded text-center flex justify-center items-center flex-col'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
                  <h3>Dan Brown</h3>
                  <h3>The Da Vinci Code</h3>
                  <button className='w-full bg-blue-700 text-white p-1'>Buy-$13</button>
                </div>
              </div>

              {/*  */}
              <div className='p-3'>
                <div className='shadow p-3 rounded text-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
                  <h3>Dan Brown</h3>
                  <h3>The Da Vinci Code</h3>
                  <button className='w-full bg-blue-700 text-white p-1'>Buy-$13</button>
                </div>
              </div>
              <div className='p-3'>
                <div className='shadow p-3 rounded text-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
                  <h3>Dan Brown</h3>
                  <h3>The Da Vinci Code</h3>
                  <button className='w-full bg-blue-700 text-white p-1'>Buy-$13</button>
                </div>
              </div>
              <div className='p-3'>
                <div className='shadow p-3 rounded text-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
                  <h3>Dan Brown</h3>
                  <h3>The Da Vinci Code</h3>
                  <button className='w-full bg-blue-700 text-white p-1'>Buy-$13</button>
                </div>
              </div>
              {/*  */}

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AllBooks