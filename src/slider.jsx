import React from "react";
import Slider from "react-slick";
// import { AiFillStepBackward } from "react-icons/ai";
//import { BsChevronRight } from "react-icons/bs";



import luftone from './images/versace-blue/luftone.jpg';
import lufttwo from './images/versace-blue/lufttwo.jpg';
import luftthree from './images/versace-blue/luftthree.jpg';
import luftfour from './images/versace-blue/luftfour.jpg';
import luftfive from './images/versace-blue/luftfive.jpg';
import luftsix from './images/versace-blue/luftsix.jpg';
import luftseven from './images/versace-blue/luftseven.jpg';
import lufteight from './images/versace-blue/lufteight.jpg';
import luftnine from './images/versace-blue/luftnine.jpg';

function BsChevronRight(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey",border:"none" }}
        onClick={onClick}
      />
    );
  }

  function BsChevronLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey",border:"none" }}
        onClick={onClick}
      />
    );
  }

const SliderPage = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <BsChevronRight/>,
    prevArrow:  <BsChevronLeft/>            
  };

  
  return (
    <div style={{width:"90%"}}>
      <Slider {...settings}>
        <div>
          <img src={luftone} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={lufttwo} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftthree} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftfour} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftfive} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftsix} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftseven} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={lufteight} alt="" style={{height:"120px"}}/>
        </div>
        <div>
        <img src={luftnine} alt="" style={{height:"120px"}}/>
        </div>
      </Slider>
    </div>
  );
};

export default SliderPage;


















// import React, { Component } from "react";
// import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class SliderPage extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />
//     };
//     return (
//       <div>
//         <h2>Custom Arrows</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
