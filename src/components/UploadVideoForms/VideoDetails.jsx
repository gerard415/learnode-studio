import React, {useState} from 'react'
import { Select, Space, Radio } from 'antd';

export const VideoDetails = () => {

  //radio buttons
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const radio = <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>Yes, restrict my video to viewers over 18</Radio>
                    <Radio value={2}>No, don't restrict my video to viewers over 18 only</Radio>
                  </Space>
                </Radio.Group>


  //select option
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const select = <Space wrap>
                    <Select defaultValue="lucy" style={{width: 250,}} onChange={handleChange}
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                      },
                    ]}
                  />
                </Space>
  

  return (
    <div className='text-black w-full font-nunito flex h-[300px] overflow-hidden overflow-y-scroll relative ' >
      <div className='  w-full pr-8 pl-5 space-y-6 ' >
        <p className='text-[25px] font-semibold ' >Video Details</p>
        <div className='w-full border  p-3 bg-white rounded-md flex flex-col space-y-1'>
          <p className='text-gray-500 text-[11px]' >Title (required)*</p>
          <input type="text" className='border-none outline-none h-[40px] pb-5' placeholder='Add a title that describes your video'/>
        </div>
        <div className='w-full border  p-3 bg-white rounded-md flex flex-col space-y-1'>
          <p className='text-gray-500 text-[11px]' >Description*</p>
          <input type="text" className='border-none outline-none h-[160px] pb-[140px]' placeholder='Tell viewers about your video'/>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Thumbnail</p>
          <p className='text-gray-500 text-[13px]' >Select or upload a picture that shows whats in your video. A good thumbnail stands out and draws users attention. <span className='text-blue-500'>Learn more</span></p>
          <div className='flex space-x-4'>
            <div className='h-[100px] w-[150px] bg-gray-100'></div>
            <div className='h-[100px] w-[150px] bg-gray-100'></div>
            <div className='h-[100px] w-[150px] bg-gray-100'></div>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Playlists</p>
          <p className='text-gray-500 text-[13px]' >Add your video to one or more playlists. Playlists can help viewers discover your content <br /> faster. <span className='text-blue-500'>Learn more</span></p>
          {select}
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Audience</p>
          <p className=' text-[13px]' >Do you want to restrict your video to an adult audience?</p>
          <p className='text-gray-500 text-[13px]' >Age-restricted videos are not shown in certain areas of YouTube. These videos may have limited or no ads monetization. <span className='text-blue-500'>Learn more</span></p>
          {radio}
        </div>
      </div>

      <div className=' w-[500px] bg-gray-50 mr-5 mt-4 right-0 sticky h-full top-0 bottom-0 ' >
        <div className='flex flex-col space-y-4 ' >
            <span className='flex justify-center'>
              <img className='rounded-t w-[500px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxYB64n-mQUnGykp4PrbA5ZzH3_rVu16KsA&usqp=CAU" alt="" />
            </span>
            <div className='pl-5 flex flex-col space-y-0'>
              <span className='mb-2' >
                <p className='text-gray-500 text-[12px]' >Video Link</p>
                <p className='text-blue-500' >https://youtu.be/Ld3lxrKtn6s</p>
              </span>
              <span>
                <p className='text-gray-500 text-[12px]' >Filename</p>
                <p>regular Show s1ep2.mp4</p>
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}
