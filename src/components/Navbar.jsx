import React, { useContext, useEffect , useState } from 'react';
import {NavLink , Link } from 'react-router-dom';
import logo from '../images/ouLogo.png';
import '../css/main.css';
import 'bootstrap';
import { myContext } from './context/HandlingCartData';

export default function Navbar() {
   

    const {cartItem , setCartItem} = useContext(myContext);

    const handleClick = () => {
        var closeBtn = document.querySelector('.closeBtn');
        var openBtn = document.querySelector('.hamburger__menu');
        var navbar = document.querySelector(".navbar-collaps");
        var landingPage = document.querySelector('.landingpage');
        setTimeout(() => {
             closeBtn.style.display = 'flex';
             openBtn.style.display = 'none';
             navbar.classList.remove("navbar-collaps");
             navbar.classList.add("navbar-collaps-clicked");
             landingPage.style.display = 'none';
        },100 );
    }

    const handleCloseBtnClick = () => {
        var closeBtn = document.querySelector('.closeBtn');
        var openBtn = document.querySelector('.hamburger__menu');
        var navbar = document.querySelector(".navbar-collaps-clicked");
        var landingPage = document.querySelector('.landingpage');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'flex';
        navbar.classList.remove("navbar-collaps-clicked");
        navbar.classList.add("navbar-collaps");
        landingPage.style.display = 'flex';
    }

    window.addEventListener('scroll' , () => {
       if (window.scrollY >= 200) {
           var header = document.querySelector('header');
           var navbar = document.querySelector('nav');
           var cookies_popup  = document.querySelector('.cookies_popup');
           header.style.position = 'fixed';
           header.style.width = '100%';
           header.style.zIndex = '400';
           navbar.style.boxShadow = '0px 0px 8px 0px rgba(0, 0, 0, 0.199)';
           navbar.style.background = 'linear-gradient(45deg, #fae4c6 ,#fcd5c1)'
           cookies_popup.style.display = 'flex';
       }else{
           var header = document.querySelector('header');
           var navbar = document.querySelector('nav');
           var cookies_popup  = document.querySelector('.cookies_popup');
           header.style.position = 'relative';
           navbar.style.boxShadow = '0px 0px 8px 0px rgba(255, 255, 255, 0.469)';
           cookies_popup.style.display = 'none';
       }
    })



    return (
        <div className='navbar p-0'>
          <nav className="navLight stroke" >
            <a href="#" data-aos="fade-right" data-aos-duration = "700" data-aos-delay= "200"><img className='logo' src={logo} alt="" /></a>

            <div className="hamburger__menu" onClick={handleClick} data-aos="fade-left" data-aos-duration = "700" data-aos-delay= "200">
                  <span id="first__one"></span>
                  <span id="last__one"></span>
            </div>
            <div className="closeBtn" onClick={handleCloseBtnClick}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                 </svg>
            </div>
              

            <div className="navbar-collaps me-3" data-aos="fade-up" data-aos-duration = "400" data-aos-delay= "200">
                 
                 <ul className="navbar-navs p-5 pt-0 pb-0 ms-auto my-0">
                     <li className="navbar-items">
                        <NavLink to="/">Home</NavLink>
                     </li>
                     <li className="navbar-items">
                        <a href="#about">About us</a>
                     </li>
                     <li className="navbar-items">
                        <a href="#shop">Shop</a>
                     </li>
                     <li className="navbar-items">
                        <NavLink to="/order">Order</NavLink>
                     </li>
                     <li className="navbar-items">
                        <a href="#testimonials">Testimonials</a>
                     </li>
          
                 </ul>
                 <ul className='px-0 px-lg-5 shopping_cart' data-aos="fade-left" data-aos-duration = "700" data-aos-delay= "200">
                     <li className='d-flex justify-content-center align-items-center'>
                          <NavLink to="/card" >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                   </svg>
                                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                        {cartItem}
                                   </span>
                           </NavLink>
                           <div className = "d-flex justify-content-center m-3 nav_social_links d-lg-none">
                                 <a  href="https://www.facebook.com/karim.balla.336/" className='d-flex justify-content-center align-items-center m-2'><i class="fa-brands fa-facebook-f"></i></a>
                                 <a  href="https://www.instagram.com/karim_portfolio19/" className='d-flex justify-content-center align-items-center m-2'><i class="fa-brands fa-instagram"></i></a>
                                 <a  href="https://twitter.com/TVkarim19" className='d-flex justify-content-center align-items-center m-2'><i class="fa-brands fa-twitter"></i></a>
                                 <a  href="" className='d-flex justify-content-center align-items-center m-2'><i class="fa-brands fa-tiktok"></i></a>
                           </div>
                     </li>
                 </ul>
            </div>
         
          </nav>
            
        </div>
    )
}
