import React from 'react';
import brandImg from '../images/ouLogo.png';
import {NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='py-5'>
         <div className="container pt-5">
               <div className="row">
                    <div className="col-md-6 col-lg-4">
                         <div className="logo_image d-flex justify-content-center justify-content-md-start">
                              <img src={brandImg} alt="Our Brand" />
                         </div>
                         <div className="info_about_brand mt-4">
                              <p className='text-center text-md-start w-100 w-md-auto'>CAKES BAKERY lorem ipsum dolor sit amet Lorem ipsum dolor sit. Lorem, ipsum.</p>
                         </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ms-lg-5 ps-lg-5 mt-4">
                         <div className="quick_links_title">
                             <h5 className="text-center text-md-start w-100 w-md-auto">Quick links</h5>
                         </div>
                         <div className="quick_links mt-4 d-flex flex-column justify-content-center justify-content-md-start align-items-start">
                             <NavLink to="/" className="text-center text-md-start w-100 w-md-auto">Home</NavLink>
                             <a href="#about" className="text-center text-md-start w-100 w-md-auto">About us</a>
                             <a href="#shop" className="text-center text-md-start w-100 w-md-auto">Shop</a>
                             <NavLink to="/order" className="text-center text-md-start w-100 w-md-auto">Order</NavLink>
                             <a href="#testimonials" className="text-center text-md-start w-100 w-md-auto">Testimonials</a>
                         </div>
                    </div>
                    <div className="col-lg-4 ms-lg-5 ps-lg-5 mt-4">
                        <div className="contact_us_title">
                             <h5 className="text-center text-md-start w-100 w-md-auto">Contact us</h5>
                        </div>
                        <div className="contact_us mt-4">
                            <p className='text-start d-flex'><i class="fa-solid fa-envelope"></i>    <a href="mailto:mohamedkarimballa19@gmail.com" className='ms-3'>mohamedkarimballa19@gmail.com</a></p>
                            <p className='text-start d-flex'><i class="fa-solid fa-square-phone"></i><a href="tel:+212609679375" className='ms-3'>+212 609 769 375</a></p>
                            <p className='text-start d-flex'><i class="fa-solid fa-location-dot"></i><a href="" className='ms-3'>No 204 Lot ASSALAM4 Tangier , MOROCCOO</a></p>
                        </div>
                    </div>
                    <div className="col-12 website_developer mt-5">
                      <p>Template developed by <a href="https://karim-portfolio-2022.000webhostapp.com/">Karim Portfolio</a></p>
                    </div>
               </div>
               <div className='social_media d-flex justify-content-center align-items-center mt-4 '>
                   <div><a href="https://www.facebook.com/karim.balla.336/" className='d-flex justify-content-center align-items-center'><i class="fa-brands fa-facebook-f"></i></a></div>
                   <div><a href="https://www.instagram.com/karim_portfolio19/" className='d-flex justify-content-center align-items-center'><i class="fa-brands fa-instagram"></i></a></div>
                   <div><a href="https://twitter.com/TVkarim19" className='d-flex justify-content-center align-items-center'><i class="fa-brands fa-twitter"></i></a></div>
                   <div><a href="" className='d-flex justify-content-center align-items-center'><i class="fa-brands fa-tiktok"></i></a></div>
               </div>
          
               <div className="copyright mt-3">
                    <p><i class="fa-regular fa-copyright"></i> Cakes Bakery All Right Resereved</p>
               </div>
         </div>
    </footer>
  )
}
