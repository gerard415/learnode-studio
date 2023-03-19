import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import camera from '../../assets/video-camera.png'
import { Dropdown, Space, Switch, Modal } from 'antd';
import { CreateOnboarding } from '../CreateOnboarding';




export default function View(props) {
    const [theme, settheme] = useState("light")
    const [CreateModalOpen, setCreateModalOpen] = useState(false)


    const handleClickCreateModalOpen = (a) => {
        setCreateModalOpen(true)
    }

    const handleClickCreateModalClose = (a) => {
        setCreateModalOpen(false)
    }


    useEffect(() => {
        let theme = document.querySelector('body').classList[0]
        // console.log(theme)
        if(theme === "theme-light"){
            settheme("light")
        }else{
            settheme("dark")
        }
    }, [])



    const changeTheme = () => {
        let theme = document.querySelector('body').classList[0]

        console.log(theme)
        if(theme === "theme-light"){
            settheme("light")
            document.querySelector('body').classList.remove(theme)
            document.querySelector('body').classList.add("theme-dark")
        }else{
            settheme("theme-dark")
            document.querySelector('body').classList.remove(theme)
            document.querySelector('body').classList.add("theme-light")
        }
    }


    const items = [
        {
          label: <div className='flex w-40 h-8 gap-10 items-center'> Chinedum Ike</div>,
          key: '0',
        },
        {
            label: <div className='flex w-40 h-8 gap-10 items-center'>Your channel</div>,
            key: '1',
        },
        {
            label: <div className='flex w-40 h-8 gap-10 items-center'>Learnode</div>,
            key: '2',
        },
        {
            label: <div className='flex w-40 h-8 gap-10 items-center'>Switch Account</div>,
            key: '3',
        },
        {
            label: <div className='flex w-40 h-8 gap-10 items-center'>Sign Out</div>,
            key: '4',
        },
        {
            type: 'divider',
        },
        {
            label: <div className='flex w-40 h-8 gap-10 items-center'>Send Feedbac</div>,
            key: '7',
        },
        {
          label: <div className='flex w-40 h-8 gap-10 items-center'>
            Theme
    
            <Switch
                autoFocus={true}
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            </div>,
          key: '8',
        },
    ];

    return(
        <div className='sticky top-0 w-full pr-8 grid grid-cols-12 shadow-md font-nunito bg-theme-light items-center h-[50px] z-50 ' >

        <Modal
            className="lgsn "
            width={1000}
            title={
                <div className="w-full text-3xl px-4 modal-content-header flex justify-between text-black  items-start">
                    <div className='flex flex-col justify-start text-start items-start w-full'>
                        Upload a video
                    </div>
                
                    <div
                    onClick={() => handleClickCreateModalClose()}
                    className="w-fit p-2 h-fit cursor-pointer rounded-md hover:text-green-400 bg-gray-50 bg-opacity-10 transition-all duration-150"
                    >
                    <svg
                        className="w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    </div>
                </div>
            }
            destroyOnClose
            closeIcon={<div></div>}
            // bodyStyle={{backgroundColor: "#14141", background: "#14141"}}
            centered
            footer={<div></div>}
            open={CreateModalOpen}
            onOk={() => {handleClickCreateModalClose()}}
            onCancel={() => {handleClickCreateModalClose()}}
            >
                <CreateOnboarding />
        </Modal>


            <div className='flex col-span-3 head-remain-text text-xl h-full justify-start font-bold items-center font-roboto2' >
                <img src={Logo} alt="" className='h-12'/>Desk
            </div>
            <div className='flex col-span-6 gap-2 items-center justify-center' >
                <input type="text" placeholder='Search' className='bg-gray-100 ring-1 ring-gray-200 search-input ring-opacity-50  focus:ring-green-400 transition-all duration-300 text-black bg-opacity-20 dark:bg-blend-lighten text-sm outline-none rounded w-[350px] h-[35px] pl-4  mr-[1px]' />
                <button className=' bg-gray-100 w-9 rounded h-[35px] text-black ring-1 focus:ring-2 ring-gray-100 flex justify-center items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <div className='space-x-3 head-remain-text flex text-sm font-semibold col-span-3 justify-end items-center' >
                <button onClick={() => {handleClickCreateModalOpen()}} className='active flex head-remain-text gap-3 bg-opacity-80 items-center justify-center menu-item font-semibold h-[38px] w-[120px] ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <p className='head-remain-text'>Create</p>
                </button>

                <button  className='flex head-remain-text gap-3 bg-opacity-80 items-center justify-center menu-item font-semibold h-[38px] w-[80px] ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5  head-remain-text">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </button>

                
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a href='1' onClick={(e) => e.preventDefault()}>
                    <Space>
                        <button className=' rounded-full bg-orange-500 w-[30px] h-[30px] text-xl text-white text-center font-roboto ' >C</button>
                    </Space>
                    </a>
                </Dropdown>
                {/* <button className='avatar-icon'  ><AiOutlineUser size={'20px'} /></button> */}
            </div>
        </div>
    )

}