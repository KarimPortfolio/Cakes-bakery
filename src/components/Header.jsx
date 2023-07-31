import React from 'react';
import Navbar from './Navbar';
import HandlingCartData from './context/HandlingCartData';

export default function Header() {
  return (
      <HandlingCartData>
           <header>
             <Navbar />
          </header>
      </HandlingCartData>
  )
}
