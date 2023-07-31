import React from 'react';

export default function Newsletter() {
  return (
    <div className='container shadow news_letter pt-4'>
        
        <div className="row justify-content-center mt-4">
           <div className="col-12 col-lg-4">
                <h5 className='text-center text-lg-start mb-3'>Subscribe to our newsletter</h5>
                <p className='text-center text-lg-start'>Lorem ipsum dolor sit amet consectetur adipisicing labore message now !</p>
           </div>
 
           <div className="col-12 col-md-8 col-lg-6 ms-5 pt-3">
               <form action="" >
                    <div className=' d-flex justify-content-space-between flex-column flex-sm-row'>
                        <input class="form-control me-4 form-control-lg" type="text" placeholder="Type your email" aria-label="" />
                        <button type="button" className='btn btn-primary d-flex justify-content-center align-items-center mt-4 mt-sm-0'><i class="fa-regular fa-paper-plane me-2"></i> Subscribe</button>
                    </div>
               </form>
           </div>

        </div>
    </div>
  )
}
