import React from 'react';
import client1 from '../images/clientImg.jpeg';
import client2 from '../images/clientImg2.jpeg';
import client3 from '../images/clienImg3.jpeg';
import client4 from '../images/clientImg4.jpeg';
import client5 from '../images/clientImg5.jpeg';
import client6 from '../images/clientImg6.jpeg';

export default function TestimonialsN2() {

    const myImgstyle = {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        marginBottom: '15px',
        marginTop: '15px',
        objectFit: 'cover',
        boxSshadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.189)'
    }

  return (
    <div id='testimonials' className='d-lg-none'>
         <div className="container">
                    <div className='aboutus_title mt-5'>
                       <h5 className='text-start'>Testimonials</h5>
                       <p className='text-start'>Our happy clients</p>
                    </div>
        </div>

        {/* ______________ */}
       <div className='testemonials_slide my-5'>
          <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="true">
             <div class="carousel-indicators" style={{top:'100%' , background:'#d6672f'}}>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 3"></button>
             </div>
             <div class="carousel-inner">
               <div class="carousel-item active">
                     <div className='d-flex justify-content-center w-100'>
                               <div className="card shadow">
                                    <div className="client_img">
                                        <img src={client1} alt="" style={myImgstyle}/>
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
                             
                                                        
                     </div>
               </div>
               <div class="carousel-item">
                    <div className='d-flex justify-content-center w-100'>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client3} alt="" style={myImgstyle}/>
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
                    </div>
               </div>
               <div class="carousel-item">
                         <div className='d-flex justify-content-center w-100'>
                              <div className="card shadow">
                                    <div className="client_img">
                                    <img src={client2} alt="" style={myImgstyle}/>
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
                        </div> 
               </div>
               <div class="carousel-item">
                         <div className='d-flex justify-content-center w-100'>
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
                        </div>
               </div>
               <div class="carousel-item">
                     <div className='d-flex justify-content-center w-100'>
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
                     </div>
               </div>
               <div class="carousel-item">
                        <div className='d-flex justify-content-center w-100'>
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
                         </div>
               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
             </button>
        </div>
      </div>

    </div>
  )
}
