import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



function Profile() {
  const [sellbookStatus, setsellbookStatus] = useState(true)
  const [bookStatus, setbookStatus] = useState(false)
  const [purchaseStatus, setpurchaseStatus] = useState(false)

  const [editStatus, seteditStatus] = useState(false)

  const []
  return (
    <>
      <UserHeader />
      <div className='bg-gray-900' style={{ height: '200px' }}>
      </div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
      </div>
      <div className='mx-10 my-5'>
        <div className='flex justify-between items-center '>
          <h1 className='font-bold text-2xl'>Username</h1>
          <button className='bg-blue-900 text-white p-2 rounded' onClick={() => seteditStatus(true)}>Edit</button>

        </div>
        <p className='p-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a deleniti ab cum eligendi. Numquam atque impedit deserunt corrupti vel inventore labore dolorem. Animi totam tempore quasi a perspiciatis fugit?</p>
        {/* tabs */}
        <div className='flex items-center justify-center gap-5'>
          <p onClick={() => {
            setsellbookStatus(true);
            setbookStatus(false);
            setpurchaseStatus(false)
          }} className={sellbookStatus ? 'text-blue-800 border p-2 rounded' : 'text-black p-2'}>Sell Book</p>
          <p onClick={() => {
            setsellbookStatus(false);
            setbookStatus(true);
            setpurchaseStatus(false)
          }} className={bookStatus ? 'text-blue-800 border p-2 rounded' : 'text-black p-2'}>Book Status</p>
          <p onClick={() => {
            setsellbookStatus(false);
            setbookStatus(false);
            setpurchaseStatus(true)
          }} className={purchaseStatus ? 'text-blue-800 border p-2 rounded' : 'text-black p-2'}>Purchase History</p>
        </div>
        {/* contents */}
        {
          sellbookStatus &&
          <div className='h-screen bg-white p-10'>
            <div className='bg-gray-400 text-center p-5 rounded w-full'>
              <h1 className='font-bold text-xl'>Book Details</h1>
              <form className='md:grid grid-cols-2'>
                <div className='md:p-4'>
                  <input type="text" placeholder='Title' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Author' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='No of Pages' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Image URL' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Price' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Discount Price' className='w-full bg-white p-2 mt-4 rounded' />
                </div>
                <div className='md:p-4'>
                  <input type="text" placeholder='Publisher' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Language' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='ISBN' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Category' className='w-full bg-white p-2 mt-4 rounded' />

                  <input type="text" placeholder='Abstract' className='w-full bg-white p-2 mt-4 rounded' />

                  <div className='md:p-10 p-5 flex justify-center items-center' >
                    <input type="file" name="img1" id="img" className='hidden' multiple />
                    <label htmlFor="img">
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" height={'100px'} width={'100px'} />
                    </label>
                  </div>


                  <div className='flex justify-end'>
                    <button className='bg-gray-500 p-3'>RESET</button>
                    <button className='bg-blue-500 p-3 ms-2'>SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        }
        {
          bookStatus &&
          <div className='h-min-50  p-10 my-20 shadow rounded'>
            <div className='p-5 mt-4 bg-gray-300 rounded'>
              <div className='md:grid grid-cols-[3fr_1fr] items-center'>
                <div className='px-4'>
                  <h1 className='text-2xl'>Book Title</h1>
                  <h3 className='text-xl'>Book Author</h3>
                  <h3 className='text-lg text-blue-950 font-bold'>Price</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum impedit fuga doloribus rerum deleniti libero, esse eligendi alias voluptate a mollitia, minima tenetur perferendis soluta, consequuntur quam sit facilis omnis!</p>
                  <div className='mt-5'>
                    <img src="https://freepngimg.com/save/64684-denied/3914x2242" alt="" className='w-25'/>
                    <img src="https://png.pngtree.com/png-vector/20250921/ourmid/pngtree-green-approved-stamp-png-image_17542466.webp" alt="" className='w-25'/>

                  </div>

                </div>
                <div className=''>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg" alt="" className='w-50'/>
                  <div className='mt-3 flex justify-end'>
                    <button className='bg-red-800 text-white p-2 rounded hover:bg-white hover:text-red-800 hover:border hover:border-red-800'>Delete</button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        }
        {
          purchaseStatus &&
          <div className='h-min-50  p-10 my-20 shadow rounded'>
            <div className='p-5 mt-4 bg-gray-300 rounded'>
              <div className='md:grid grid-cols-[3fr_1fr] items-center'>
                <div className='px-4'>
                  <h1 className='text-2xl'>Book Title</h1>
                  <h3 className='text-xl'>Book Author</h3>
                  <h3 className='text-lg text-blue-950 font-bold'>Price</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum impedit fuga doloribus rerum deleniti libero, esse eligendi alias voluptate a mollitia, minima tenetur perferendis soluta, consequuntur quam sit facilis omnis!</p>
                  <div className='mt-5'>
                    <img src="https://freepngimg.com/save/64684-denied/3914x2242" alt="" className='w-25'/>
                    <img src="https://png.pngtree.com/png-vector/20250921/ourmid/pngtree-green-approved-stamp-png-image_17542466.webp" alt="" className='w-25'/>

                  </div>

                </div>
                <div className=''>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg" alt="" className='w-50'/>
                  <div className='mt-3 flex justify-end'>
                    <button className='bg-red-800 text-white p-2 rounded hover:bg-white hover:text-red-800 hover:border hover:border-red-800'>Delete</button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        }

        {/* modal */}
        {
          editStatus &&
          <div className='relative z-10'>
            <div className='bg-gray-500/75 inset-0 fixed'>
              <div className='flex items-center justify-center min-h-screen p-10'>
                <div className='md:w-250 w-full bg-white' style={{ height: '500px' }}>

                  {/* modal header */}

                  <div className='flex  text-white p-3 bg-black items-center justify-between'>
                    <h3>Update Profile</h3>
                    <FontAwesomeIcon icon={faXmark} onClick={() => seteditStatus(false)} />

                  </div>
                  {/* modal body */}
                  <div className='bg-sky-300 p-5'>
                    <div className='flex justify-center items-center'>

                      <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />

                    </div>
                    <div className='flex flex-col gap-4 mt-5'>
                      <input type="text" placeholder='Username' className='bg-white p-2 rounded' />
                      <input type="text" placeholder='Password' className='bg-white p-2 rounded' />
                      <input type="text" placeholder='Password' className='bg-white p-2 rounded' />
                      <input type="text" placeholder='Bookstore User' className='bg-white p-2 rounded' />
                    </div>


                  </div>
                  <div className='bg-white p-2 flex justify-end gap-2 text-white'>
                    <button className='bg-gray-700 p-2 rounded'>Reset</button>
                    <button className='bg-blue-700 p-2 rounded'>Update</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        }
      </div>



    </>
  )
}

export default Profile