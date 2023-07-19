import React, { useEffect, useState } from "react";
import "./shop.css";

import "../Style.css";
import Header from "../Header/index";

function ShopAll() {

    const [api ,setAPi] = useState()  
    const [hoverData,setHoverData]  = useState()
    const [hoverData1,setHoverData1]  = useState()
    const [hoverData2,setHoverData2]  = useState()
   
    const [show,setShow] = useState()
    const [show1,setShow1] = useState()
    const [show2,setShow2] = useState()
 
 
    useEffect(()=>{
     
     fetch("db.json").then((data)=>{
         return data.json()
        }).then((aDAta)=>{
          setAPi(aDAta)
          console.log("api dat",aDAta);
        })
    },[])
 
 //    let hover = document.getElementsByClassName("hover-1");
 //    hover.addEventListener("mouseenter",
 //           alert("hover succfully"))
 
 const hover =()=>{
 setHoverData(api?.products[0].images[3])
 setShow(true)
 }
 
 const hover1 =()=>{
     setHoverData1(api?.products[1].images[1])
     setShow1(true)
     }
 
     
 const hover2 =()=>{
     setHoverData2(api?.products[3].images[1])
     setShow2(true)
     }
 
  




  return (
    <>
      <div>
        <Header />
      </div>
      <div >
     <div className="home-C-S" > 
        <div   className="sub-h-c-s" >
          <p>Home ></p>
          <p>Collections  ></p>
          <p className="shop">Shop All</p>
        </div>
        </div>

      <div className="shopAll-heading" >
        <h2>Shop All</h2>
      </div>

    <div>
        <div className="filter-section"><p>Sort : Feature</p>
        {/* <select>
            <option></option>
            <option>anupam</option>
            <option>anupam</option>
            <option>anupam</option>
            <option>anupam</option>

        </select> */}
    
 
        </div>
        <div className="filter-sub-sec" >
       <div className="all-size" >
        <div className="sub-size" >Size
        <p>+</p>
        </div>
        <hr/>
        <div className="sub-size" >Price
        <p>+</p>
        </div>
        <hr/>
        <div className="sub-size" >Collection
        <p>+</p>
        </div>
        <hr/>
        <div  className="sub-size" >Availability
        <p>+</p>
        </div>
        <hr/>

       </div>

       <div onMouseEnter={hover} onMouseLeave={()=>setShow(false)} >
        {!show?<img width={250}  src="https://www.flatheads.in/cdn/shop/products/Burgundy7_1000x1000.jpg?v=1644229836" />:<img width={250}   src={hoverData} />}
        <h3>{api?.products[0].name}</h3>
        <div className="price-section" >
        <p style={{color:"#c92400"}} >Rs.{api?.products[0].final_price} </p>&nbsp;<p className="final-price" >Rs{api?.products[0].original_price}</p>
        </div>
       </div>
       <div>
        <img width={250}  src="https://www.flatheads.in/cdn/shop/products/Burgundy7_1000x1000.jpg?v=1644229836" />
        <h3>{api?.products[6].name}</h3>
        <div className="price-section" >
        <p style={{color:"#c92400"}} >Rs.{api?.products[6].final_price} </p>&nbsp;<p className="final-price" >Rs{api?.products[6].original_price}</p>
        </div>
       </div>
       <div>
        <img width={250}  src="https://www.flatheads.in/cdn/shop/products/Burgundy7_1000x1000.jpg?v=1644229836" />
        <h3>{api?.products[18].name}</h3>
        <div className="price-section" >
        <p style={{color:"#c92400"}} >Rs.{api?.products[18].final_price} </p>&nbsp;<p className="final-price" >Rs{api?.products[18].original_price}</p>
        </div>
       </div>

        </div>

    </div>



      </div>
    </>
  );
}

export default ShopAll;
