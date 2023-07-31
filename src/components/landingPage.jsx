import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/bakerImgBackground2.jpeg';
import image2 from '../images/bakerImgBackground.jpeg';
import image3 from '../images/bakerImgBackground3.jpeg';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons'


export default function Landingpage() {
  return (
    <div className='landingpage' id='home'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-indicators">
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img src={image1} alt="..." className='img'/>
                   <div class="carousel-caption">
                        <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="100" data-aos-anchor-placement="center-center">Dulces Bakes</h1>
                        <p>a home mading cakes with the greatest ingredients</p>
                        <a href="#shop" className='btn btn-primary shadow-lg mt-2'>Shop now</a>
                        <i class="fa-solid fa-croissant"></i>
                   </div>
                 </div>
                 <div class="carousel-item">
                      <img src={image2} alt="..." className='img' />
                      <div class="carousel-caption">
                              <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="100" data-aos-anchor-placement="center-center">Baking Expertise</h1>
                              <p>we have a huge experience as a bakers and cakes designers</p>
                              <a href="#shop" className='btn btn-primary shadow-lg mt-2'>Shop now</a>
                      </div>
                 </div>
                 <div class="carousel-item">
                   <img src={image3}  alt="..." className='img'/>
                   <div class="carousel-caption">
                       <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="100" data-aos-anchor-placement="center-center">Wonderful  Designing</h1>
                       <p>we can make your life sweeter on bite at a time</p>
                       <a href="#shop" className='btn btn-primary shadow-lg mt-2'>Shop now</a>
                   </div>
                 </div>
               </div>
               {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button> */}
        </div>
    </div>
  )
}
