import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import LuftSlick from './Luft-Slick'
import "./styles/react-slick.css"
import SliderPage from './slider';
export default function Luft() {

  const [apidata, setApidata] = useState()
  const getapi = () => {
    axios.get("./db.json").then((res) => {
      let allData = res.data;
      setApidata(allData)
    })
  }
  useEffect(() => {
    getapi()
  }, [])

  const scrollRight = () => {
    document.getElementsByClassName('slides').scrollRight += '200px';
    console.log("hello")
  }


  // document.querySelector(".prev").addEventListener("click",event =>{
  //   document.querySelector(".slides").scrollLeft +=600;
  //   event.preventDefault();
  // })
  return (
    <>
      <div style={{ display: "flex", fontSize: "12px" }}>
        <p>Home ></p> <p>All ></p> <p style={{ opacity: "0.5" }}>{apidata?.products[0]?.name}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12 shoe-side">
            <div className="fluid react-slick">
              <div className="fluid__image-container">
                <LuftSlick {...{
                  rimProps: {
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: false,
                    enlargedImagePosition: 'over'
                  }
                }} />
              </div>
            </div>
            <div className='slides'>
            <SliderPage/>
            </div>
            <br />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <h3>{apidata?.products[0]?.name}</h3>
            <p style={{ fontSize: "18px" }}> <span style={{ color: "red" }}> RS. {apidata?.products[0]?.final_price}</span> </p>
            <p style={{ fontSize: "10px" }}>Inclusive of all taxes</p>
            <p style={{ fontSize: "12px" }}> <b>Not Out Edition</b></p>
            <div className='three-shoes'>
              <div className='first'>
                <NavLink to="/">   <img src={apidata?.products[2]?.images[0]} alt="" /> </NavLink>
                <p className='pic'>Burgundy</p>
              </div>
              <div className='first'> <NavLink to="/cobalt">
                <img src={apidata?.products[1]?.images[0]} alt="" /></NavLink>
                <p className='pic'>Cobalt</p>
              </div>
              <div className='first'><NavLink to="/luft">
                <img src={apidata?.products[0]?.images[0]} alt="" /></NavLink>
                <p className='pic'>Fern Green</p>
              </div>

            </div>
            <p style={{ fontSize: "14px" }}>SELECT THE SIZE  <a href=''>SHOW SIZE CHART </a> </p>
            <p style={{ fontSize: "14px" }}> <b> Choose a size </b></p>
            <div className='four-btn'>
              <button className='btn disabled'>9</button>
              <button className='btn disabled'>10</button>
              <button className='btn disabled'>11</button>
              <button className='btn disabled'>12</button>
            </div>
            <br />
            <div className='btn1'> <button className='btn btn-warning disabled'>  <span style={{ fontSize: "12px" }}> <b>SOLD OUT</b> </span>   </button> </div>
            <div className='btn2'> <button>  <span> Out of stock? Click here </span>   </button> </div>
            <p style={{ textAlign: "center" }}>Powered by  <a href="">Notify Me!</a>  </p>
            <p>Starts shipping on 18th April</p>
            <h4 style={{ textAlign: "center", color: "green" }}>39 shoes left</h4>
            <div >
              <input type="range" min="1" max="100" value="39" className="slider" />  </div>

          </div>
          <div className='col-lg-12 col-md-12 col-sm-6 col-12'>
            <p>Because you've got ridiculously good taste. Flatheads Ellipsis. Sensible design for the discerning you.</p>
            <br />
            <span> <b>Why Luft?</b></span>
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
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Generic Name: Shoes</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}> Weight: 350g</p> <br />
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Designed By:</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}> Flathead Designs Pvt. Ltd.</p><br />
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Manufactured by:</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Indo Euro Footwear</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Plot #4, Waryana Industrial Complex,</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Kapurthala Road, Jalandhar-144021,</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Punjab - India</p>
              <p style={{ opacity: "0.9", fontSize: "12px", lineHeight: "0px" }}>Contact: office@indoeurofootwear.com</p>
            </div>
            <br />
            <br /> <div> <br />
              <h4>You may also like</h4>
              <div className='col-lg-12 col-md-12 col-sm-6 col-12' style={{display:"flex"}}>
              <div style={{ height: "350px", width:"40%" }}>  <img src={apidata?.products[2]?.images[0]} alt='' style={{ height: "350px" }} /></div>
              <div style={{ height: "350px" }}><img src="https://www.flatheads.in/cdn/shop/products/Cobalt5_1000x1000.jpg?v=1644230005" alt="" style={{ height: "350px" }} /></div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      <button className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-12 preorder'>  <span style={{ fontSize: "12px" }}> <b>PRE ORDER</b> </span>   </button>

    </>
  )
}

