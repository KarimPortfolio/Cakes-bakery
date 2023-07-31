import React , {useState , useContext, useEffect , useRef} from 'react';
import Navbar from './Navbar';
import { myContext } from './context/HandlingCartData';

export default function Card() {

  const {items , setItems} = useContext(myContext);

  return (
    <div>
          <Navbar />
          <h1 className='mt-5'>This page still in developement period</h1>
    </div>
  )
}
