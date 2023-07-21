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
    const [showSize,setShowSize] = useState(false)
    const [showPrice,setShowPrice] = useState(false)
    const [showCollection,setShowCollection]  = useState(false)
    const [showAvl,setShowAvl] = useState(false)
 
 
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
        {!showSize?<p className="puls" onClick={()=>setShowSize(true)} >+</p>:<p className="puls" onClick={()=>setShowSize(false)} >−</p>}
        </div>
        {showSize?<div className="size-number" >
        <div className="input-div" ><input type="checkbox" />&#160;&#160;6</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;7</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;8</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;9</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;10</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;11</div>
        <div className="input-div" ><input type="checkbox" />&#160;&#160;12</div>

        </div>:''}
        <hr/>
        <div className="sub-size" >Price<br/>
        
        {!showPrice?<p className="puls" onClick={()=>setShowPrice(true)} >+</p>:<p className="puls" onClick={()=>setShowPrice(false)} >−</p>}
        </div>
        {showPrice?<div className="price-field">
           <div className="input-price-div" >
            From
            <input className="price-input" placeholder="999"/>
           </div>
           <div className="input-price-div">
            To
            <input  placeholder="999" className="price-input" />
           </div> 
        </div>:""}

        <hr/>
        <div className="sub-size" >Collection
        {!showCollection?<p className="puls" onClick={()=>setShowCollection(true)} >+</p>:<p className="puls" onClick={()=>setShowCollection(false)} >−</p>}

        </div>
        {showCollection?<div className="collection-div" >
        <div className="collection-field" > <input type="checkbox" />&#160;&#160;<p>Ellipsis - Breathable Sneakers</p> </div>
        <div className="collection-field" > <input type="checkbox" />&#160;&#160; <p>Luft - Ultralight Sneakers</p></div>
        </div>:""}
        <hr/>
        <div  className="sub-size" >Availability
        {!showAvl?<p className="puls" onClick={()=>setShowAvl(true)} >+</p>:<p className="puls" onClick={()=>setShowAvl(false)} >−</p>}

        </div>
        {showAvl?<div className="collection-div" >
        <div className="collection-field" > <input type="checkbox" />&#160;&#160;<p className="in-stock" >In stock</p> </div>
        <div className="collection-field" > <input type="checkbox" />&#160;&#160; <p className="out-stock" >Out of stock</p></div>
        </div>:""}
        <hr/>

       </div>

       {/* <div className="clear-con" >
            <lu className="ul-con" >
                <li>
                  6x 
                </li>
                <li>
                 clear all
                </li>
            </lu>
        </div> */}
    
        {/* <div className="clear-all" ><p>6&#160;X</p> </div><div>Clear all</div>  */}
    <div className="all-section-con" >  
       <div onMouseEnter={hover} onMouseLeave={()=>setShow(false)} >
        {!show?<img width={250}  src={api?.products[0].images[0]} />:<img width={250}   src={hoverData} />}
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



      </div>
    </>
  );
}

export default ShopAll;
