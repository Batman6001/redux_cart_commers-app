import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function BuyNow() {
const [apidata,setApidata] =useState()
  const getapi = () => {
    axios.get("./db.json").then((res) => {
     let allData = res.data;
     setApidata(allData)
     
    })
  }
  console.log('all data',apidata);
useEffect(()=>{
   getapi()
},[])
function funzoom(){
  alert("In Zoom ")
}

  return (
    <>
<div style={{display:"flex", fontSize:"12px"}}>
    <p>Home ></p> <p>All ></p> <p style={{opacity:"0.5"}}>Ellipsis - Breathable Sneakers | Burgundy</p>
</div>
<div className="container">
  <div className="row">
    <div className="col-lg-8 col-md-6 col-sm-12 col-12 shoe-side"> 
    <div style={{width:"100%"}}>
 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner" style={{width:"100%",height:"auto"}} onMouseEnter={()=>funzoom()}>
    <div className="carousel-item active">
      <img src={apidata?.products[2]?.images[0]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[1]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[2]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[3]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[4]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[5]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={apidata?.products[2]?.images[6]} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </div>
      <div className='slides'> 
      <button>2 </button>
  <div style={{height:"125px",width:"20%"}}> <img src= {apidata?.products[2]?.images[0]} alt=""style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[1]} alt="" style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[2]} alt="" style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[3]} alt="" style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[4]} alt="" style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[5]} alt="" style={{height:"125px"}}/></div>
  <div style={{height:"125px",width:"20%"}}><img src= {apidata?.products[2]?.images[6]} alt="" style={{height:"125px"}}/></div>
      <button>1</button>
       </div>
      <br />
      
       </div>
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
        <h3>ELLIPSIS - BREATHABLE SNEAKERS | BURGUNDY</h3>
        <p style={{fontSize:"18px"}}> <span style={{color:"red"}}> {apidata?.products[2]?.final_price}</span> <del style={{opacity:"0.5"}}> {apidata?.products[2]?.original_price}</del></p>
        <p style={{fontSize:"10px"}}>Inclusive of all taxes</p>
        <p style={{fontSize:"12px"}}> <b>Not Out Edition</b></p>
        <div className='three-shoes'>
            <div className='first'>
                <img src={apidata?.products[2]?.images[0]} alt=""/>
            <p className='pic'>Burgundy</p>
            </div>
            <div className='first'>
                <img src={apidata?.products[1]?.images[0]} alt=""/>
                <p className='pic'>Cobalt</p>
            </div>
            <div className='first'>
                <img src="https://www.flatheads.in/cdn/shop/products/Fern8_800x800.jpg?v=1636736017" alt=""/>
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
         <h4 style={{textAlign:"center", color:"green"}}>41 shoes left</h4> 
         <div >
         <input type="range" min="1" max="100" value="41" className="slider"/>  </div>
         
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
