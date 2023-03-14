import React from 'react'
import upload from '../../assets/upload.svg'
import livestream from '../../assets/livestream.svg'

export default function View() {
  return (
    <div className='w-full h-full  pt-5 space-y-5' >
      <div className='grid grid-cols-12 pr-10 pl-10 ' >
        <h1 className='col-span-11 text-[25px] font-semibold ' >
          Channel dashboard
        </h1>
        <div className='col-span-1 flex space-x-3' >
          <button className='h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center' >
            <img src={upload} alt="" className='w-4' />
          </button> 
          <button className='h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center' >
            <img src={livestream} alt="" className='w-5 ' />
          </button>
        </div>
      </div>
      
      <div className='flex  space-y-10 flex-col ' >
        <div className='flex space-x-8 justify-center' >
          <div className='bg-white w-[320px] h-[450px] rounded border '>

          </div>
          <div className='bg-white w-[320px] h-[380px] rounded border'>

          </div>
          <div className='flex flex-col space-y-7' >
            <div className='bg-white w-[320px] h-[350px] rounded border'>

            </div>
            <div className='bg-white w-[320px] h-[350px] rounded border' >

            </div>
          </div>
        </div>

        <div className='flex space-x-4 text-[12px] text-gray-600 ml-5 mb-10' >
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>Policies & Safety</p>
        </div>
        
      </div>
    </div>
  )
}
