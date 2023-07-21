import React, { useState } from "react";
import "./HumbugerMenu.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu ,AiOutlineClose} from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <div className="top-nav" >
    <p>AS SEEN ON SHARK TANK 🥳
    </p>
    </div>
    
      <nav className="main-nav"  style={{height:"2rem"}} >
        {/* 1st logo part  */}
       
        <div className="logo">
       
          <h2>
          <img width={165}  src="https://www.flatheads.in/cdn/shop/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945" alt="header"/>
          </h2>
        </div>
     
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link li-style" : "menu-link"
          }>
          <ul>
         <li>
              <a  className="nav-text font-size" to="/">Shop All</a>
            </li>
            
            <li>
              <a className="nav-text font-size" to="/about">not out Edition</a>
            </li>
            <li>
              <a className="lite-bold font-size"   to="/service">Shoes</a>
            </li>
            <li>
              <a className="lite-bold font-size"  to="/contact">Classic</a>
            </li>
            <li>
              <a className="lite-bold font-size"  to="/contact">about</a>
            </li>
            <li>
              <a  className="lite-bold font-size" to="/contact">help</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
        
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_anupam">
                <img  className="hide-icon show-icon-srch" width={21}  src="https://pixlok.com/wp-content/uploads/2021/10/Search_Icon_0iuhvrtyuj-300x300.png" />
                {/* <FaFacebookSquare className="facebook" /> */}
              </a>
            </li>
            <li className="header-img" >
              <a
                href="#"
                target="anupam">
                <img className="hide-icon " width={15} src="https://www.nicepng.com/png/detail/501-5010656_my-account-comments-my-account-icon-vector.png" />
                {/* <FaInstagramSquare className="instagram" /> */}
              </a>
              {/* <hr/> */}
            </li>
        
            <li>
              <a className="card-img"
                href="#"
                target="anupam">
                <img src="https://www.svgrepo.com/download/43071/shopping-bag.svg" width={21} />
                {/* <FaYoutubeSquare className="youtube" /> */}
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
              {/* <img src="https://www.svgrepo.com/download/43071/shopping-bag.svg" width={21} /> */}
            </a>
          </div>
        </div>
      </nav>
      <hr/>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;