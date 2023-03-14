import React from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export default function View() {
  return (
    <div className='w-full h-full pt-5 space-y-5 head-remain-text' >
      <div className='grid grid-cols-12 pr-10 pl-10 ' >
        <h1 className='col-span-11 text-2xl head-remain-text font-semibold ' >
          Dashboard
        </h1>
      </div>
      
      <div className='flex  space-y-10 flex-col ' >
        <div className='flex flex-col space-y-8 px-10 justify-center' >
          <div className='bg-theme-light w-full flex items-start h-max p-3 rounded '>
            <div className=' flex-grow h-full'>
              Subscribers graph here
            </div>

            <div className='bg-theme-darker flex flex-col space-y-2 w-[320px] h-full p-4 rounded'>
              <div className='w-full h-1/3 bg-theme-light head-remain-text rounded flex flex-col gap-4 px-6 py-6'>
                <div className='text-gray-400 text-xl flex items-end justify-start h-1/3 font-light'>Subscriber count</div>
                <div className='w-full flex justify-start items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-green-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                  <div className='text-2xl text-green-500'>
                    200
                  </div>
                </div>
              </div>
              <div className='w-full h-1/3 bg-theme-light head-remain-text rounded flex flex-col gap-4 px-6 py-6'>
                <div className='text-gray-400 text-xl flex items-end justify-start h-1/3 font-light'>Unsubscriber count</div>
                <div className='w-full flex justify-start items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>

                  <div className='text-2xl text-red-500'>
                    200
                  </div>
                </div>
              </div>
              <div className='w-full h-1/3 bg-theme-light head-remain-text rounded flex flex-col gap-4 px-6 py-6'>
                <div className='text-gray-400 text-xl flex items-end justify-start h-1/3 font-light'>Channel views count</div>
                <div className='w-full flex justify-start items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-green-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                  </svg>

                  <div className='text-2xl text-green-500'>
                    1325
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='flex space-x-7'>
            <div className='bg-theme-light flex-grow w-[320px] h-[580px] rounded'>
              News or information for creators here
            </div>
            <div className='flex flex-col space-y-7' >
              <div className='bg-theme-light w-[320px] h-[350px] rounded'>

              </div>
              <div className='bg-theme-light w-[320px] h-[350px] rounded' >

              </div>
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
