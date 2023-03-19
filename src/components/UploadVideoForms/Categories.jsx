import React, {useState} from 'react'
import { Select, Space, Radio, Checkbox } from 'antd';

export const Categories = () => {
  //radio buttons
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const radio = <Radio.Group onChange={onChange} value={value}>
    <Space direction="vertical">
      <Radio value={1}>Allow all comments</Radio>
      <Radio value={2}>Hold all comments for review</Radio>
      <Radio value={2}>Disable comments</Radio>
    </Space>
    </Radio.Group>


  //select value
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const select = <Space wrap>
  <Select defaultValue="comedy" style={{width: 250,}} onChange={handleChange}
  options={[
    {
      value: 'comedy',
      label: 'Comedy',
    },
    {
      value: 'gaming',
      label: 'Gaming',
    },
    {
      value: 'music',
      label: 'Music',
    },
    {
      value: 'disabled',
      label: 'Disabled',
    },
  ]}
/>
</Space>

//select tags
const [tags, setTags] = useState([])

  function handleKeyDown(e){
      if(e.key !== 'Enter') return
      e.preventDefault()
      const value = e.target.value
      if(!value.trim()) return
      setTags([...tags, value])
      e.target.value = ''
  }

  function removeTag(index){
      setTags(tags.filter((el, i) => i !== index))
  }

  //checkbox
  const onCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


  return (
    <div className='text-black font-nunito w-full flex h-[300px] overflow-hidden overflow-y-scroll relative ' >
      <div className='  w-full pr-8 pl-5 space-y-6 ' >
        <p className='text-[25px] font-semibold ' >Video Elements</p>
        <div className='space-y-5' >
          <div className='bg-gray-100 bg-opacity-50 flex w-full h-[80px] items-center p-5 rounded' >
            <span><img src="" alt="" /></span>
            <span className='' ><p className='text-gray-600 font-semibold text-[14px]' >Add Subtitles</p><p className='text-gray-400 text-[11px]' >Reach a broader audience by adding subtitles to your video</p></span>
            <button className='text-gray-400 ml-[180px] '>ADD</button>
          </div>
          <div className='bg-gray-100 bg-opacity-50 flex w-full h-[80px] items-center p-5 rounded' >
            <span><img src="" alt="" /></span>
            <span className='' ><p className='text-gray-600 font-semibold text-[14px]' >Add an end screen</p><p className='text-gray-400 text-[11px]' >Promote related content at the end of your video</p></span>
            <button className='text-gray-400 ml-[230px] '>ADD</button>
          </div>
          <div className='bg-gray-100 bg-opacity-50 flex w-full h-[80px] items-center p-5 rounded' >
            <span><img src="" alt="" /></span>
            <span className='' ><p className='text-gray-600 font-semibold text-[14px]' >Add cards</p><p className='text-gray-400 text-[11px]' >Promote related content during your video</p></span>
            <button className='text-gray-400 ml-[260px] '>ADD</button>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Category</p>
          <p className='text-gray-500 text-[13px]' >Add your video to a category so viewers can find it more easily</p>
          {select}
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Comments</p>
          <p className=' text-[13px]' >Choose how you want your audience to interact with you</p>
          {radio}
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Tags</p>
          <p className='text-gray-500 text-[13px]' >Tags can be useful if content in your video is commonly misspelled. Otherwise, tags play a minimal role in helping viewers find your video.</p>
          <div className="border p-[0.5rem] rounded w-full flex items-center flex-wrap:wrap gap-[0.5rem] ">
            { tags.map((tag, index) => (
                <div className="bg-gray-100 inline-block py-[0.5rem] px-[0.75rem] rounded-[20px] " key={index}>
                    <span className="text">{tag}</span>
                    <span className="h-[20px] w-[20px] bg-[#303030] text-white rounded-full inline-flex justify-center items-center ml-[0.5rem] text-[15px] cursor-pointer  " onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="grow py-[0.5rem] border-none outline-none " placeholder="Type somthing" />
          </div>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Language and captions certification</p>
          <p className='text-gray-500 text-[13px]' >Select your video's language and, if needed, a caption certification</p>
          <span className='flex space-x-3'>
            {select}
            {select}
          </span>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Recording date and location</p>
          <p className='text-gray-500 text-[13px]' >Add when and where your video was recorded. Viewers can search for videos by location.</p>
          <span className='flex space-x-3'>
            {select}
            {select}
          </span>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-[17px]'>Paid Promotion</p>
          <p className='text-gray-500 text-[13px]' >If you accepted anything of value from a third party to make your video, you must let us know. We'll show viewers a message that tells them your video contains paid promotion. <span className='text-blue-500'>Learn more</span></p>
          <Checkbox className='font-normal text-[15px]' onChange={onCheck}>My video contains paid promotion like a product placement, sponsorship, or endorsement</Checkbox>
          <p className='text-gray-500 text-[12px]' >By selecting this box, you confirm that the paid promotion follows our ad policies and any applicable laws and regulations.</p>
        </div>
      </div>

      <div className=' w-[500px] bg-gray-50 mr-5  right-0 sticky mt-4 h-full top-0 bottom-0 ' >
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
