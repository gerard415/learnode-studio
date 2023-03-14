import React, { useState, useEffect } from 'react'
import { Button, message, Steps, theme } from 'antd';


export default function View(props) {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);


    const steps = [
        {
        title: <div className='head-remain-text'>First</div>,
        content: <div className='w-full h-max max-h-[400px] bg-theme-light '>First content</div>,
        },
        {
        title: <div className='head-remain-text'>Second</div>,
        content: 'Second-content',
        },
        {
        title: <div className='head-remain-text'>Third</div>,
        content: 'Last-content',
        },
        {
        title: <div className='head-remain-text'>Forth</div>,
        content: 'Last-content',
        },
        {
        title: <div className='head-remain-text'>Fifth</div>,
        content: 'Last-content',
        },
        {
        title: <div className='head-remain-text'>Last</div>,
        content: 'Last-content',
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
      lineHeight: '260px',
      textAlign: 'center',
      color: "#ebebeb",
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
    //   border: `1px dashed #ebebeb`,
      marginTop: 16,
    };
    return (
      <>
        <Steps className='head-remain-text' current={current} items={items} />
        <div className='bg-theme-light' style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
          className="flex gap-4"
        >
          {current < steps.length - 1 && (
            <button className='w-max h-9 px-4 bg-learnode-green1 text-white rounded' onClick={() => next()}>
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
              className='w-max h-9 px-4 bg-green-400 bg-opacity-25 border border-green-500 text-green-500 rounded'
              onClick={() => prev()}
            >
              Previous
            </button>
          )}
        </div>
      </>
    );
}