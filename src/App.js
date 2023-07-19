import React from 'react'
// import "./App.css"
import Footer from './components/Footers/Footer'
// import Footers from './components/Footers/Footers'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Whyflatheads from './components/Abouts/Whyflatheads';
// import OurStory from './components/Abouts/OurStory';
import CustomarReviews from './components/Abouts/CustomarReviews';


function App() {
  return (
    <div className='App'>
    <CustomarReviews />
    {/* <OurStory /> */}
      {/* <Whyflatheads /> */}
      <Footer />
      {/* <Footers /> */}
    </div>
  )
}

export default App