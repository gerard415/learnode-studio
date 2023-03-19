import React from 'react'

export const Subtitles = () => {
  return (
    <div className='text-black w-full font-nunito flex h-[300px] ' >
      <div className='  w-full py-4 px-10 space-y-4 ' >
        <div>
          <p className='text-[25px] font-semibold ' >Checks</p>
          <p className='text-gray-700 text-[13px]' >We'll check your video for issues that may restrict its visibility and then you will have the <br /> opportunity to fix issues before publishing your video. <span className='text-blue-500'>Learn more</span></p>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='space-y-2'>
            <p className='font-semibold text-[15px]'>Copyright</p>
            <p className=' text-[13px] text-gray-500' >Copyright-protected content found. No one will be able to watch your video.</p>
          </div>
          <p className='text-blue-500 text-[14px] font-semibold font-roboto2 ' >SEE DETAILS</p>
        </div>
        <hr />
        <div className='flex justify-between items-center'>
          <p className='text-[13px] text-gray-500' >Remember: These check results aren't final. Issues may come up in the <br /> future that impact your video. <span className='text-blue-500'>Learn more</span></p>
          <p className='text-[13px] text-blue-500 mt-12'>Send feedback</p>
        </div>
      </div>
    </div>
  )
}
