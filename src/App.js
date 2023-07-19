import React from 'react'
import "./App.css"
import Login from './login'
import Create from './create'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Signup'


function App() {
  return (
    <div className='App'>
    {/* <Signup/> */}
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App