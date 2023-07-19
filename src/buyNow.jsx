import React from 'react'

export default function BuyNow() {
  return (
    <>
<div style={{display:"flex", fontSize:"12px"}}>
    <p>Home ></p> <p>All ></p> <p style={{opacity:"0.5"}}>Ellipsis - Breathable Sneakers | Burgundy</p>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-8 col-12 shoe-side"> 
     <img src="https://www.flatheads.in/cdn/shop/products/Burgundy5_1000x1000.jpg?v=1644229836" alt='' style={{height:"700px"}}/> 
      <div className='slides'> </div>
      <br />
      <p>Because you've got ridiculously good taste. Flatheads Ellipsis. Sensible design for the discerning you.</p>
      <br />
      <b>Why Ellipsis?</b>
      <ul className='linespace'> <br />
        <li>You will get noticed: These Oxford styled plimsolls can make heads turn.</li>
        <li>Unbelievably lightweight: Like walking on clouds, no lie.</li>
        <li>They help you breathe: Breathable Uppers</li>
        <li>They keep you snug: Cushioned insole</li>
        <li>They're vibrant: 5 authentic colours</li>
        <li>They don't waste time: Slip in, walk on.</li>
      </ul>
     </div>
    <div className="col-md-4 col-sm-12">
        <h3>ELLIPSIS - BREATHABLE SNEAKERS | BURGUNDY</h3>
        <p style={{fontSize:"18px"}}> <span style={{color:"red"}}> RS. 2,999 </span> <del style={{opacity:"0.5"}}> Rs. 3,999</del></p>
        <p style={{fontSize:"10px"}}>Inclusive of all taxes</p>
        <p style={{fontSize:"12px"}}> <b>Not Out Edition</b></p>
        <div className='three-shoes'>
            <div className='first'>
                <img src="https://www.flatheads.in/cdn/shop/products/Burgundy5_1000x1000.jpg?v=1644229836" alt=""/>
            <p className='pic'>Burgundy</p>
            </div>
            <div className='first'>
                <img src="https://www.flatheads.in/cdn/shop/products/Cobalt5_1000x1000.jpg?v=1644230005" alt=""/>
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
  </div>
</div>

    </>
  )
}
