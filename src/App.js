import React from 'react'
import "./App.css"
import Login from './login'
import Create from './create'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Signup'
import BuyNow from './buyNow'
import "./buyNowcss/style.css"
import ImageSlider from './ImageSlider'
import Home from './Home'
import Cobalt from './Cobalt'
import Luft from './Luft'
import SliderPage from './slider'
//import Zoom from './React-Slick'
// import ReactSlickExample from './React-SlickZoom'

function App() {
  return (
    <div className='App'>
    {/* <Signup/> */}
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter> */}

  {/* <BuyNow/> */}



  <BrowserRouter>
    <Routes>
    <Route path='/' element={<BuyNow/>}/>
    <Route path='/cobalt' element={<Cobalt/>}/>
    <Route path='/luft' element={<Luft/>}/>
    {/* <Route path='/create' element={<Create/>}/> */}
      </Routes>
      </BrowserRouter>

  <ImageSlider/>
  {/* <div style={{width:"50%"}}><SliderPage/></div> */}
  
 {/* <ReactSlickExample/> */}
    </div>
  )
}

export default App