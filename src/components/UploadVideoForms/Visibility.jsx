import React, {useState} from 'react'
import { Select, Space, Radio, Checkbox } from 'antd';

export const Visibility = () => {
  const [value, setValue] = useState(1);
  const [innerRadio1, setInnerRadio1] = useState(1)
  const [innerRadio2, setInnerRadio2] = useState(1)

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onRadio1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const radio = <Radio.Group onChange={onChange} value={value}>
    <Space direction="vertical">
      <div className='border border-black rounded w-[548px] h-full p-5 '>
        <Radio  value={1}>
          Save or Publish
        </Radio>
      </div>
      <div className='border border-black rounded w-full h-full p-5 '>
        <Radio  value={2}>
          Schedule
        </Radio>
      </div>
    </Space>
    </Radio.Group>

  return (
    <div className='text-black w-full flex font-nunito h-[300px] overflow-hidden overflow-y-scroll relative ' >
      <div className='  w-full pr-8 pl-5 space-y-3 ' >
        <p className='text-[25px] font-bold ' >Visibility</p>
        <p className='text-gray-700 text-[13px]' >Choose when to publish and who can see your video</p>
        {radio}
        <div className='p-5 w-full space-y-3 bg-gray-100 bg-opacity-50 mt-6 ' >
          <p className='font-semibold text-[17px]'>Before you publish, check the following:</p>
          <div className='space-y-2' >
            <p className=' text-[13px] font-medium' >Do kids appear in this video?</p>
            <p className='text-gray-700 text-[13px]' >Make sure you follow our policies to protect minors from harm, exploitation, bullying, and violations of labor law. <span className='text-blue-500'>Learn more</span></p>
            <p className=' text-[13px] font-medium' >Looking for overall content guidance?</p>
            <p className='text-gray-700 text-[13px]' >Our Community Guidelines can help you avoid trouble and ensure that YouTube remains a safe and vibrant community. <span className='text-blue-500'>Learn more</span></p>
          </div>
          
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
