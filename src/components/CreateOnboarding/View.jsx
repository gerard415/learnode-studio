import React, { useState, useEffect } from 'react'
import { Button, message, Steps, theme } from 'antd';
import { DragAndDrop, VideoDetails, Categories, Subtitles, Visibility } from '../UploadVideoForms';


export default function View(props) {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);


    const steps = [
        {
        title: <div className='head-remain-text'>First</div>,
        content: <div className='w-full h-[300px] bg-theme-light '><DragAndDrop/></div>,
        },
        {
        title: <div className='head-remain-text'>Second</div>,
        content: <VideoDetails/>,
        },
        {
        title: <div className='head-remain-text'>Third</div>,
        content: <Categories/>,
        },
        {
        title: <div className='head-remain-text'>Forth</div>,
        content: <Subtitles/>,
        },
        {
        title: <div className='head-remain-text'>Last</div>,
        content: <Visibility/>,
        },
    ];

    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    const contentStyle = {
      color: "#ebebeb",
      borderRadius: token.borderRadiusLG,
      borderTop: `1px  #ebebeb`,
      marginTop: 16,
    };
    return (
      <>
        <Steps className='head-remain-text' current={current} items={items} />
        <form className='' >
          <div className='bg-theme-light ' style={contentStyle}>{steps[current].content}</div>
          <div style={{marginTop: 24,}}className="flex gap-4">
            {current < steps.length - 1 && (
              <button type='button' className='w-max h-9 px-4 bg-learnode-green1 text-white rounded' onClick={() => next()}>
                Next
              </button>
            )}
            {current === steps.length - 1 && (                
              <button className='w-max h-9 px-4 bg-learnode-green1 text-white rounded' onClick={() => message.success('Processing complete!')}>
                Upload!
              </button>
            )}
            {current > 0 && (
              <button 
                type='button'
                className='w-max h-9 px-4 bg-green-400 bg-opacity-25 border border-green-500 text-green-500 rounded'
                onClick={() => prev()}
              >
                Previous
              </button>
            )}
          </div>
        </form>
        
      </>
    );
}