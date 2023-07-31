import React, { useContext, useEffect, useState } from 'react';
import Navbar from './orderNav';
import orderImg from '../images/bakerImg.jpeg';
import Footer from './footer';
import { myContext } from './context/HandlingCartData';

export default function Order() {

  const [orderCart , setOrderCart] = useState(0);

 

  const handleSubmit = (e) => {
      e.preventDefault();
      setOrderCart(orderCart + 1);
      
  }

  

  return (
    <div >
                 
              <div>
                    <Navbar cart = {orderCart} />
              <div className="container">
                 <div className='aboutus_title mt-5'>
                        <h5 className='text-start'>New Order</h5>
                 </div>
              </div>
              <div className="order_part">
                  <div className="row m-0">
                      <div className="col-lg-6 order-1 my-4 my-lg-0 order-lg-0">
                          <form>
                              <h5 className='mb-4 text-start'>Order your cake now</h5>
                              <div class="mb-4 d-flex justify-content-start flex-column align-items-start">
                                <input type="text" class="form-control" id="exampleInputEmail1" name='name' placeholder='Full name' aria-describedby="emailHelp" />
                              </div>
                              <div class=" input-group d-flex justify-content-start flex-column align-items-start">
                                  <div class="input-group mb-4">
                                      <select class="input-group-text" name="" id="basic-addon1">
                                         <option value="+212">+212</option>
                                         <option value="+32">+32</option>
                                         <option value="+34">+34</option>
                                         <option value="+1">+1</option>
                                         <option value="+44">+44</option>
                                      </select>
                                      <input type="text" class="form-control" placeholder="Phone number" name='phonenumber' aria-describedby="basic-addon1" />
                                  </div>
                              </div>
                              <div>
                                  <select class="form-select mb-4" aria-label="Default select example">
                                      <option selected>Cake Type</option>
                                      <option value="Fruit cake">Fruit cake</option>
                                      <option value="Cookiefaultline">Cookie fault line</option>
                                      <option value="Vanillanaked">Vanilla naked</option>
                                      <option value="Vanillaandstrawberry">Vanilla & strawberry</option>
                                      <option value="Birthdaydesign">Birthday design</option>
                                      <option value="Weedingdesign">Weeding design</option>
                                      <option value="Childrencake">Children cake</option>
                                      <option value="Cupcakes">Cupcakes</option>
                                  </select>
                              </div>
                              <div className="mb-4">
                                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Any other additions'></textarea>
                              </div>
      
                              <button type="submit" onClick={handleSubmit} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Order</button>
                             
                          </form>
                      </div>
                      <div className="col-lg-6 my-4 my-lg-0">
                          <img src={orderImg} alt="" className='order_baker_img'/>
                      </div>
                  </div>
              </div>
              <div class="modal fade ordered_succefly" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body">
                               <i class="fa-solid fa-circle-check"></i>
                               <h1 className='mt-4'>Ordered successfly</h1>
                         </div>
                       </div>
                     </div>
               </div>
                {/* Taill: {items.length} */}
              <Footer />
            </div>

         
    </div>
  )
}
