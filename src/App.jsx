import {React} from 'react-dom';
import './App.css';
import './css/main.css';
import { createContext, useState , useEffect } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Order from './components/order';
import Home from './components/home';
import ScaleLoader from "react-spinners/ScaleLoader";
import Logo from './images/ouLogo.png';
import Card from './components/card';
import HandlingCartData from './components/context/HandlingCartData';



function App() {

   const myLogostyle = {
       width: '130px',
       height: '100px'
   }

   const [count, setCount] = useState(0);
   
   const [loading , setLoading] = useState(false);

   useEffect( () => {
      setLoading(true)
      setTimeout( () => {
           setLoading(false);
      },4000);

      if (count < 1) {
          setCount(count + 1);
      }

   },[count])

  return (

       
      
      <div className="App" style={loading ? {height:'100vh' , display:'flex' , justifyContent:'center' , alignItems:'center',background:'#000'} : {height:'0px' , display:'block'} } >

                    {
                       loading ? (
                           <div>
                                <img src={Logo} alt="" style={myLogostyle} className="mb-4" data-aos="fade-up" data-aos-duration = "800" data-aos-delay= "200"/>
                                
                                <ScaleLoader color={'#d6672f'} loading={loading} size={50} aria-label="Loading ScaleLoader" data-testid="loader" data-aos="fade-up" data-aos-duration = "800" data-aos-delay= "800"/>
                           </div>
                       
                      ) : (     
                             <div className="routes">
                                   <HandlingCartData>
                                       <Routes>
                                           <Route path='/' element = { <Home /> } />
                                           <Route path='/order' element = { <Order /> } />
                                           <Route path='/card' element={ <Card /> } />
                                           <Route path='/*' element={<div style={{height:'100vh' , display:'flex' , justifyContent:'center' , alignItems:'center' , background:'linear-gradient(45deg, #fdd091 ,#faa87f)' , flexDirection:'column'}}><a href='/'><img src={Logo} style={myLogostyle} /></a><h1>404 | NOT FOUND</h1></div>} />
                                       </Routes>
                                   </HandlingCartData>
                             </div>
                      )
                    }

              
      </div>
       
  
  );
}

export default App;
