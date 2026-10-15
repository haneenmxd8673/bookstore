import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faCamera, faEye } from '@fortawesome/free-regular-svg-icons'


function ViewBook() {
  const [modalStatus,setmodalStatus]=useState(false)
  return (
    <>
      <UserHeader />

      <div className='md:m-10 m-5 '>

        <div className='p-5 border shadow rounded-3xl'>

          <div className='md:grid grid-cols-3 gap-15'>

            {/* Book Image */}
            <div className='col-span-1'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s"
                alt=""
                className='w-60 rounded-2xl'
              />
            </div>

            {/* Book Information */}
            {/* Book Information */}
<div className='col-span-2'>

  {/* Book Title */}
  <div className='flex items-center justify-between'>
    <div>
      <h3 className='font-bold text-3xl'>
        The Alchemist
        
      </h3>
      <p className='text-sm text-indigo-500 font-semibold mt-2' style={{color:'#EC2627'}}>
        - Paulo Coelho
      </p>
    </div>

    

    <div>
      <button onClick={()=>setmodalStatus(true)}>
      <FontAwesomeIcon icon={faEye}/>
    </button>
    </div>
    
  </div>
  

  {/* Book Details */}
  <div className='grid md:grid-cols-3 gap-5 mt-10 text-sm font-semibold'>

    <div>
      <p>Publisher : HarperCollins</p>

      <p className='mt-4'>
        Seller Mail : maxwell@gmail.com
      </p>
    </div>

    <div>
      <p>Language : English</p>

      <p className='mt-4'>
        Real Price : $15
      </p>
    </div>

    <div>
      <p>No. of pages : 208</p>

      <p className='mt-4'>
        ISBN : 9780062315007
      </p>
    </div>

  </div>

  {/* Description */}
  <div className='mt-10 text-sm font-semibold leading-5'>
    <p>
      The Alchemist is a famous novel written by Paulo Coelho. 
      It follows the journey of Santiago, a young shepherd who 
      dreams of discovering a hidden treasure near the Egyptian 
      pyramids. During his journey, he meets different people 
      who guide him and help him understand the importance of 
      following his dreams. The book explores themes of dreams, 
      destiny, courage, hope, and discovering one's true purpose 
      in life.
    </p>
  </div>

  {/* Buttons */}
  <div className='flex justify-end gap-4 mt-12'>

    <button className='bg-indigo-500 text-white px-7 py-3 rounded-full' style={{backgroundColor:'black'}}>
     <FontAwesomeIcon icon={faBackward}/> Back
    </button>

    <button className='bg-green-600 text-white px-7 py-3 rounded-full' style={{backgroundColor:'#EC2627'}}>
      Buy Now
    </button>

  </div>

</div>

          </div>

        </div>

      </div>

      {/* modal */}
      {modalStatus && <div className='relative z-10'>
        <div className='bg-gray-500/75 inset-0 fixed'>
            <div className='flex items-center justify-center min-h-screen'>
              <div className='bg-white ' style={{height:'500px'}}>
                {/* modal header */}
                <div className='flex text-white bg-black item-center justify-between p-3'>
                  <h3>Book images</h3>
<button onClick={()=>setmodalStatus(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
  
</button>    
                </div>
                {/* modla body */}
                <div className='bg-white p-5'>
                  <p className='text-blue-600'>   <FontAwesomeIcon icon={faCamera}/>  Camera clicks of the books in the seller hands</p>

                  <div className='md:flex my-4'>
                    <img className='mx-5' src="" alt=""  height={'200px'} width={'200px'}/>

                  </div>
    
                </div>
              </div>
            </div>


        </div>

      </div>}
    </>
  )
}

export default ViewBook