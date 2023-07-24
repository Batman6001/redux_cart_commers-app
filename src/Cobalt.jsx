import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
import CobaltSlick from './Cobalt-Slick'
export default function Cobalt() {

const [apidata,setApidata] =useState()
  const getapi = () => {
    axios.get("./db.json").then((res) => {
     let allData = res.data;
     setApidata(allData)
    })
  }
useEffect(()=>{
   getapi()
},[])

  return (
    <>
<div style={{display:"flex", fontSize:"12px"}}>
    <p>Home ></p> <p>All ></p> <p style={{opacity:"0.5"}}>Ellipsis - Breathable Sneakers | Cobalt</p>
</div>
<div className="container">
  <div className="row">
    <div className="col-lg-8 col-md-6 col-sm-12 col-12 shoe-side"> 
    <div className="fluid react-slick">
                <div className="fluid__image-container">
                <CobaltSlick {...{
  rimProps: {
      isHintEnabled: true,
      shouldHideHintAfterFirstActivation: false,
      enlargedImagePosition: 'over'
  }
}}/>
                </div>
            </div>
      <div className='slides'> 
{apidata?.products[1].images.map((img)=>{
  return  <img src={img} alt="" srcset="" width={200} height={150} />
})}
       </div>
      <br />
       </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <h3>ELLIPSIS - BREATHABLE SNEAKERS | COBALT</h3>
        <p style={{fontSize:"18px"}}> <span style={{color:"red"}}> {apidata?.products[2]?.final_price}</span> <del style={{opacity:"0.5"}}> {apidata?.products[2]?.original_price}</del></p>
        <p style={{fontSize:"10px"}}>Inclusive of all taxes</p>
        <p style={{fontSize:"12px"}}> <b>Not Out Edition</b></p>
        <div className='three-shoes'>
       
            <div className='first'>
            <NavLink to="/">   <img src={apidata?.products[2]?.images[0]} alt=""  /> </NavLink>
            <p className='pic'>Burgundy</p>
            </div>
            <div className='first'> <NavLink to="/cobalt"> 
                <img src={apidata?.products[1]?.images[0]} alt=""/></NavLink>
                <p className='pic'>Cobalt</p>
            </div>
            <div className='first'><NavLink to="/luft">
                <img src="https://www.flatheads.in/cdn/shop/products/Fern8_800x800.jpg?v=1636736017" alt=""/></NavLink>
                <p className='pic'>Fern Green</p>
            </div>
           
        </div>
        <p style={{fontSize:"14px"}}>SELECT THE SIZE  <a href=''>SHOW SIZE CHART </a> </p>
        <p style={{fontSize:"14px"}}> <b> Choose a size </b></p>
        <div className='four-btn'>
            <button>9</button>
            <del><button>10</button></del>  
            <button>11</button>
            <button>12</button>
        </div>
        <br />
        <div className='btn1'> <button>  <span style={{fontSize:"12px"}}> <b>ADD TO CART</b> </span>   </button> </div>
        <div className='btn2'> <button>  <span> Out of stock? Click here </span>   </button> </div>
        <p style={{textAlign:"center"}}>Powered by  <a href="">Notify Me!</a>  </p>
        <p>Starts shipping on 18th April</p>
         <h4 style={{textAlign:"center", color:"green"}}>39 shoes left</h4> 
         <div >
         <input type="range" min="1" max="100" value="39" className="slider"/>  </div>
         
    </div>
    <div className='col-lg-12 col-md-12 col-sm-6 col-12'>
    <p>Because you've got ridiculously good taste. Flatheads Ellipsis. Sensible design for the discerning you.</p>
      <br />
      <span> <b>Why Ellipsis?</b></span>
      <ul className='linespace'> <br />
        <li>You will get noticed: These Oxford styled plimsolls can make heads turn.</li>
        <li>Unbelievably lightweight: Like walking on clouds, no lie.</li>
        <li>They help you breathe: Breathable Uppers</li>
        <li>They keep you snug: Cushioned insole</li>
        <li>They're vibrant: 5 authentic colours</li>
        <li>They don't waste time: Slip in, walk on.</li>
      </ul>
      <span> <b>Materials:</b></span>
      <ul className='linespace'> <br />
      <li>Upper: Synthetic knit-fibre</li>
      <li>Insole: PU foam</li>
      <li>Sole: EVA</li>
      </ul>
      <span> <b>Shipping policy:</b></span>
      <ul className='linespace'> <br />
      <li>FREE shipping on prepaid orders</li>
      </ul>
      <span> <b>Exchanges and Returns Policy:</b></span>
      <ul className='linespace'> <br />
      <li>All items are currently on clearance. So no exchanges or returns - please gift it to your friend if it doesn't fit you well!</li>
      The Flatheads Ellipsis is designed and manufactured in India.
      </ul>
      <div>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Generic Name: Shoes</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}> Weight: 350g</p> <br />
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Designed By:</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}> Flathead Designs Pvt. Ltd.</p><br />
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Manufactured by:</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Indo Euro Footwear</p> 
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Plot #4, Waryana Industrial Complex,</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Kapurthala Road, Jalandhar-144021,</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Punjab - India</p>
        <p style={{opacity:"0.9",fontSize:"12px",lineHeight:"0px"}}>Contact: office@indoeurofootwear.com</p>
      </div>
<br />
     <br /> <div> <br />
        <h4>You may also like</h4>
        <div className='col-lg-12 col-md-12 col-sm-6 col-12'>
        <img src="https://www.flatheads.in/cdn/shop/products/Cobalt5_1000x1000.jpg?v=1644230005" alt=""  style={{height:"350px"}}/>
        </div>

      </div>
    </div>
  </div>
</div>

<button className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-12 preorder'>  <span style={{fontSize:"12px"}}> <b>PRE ORDER</b> </span>   </button> 

    </>
  )
}
