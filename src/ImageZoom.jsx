// import React, { useState } from 'react'
// const src =  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0";

// export default function ImageZoom() {
     

  

//      const [backgroundImage,setBackgroundImage] = useState(`url(${src})`) 
//      const[ backgroundPosition,setBackgroundPosition] =useState("0% 0%")
//     //   state = {
//     //     backgroundImage: `url(${src})`,
//     //     backgroundPosition: "0% 0%"
//     //   };  
//       const  handleMouseMove = (e) => {
//         const { left, top, width, height } = e.target.getBoundingClientRect();
//         const x = ((e.pageX - left) / width) * 100;
//         const y = ((e.pageY - top) / height) * 100;
//         setBackgroundPosition(`${x}% ${y}%`);
//       };
//   return (
//     <div>ImageZoom
    
//     <figure onMouseMove={handleMouseMove} style={{backgroundPosition:"100% 100%"}}>
//       <img src={src} />
//     </figure>
    
    
//     </div>
//   )
// }



//  import React, {Component } from 'react'

// const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

//  export default  class Zoom extends Component {
//   state = {
//     backgroundImage: `url(${src})`,
//     backgroundPosition: '0% 0%'
//   }

//   handleMouseMove = e => {
//     const { left, top, width, height } = e.target.getBoundingClientRect()
//     const x = (e.pageX - left) / width * 100
//     const y = (e.pageY - top) / height * 100
//     this.setState({ backgroundPosition: `${x}% ${y}%` })
//   }

//   render = () =>
//     <figure onMouseMove={this.handleMouseMove} style={this.state}>
//       <img src={src} />
//     </figure>
// }
