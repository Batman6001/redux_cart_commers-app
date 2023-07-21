import React, { useState } from 'react'
import front1_500 from "./images/versace-blue/front1-500.jpg"
import second from "./images/versace-blue/second.jpg"
import third from "./images/versace-blue/third.jpg"
import four from "./images/versace-blue/four.jpg"
import five from "./images/versace-blue/five.jpg"
export default function ImageSlider() {
    const[selectedImg,setSelectedImg]=useState(front1_500)
    const [allImg,setAllImg]=useState([front1_500,second,third,four,five])
  return (
    <div>
        <img src={selectedImg} alt="slider img" width={500} height={350}/>
        <div>
            {allImg.map((img)=>{
                return <img src={img} onClick={()=>{setSelectedImg(img)}} width={200} height={150}
                    style={img===selectedImg ? {border:"2px solid black"} : {}}
                />
            })}
        </div>
    </div>
  )
}
