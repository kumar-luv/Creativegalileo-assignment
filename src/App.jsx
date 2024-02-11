import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-2/12  bg-purple-500"> 
        <Sidebar />
      </div>
      <div className="w-10/12 h-full bg-gray-300"> 
        <Outlet />
      </div>
    </div>
  )
}
export default App