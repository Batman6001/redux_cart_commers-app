import React from 'react'



// import Footers from './components/Footers/Footers'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Whyflatheads from './components/Abouts/Whyflatheads';
// import OurStory from './components/Abouts/OurStory';
// import CustomarReviews from './components/Abouts/CustomarReviews';
import Blog from './components/Abouts/Blog';
// import InThePress from './components/Abouts/InThePress';

import Header from './Screen/Header/index';


// import HomePage from './Screen/Home/index' 

import "./App.css"
// import HomePage from './Screen/Home/index' 
import ShopAll from './Screen/ShopAll'


function App() {
  return (
    <div className='App'>

      <Header />
      {/* <InThePress /> */}
      <Blog />
      {/* <CustomarReviews /> */}
      {/* <OurStory /> */}
      {/* <Whyflatheads /> */}
      <Footer />
      {/* <Footers /> */}
      {/* <HomePage/> */}


      {/* <HomePage/> */}
      {/* <ShopAll /> */}

    </div>
  )
}

export default App