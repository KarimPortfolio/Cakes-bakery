import React from 'react';
import { useState } from 'react';
import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import bakerpicture from '../images/aboutus.jpg';
import categorieCake1 from '../images/categorieCake1.jpeg';
import categorieCake2 from '../images/categorieCake2.jpeg';
import categorieCake3 from '../images/categorieCake3.jpeg';
import AOS from 'aos';

export default function About() {
  AOS.init();
  const [owner , setOwner] = useState('Mohamed Karim Balla');
  const [identify , setIdentify] = useState('Cakes Bakery owner');

  return (
    <div id='about'>
        <div className='container pt-5'>
            <div className='aboutus_title'>
               <h5 className='text-start'>ABOUT CAKES BAKERY</h5>
               <p className='text-start'>A expirt baker & cake designer</p>
            </div>
            <div className="row">
               <div className="col-lg-5 bakerinfo mt-5">
                  <img src={bakerpicture} alt="" />
                  <h5 className='mt-3'>{owner}</h5>
                  <p className='text-center'>{identify}</p>
               </div>
               <div className="col-lg-7 mt-5 pt-5">
                  <h5 className='mt-3 text-start'>Cakes Bakery</h5>
                  <p className='mt-4 me-5 pe-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur corrupti nihil optio ipsa magni, odit debitis aliquam. Rerum, sint! Accusantium consequuntur est inventore vel dolorem, facilis nihil, eum magni consectetur cum repellat vero ea mollitia obcaecati tenetur unde quibusdam!</p>
                  <div className='d-flex mt-3 justify-content-lg-start justify-content-center'><button className='btn btn-primary'>Learn more <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" className='ms-1' fill="currentColor" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></button></div>
               </div>
            </div>
            <div className="my_categorie mt-5 pt-5">
               <div className="row justify-content-center">
                  <div className="categ_parts shadow col-lg-3 mt-4 mt-lg-0">
                      <div className=''>
                          <img src={categorieCake1} alt="" />
                      </div>
                      <h5 className='mt-4' >Birthday Cakes</h5>
                      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga?</p>
                  </div>
                  <div className="categ_parts shadow col-lg-3 mt-4 mt-lg-0">
                       <div>
                          <img src={categorieCake2} alt="" />
                       </div>
                       <h5 className='mt-4'>Weeding Cakes</h5>
                       <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga?</p>
                  </div>
                  <div className="categ_parts shadow col-lg-3 mt-4 mt-lg-0">
                       <div>
                           <img src={categorieCake3} alt="" />
                       </div>
                       <h5 className='mt-4'>Party Cakes</h5>
                       <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fuga?</p>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}
