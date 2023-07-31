import React from 'react';
import Landingpage from './landingPage';
import About from './About';
import Cookiespopup from './cookiespopup';
import Shop from './shop';
import Testimonials from './testimonials';
import TestimonialsN2 from './TestimonialsN2';
import Newsletter from './newsletter';
import HandlingCartData from './context/HandlingCartData';

export default function Section() {
  return (
      <section>
        <HandlingCartData>
             <Landingpage />
              <Cookiespopup />
              <About />
              <Shop />
              <Testimonials/>
              <TestimonialsN2 />
              <Newsletter />
        </HandlingCartData>
      </section>
  )
}
