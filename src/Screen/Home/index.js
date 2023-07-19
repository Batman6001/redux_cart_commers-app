import React, { useEffect, useState } from "react";
import "../Style.css"
import Iframe from 'react-iframe'
import Header from "../Header";


function HomePage() {
 
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
    <div className="container" >
    <div className="top-nav" >
    <p>AS SEEN ON SHARK TANK 🥳
    </p>
    </div>
    <div  className="header-con" >
        <Header/>
    </div>

    <div className="home-image" >
        <div><img  width={805}  src="https://www.flatheads.in/cdn/shop/files/flatheads-not-out-edition-banner-2.jpg?v=1673833570" /></div>
        <div className="sldiercontent-home">
            <h1 className="slide-text">We're back in stock! </h1>
            <h3 className="slide-text">160 shoes.Limites release.</h3>
            <h1></h1> 
            <a><span  className="slide-text shop-btn" >SHOP NOW</span></a>
        </div>
        
    </div>
   
  <section className="edition-sec" >

    <div className="edition" >
          <h2>The Not Out Edition</h2>
          <p>We've restocked with 160 more!<br/>
         If you missed out last time, now is your chance to get a pair of Flatheads 😃
          </p>
          
    </div>
    </section>
          
          
    <div className="countdown" >
        <div id="goal" >41 shoes left</div>
        <div id="glass">
            <div id="progress"  style={{width:"10%"}} ></div>
        </div>
    </div>

    <div  className="shoes-section">
        <div className="hover-1"  onMouseLeave={()=>setShow(false)} onMouseEnter={hover}>
            {!show?<img src={api?.products[0].images[1]} />:<img src={hoverData} />}
            
           <b> <p>{api?.products[0].name}</p></b>
            <p className="price" >Rs.{api?.products[0].final_price}</p>
            {/* <p>Colour -  {api?.products[0].color}</p> */}
            {/* <p>Size - {api?.products[0].sizes.map(item=>item)}</p> */}

        </div>
        <div onMouseLeave={()=>setShow1(false)} onMouseEnter={hover1}>
        {!show1?<img src={api?.products[1].images[2]} />:<img src={hoverData1} />}
           <b> <p>{api?.products[6].name}</p></b>
            <p className="price" >Rs {api?.products[1].final_price}</p>
            {/* <p>Colour {api?.products[1].color}</p> */}
            {/* <p>{api?.products[1].sizes.map(item=>item)}</p> */}
        </div>
        <div onMouseLeave={()=>setShow2(false)} onMouseEnter={hover2}>
        {!show2?<img src={api?.products[3].images[3]} />:<img src={hoverData2}/>}
           <b> <p>{api?.products[15].name}</p></b>
            <p className="price" >Rs {api?.products[3].final_price}</p>
            {/* <p>Colour {api?.products[3].color}</p> */}
            {/* <p>{api?.products[3].sizes.map(item=>item)}</p> */}
        </div>

    </div>

    <div className="usa-div">
        <div className="usa-available" >
            <h3>Available in the USA</h3>
        </div>

         

         <div>
         <p className="us">US</p>
         <p  className="store" >Shop USA Store</p>
         </div>

    </div>

    <div  className="why-flatheads" >
        <div className="heading" ><h2>WHY FLATHEADS?</h2></div>
        <div className="second-con" >
          <div className="left-con" >
           <div className="flat-heading">What's Special About Flatheads?</div>
           <div className="material" >
            <div> <img width={80}  src="https://www.flatheads.in/cdn/shop/files/Innovative_materials-01.png?v=1655924148" /><br/> Innovative Materials</div>
            <div  ><img src="https://www.flatheads.in/cdn/shop/files/Smart_design-01.png?v=1655924166"  width={80} /> <br/>Smart Design</div>
            <div> <img src="https://www.flatheads.in/cdn/shop/files/Supreme_comfort-01_copy_c9964ab2-2304-4e64-b714-12352b02c12e.png?v=1655924181"  width={80} /> <br/>Supreme Comfort</div>
         </div>

           <div className="light-weight" >
            <div> <img src="https://www.flatheads.in/cdn/shop/files/Ultra_Lightweight-01.png?v=1655924205" width={80} /><br/> Ultra-lightweight</div>
            <div> <img width={80}  src="https://www.flatheads.in/cdn/shop/files/Environment_friendly-01.png?v=1655924220" /> <br/>Environmentally<br/> Relevant</div>
            <div className="learn-btn">Learn more</div>

           </div>
          </div>
            <div className="brand" >
                <div className="heading-brand-story">Brand Story</div>
                <div className="brand-story" >Flatheads make shoes for the new generation. We are revolutionizing casual footwear through innovative materials and thoughtful design that is relevant to your lifestyle. Our shoes are made with natural materials like bamboo and banana fibre, optimized to offer you comfort that lasts all through the day., and more! From meetings to meet-ups, our shoes are crafted to fit every aesthetic.</div>
                <div className="btn-con" ><div className="learn-btn1" >learn more</div></div>

            </div>

        </div>
    </div>

        {/* <h2 class="homeheading" >WHY FLATHEADS?</h2> */}
    {/* <section class="whyflatheads" >
        <div className="whyboxes">
            <div className="fulwidthsec-left" >
                <h3>What's Special About Flatheads?</h3>
                <ul>
                    <li>
                        <img width={50}  src="https://www.flatheads.in/cdn/shop/files/Innovative_materials-01.png?v=1655924148" />
                        <span>Innovative Materials</span>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
            <div></div>

        </div>
    </section> */}

   <div className="world-first-con" >
     <h1>WORLD'S FIRST</h1>
    <div className="shoes-list" >
    <div className="world-first-sub-con" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/World_s_First_Banana2.jpg?v=1655046607"/>
      <div className="world-div" >
        <h2>Banana Kicks </h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div className="btn-world" >SHOP NOW</div>
      </div>
    </div>     

    <div className="world-first-sub-con" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/World_s_First_linen.jpg?v=1655046608"/>
      <div className="world-div" >
        <h2>Linen Sneakers </h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div className="btn-world" >SHOP NOW</div>
      </div>
    </div>     

      <div className="world-first-sub-con" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/World_s_First_Softknit.jpg?v=1655046607"/>
      <div className="world-div" >
        <h2> Softnit Loafers</h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div  className="btn-world" >SHOP NOW</div>
      </div>
    </div>    

      <div className="world-first-sub-con" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/World_s_First_KoolTex2.jpg?v=1655046607"/>
      <div className="world-div" >
        <h2>Banana Kicks </h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div className="btn-world" ><p>SHOP NOW</p></div>
      </div>
    </div>     
    </div>        


   </div>






   <div className="world-first-classic-con" >
     <h1>CLASSICS</h1>
    <div className="shoes-list1" >
    <div className="world-first-sub-con1" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/luftupdated_copy.jpg?v=1655294257"/>
      <div className="world-div1" >
        <h2>Banana Kicks </h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div className="btn-world" >SHOP NOW</div>
      </div>
    </div>     

    <div className="world-first-sub-con1" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/Elli2.jpg?v=1655046257"/>
      <div className="world-div1" >
        <h2>Linen Sneakers </h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div className="btn-world" >SHOP NOW</div>
      </div>
    </div>     

      <div className="world-first-sub-con1" >
     <img  width={500} src="https://www.flatheads.in/cdn/shop/files/troos.jpg?v=1655044958"/>
      <div className="world-div1" >
        <h2> Softnit Loafers</h2>
        <p>Spark conversations with the world's 1st banana fabric sneakers.</p>
        <div  className="btn-world" >SHOP NOW</div>
      </div>
    </div>    

           
    </div>        


   </div>
  
   
   <div className="customer-con" >
    <h2>CUSTOMER REVIEWS</h2>

    <div className="sub-customer-con" > 
    <div  >
        <div><img width={100}  src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/strasall.png?v=1654675122" /></div>
        <p className="customer-text" >My feet have stopped complaining.</p>
        <div><span>- Pranav Gadgil<br/>Founder, Baeyork</span></div>

    </div>
    <div>
        <div><img width={100}  src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/strasall.png?v=1654675122" /></div>
        <p className="customer-text" >My feet have stopped complaining.</p>
        <div><span>- Pranav Gadgil<br/>Founder, Baeyork</span></div>

    </div>
    <div>
        <div><img width={100}  src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/strasall.png?v=1654675122" /></div>
        <p className="customer-text"  >My feet have stopped complaining.</p>
        <div><span>- Pranav Gadgil<br/>Founder, Baeyork</span></div>

      </div>
       </div>
   </div>

   <div className="video-section" >
   <div className="iframe" >
   <Iframe url="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Adjustment_Layer.mp4?v=1655056559"
        width="319px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
   </div>

   <div className="logo" >

    <h2>FEATURED ON</h2>
    <div className="logo-con1" >
        <div> <img width={130} src="https://www.flatheads.in/cdn/shop/files/mintlogo.png?v=1655050026" /> </div>
        <div> <img width={100} src="https://www.flatheads.in/cdn/shop/files/yourstorylogo.png?v=1655050026" /> </div>
        <div> <img width={90} src="https://www.flatheads.in/cdn/shop/files/lbblogo.png?v=1655050026" /> </div>
         
    </div>
    <div  className="logo-con1"  >
    <div> <img width={100} src="https://www.flatheads.in/cdn/shop/files/cnbclogo.png?v=1655050026" /> </div>
    <div> <img width={100} src="https://www.flatheads.in/cdn/shop/files/theindianexlogo.png?v=1655050026" /> </div>

    </div>
   
   </div>


   </div>


</div>
  );
}

export default HomePage;
