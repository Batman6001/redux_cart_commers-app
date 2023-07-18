import React from 'react'
// import "./App.css"
import Footer from './components/Footers/Footer'
import Footers from './components/Footers/Footers'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopAll from './components/ShopAll/ShopAll';


function App() {
  return (
    <div className='App'>
      <ShopAll />
      <Footer />
      {/* <Footers /> */}
    </div>
  )
}

export default App