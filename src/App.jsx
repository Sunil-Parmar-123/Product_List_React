import React from 'react'
import Navbarr from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import DemoTail from './Tailwind/DemoTail'
import "./App.css"

function App() {
  return (
    <div>
      <Navbarr/>
      <Outlet/>
      {/* <DemoTail/> */}
    </div>
  )
}

export default App
