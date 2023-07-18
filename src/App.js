import React from 'react'

// import "./App.css"
import Footer from './components/Footers/Footer'
// import Footers from './components/Footers/Footers'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopAll from './components/ShopAll/ShopAll';


import "./App.css"
import HomePage from './Screen/Home/index' 


function App() {
  return (
    <div className='App'>

      <ShopAll />
      <Footer />
      {/* <Footers /> */}

      <HomePage/>

    </div>
  )
}

export default App