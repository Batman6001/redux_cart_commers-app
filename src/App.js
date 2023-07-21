import React from 'react'
import "./App.css"
import HomePage from './Screen/Home/index' 
import ShopAll from './Screen/ShopAll'
import Headers from './Screen/Header/index'
import Menu from "./Screen/Header/humburgerMenu/menu"

function App() {
  return (
    <div className='App'>
      {/* <HomePage/> */}
      {/* <Headers/> */}
      {/* <Menu/> */}
      <ShopAll/>
    </div>
  )
}

export default App