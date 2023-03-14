import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Sidebar, Header } from './components'
import {Homepage} from './pages'

const App = () => {
  return (
    <div className='w-full h-full'>
      <BrowserRouter className='w-full ml-[230px] text-white h-max flex flex-col gap-y-16 px-5'>
          <Header/>

          <div className='flex bg-theme-darker w-full ' >
            <Sidebar/>
            <div className='w-full ml-[230px] bg-theme-gray '>
                <Routes>
                  <Route path='/' element={<Homepage/>} />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App