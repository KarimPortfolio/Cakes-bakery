import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import client1 from '../images/clientImg.jpeg';
import client2 from '../images/clientImg2.jpeg';
import client3 from '../images/clienImg3.jpeg';
import client4 from '../images/clientImg4.jpeg';
import client5 from '../images/clientImg5.jpeg';
import client6 from '../images/clientImg6.jpeg';

export default function Testimonials() {
  return (
    <div id='testimonials' className='d-none d-lg-block'>
             <div className="container">
                    <div className='aboutus_title mt-5'>
                       <h5 className='text-start'>Testimonials</h5>
                       <p className='text-start'>Our happy clients</p>
                    </div>
             </div>
             <div className='testemonials_slide my-5'>
                 
                    <Swiper
                           slidesPerView={4}
                           centeredSlides={true}
                           spaceBetween={30}
                           grabCursor={true}
                           pagination={{
                             clickable: true,
                           }}
                           modules={[Pagination]}
                           className="mySwiper"
                    >
                          <SwiperSlide>
                             <div className="card shadow">
                                    <div className="client_img">
                                        <img src={client1} alt="" />
                                    </div>
                                    <div className="client_info">
                                          <h5>Keara Nyah</h5>
                                          <p className='m-2'>London , UK</p>
                                          <p>Ordered Birthday Cake</p>
                                    </div>
                                    <div className="client_feedback">
                                         <i class="fa-sharp fa-solid fa-quote-left"></i>
                                         <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores. </p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client2} alt="" />
                                    </div>
                                    <div className="client_info">
                                           <h5>Sherley Andy</h5>
                                           <p className='m-2'>Oxford , UK</p>
                                          <p>Ordered Party Cake</p>
                                    </div>
                                    <div className="client_feedback">
                                        <i class="fa-sharp fa-solid fa-quote-left"></i>
                                        <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores. </p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client3} alt=""/>
                                    </div>
                                    <div className="client_info">
                                           <h5>Cassandra Hiram</h5>
                                           <p className='m-2'>Southampton , UK</p>
                                           <p>Ordered Fruit Cake</p>
                                    </div>
                                    <div className="client_feedback">
                                        <i class="fa-sharp fa-solid fa-quote-left"></i>
                                        <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores. </p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client4} alt="" />
                                    </div>
                                    <div className="client_info">
                                         <h5>Bryn Cleveland</h5>
                                         <p className='m-2'>Liverpool , UK</p>
                                         <p>Ordered Weeding Cake</p>
                                    </div>
                                    <div className="client_feedback">
                                         <i class="fa-sharp fa-solid fa-quote-left"></i>
                                         <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores. </p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client5} alt="" />
                                    </div>
                                    <div className="client_info">
                                        <h5>Christian Loyd</h5>
                                        <p className='m-2'>London , UK</p>
                                        <p>Ordered Cupcake</p>
                                    </div>
                                    <div className="client_feedback">
                                         <i class="fa-sharp fa-solid fa-quote-left"></i>
                                         <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores soluta.</p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client6} alt="" />
                                    </div>
                                    <div className="client_info">
                                          <h5>Josephina Hadley</h5>
                                          <p className='m-2'>Cambridge , UK</p>
                                          <p>Ordered Birthday Cake</p>
                                    </div>
                                    <div className="client_feedback">
                                         <i class="fa-sharp fa-solid fa-quote-left"></i>
                                         <p className='mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas saepe, inventore sunt omnis modi, explicabo cupiditate dolores. </p>
                                    </div>
                              </div>
                          </SwiperSlide>
                          
                    </Swiper>
             </div>
    </div>
  )
}
