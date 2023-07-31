import React, { useState , useEffect , createContext , useRef, useContext } from 'react';
import shopcake1 from '../images/shopImg1.jpeg';
import shopcake2 from '../images/shopImg2.jpeg';
import shopcake3 from '../images/shopImg3.jpeg';
import shopcake4 from '../images/shopImg4.jpeg';
import shopcake5 from '../images/shopImg5.jpeg';
import shopcake6 from '../images/shopImg6.jpeg';
import shopcake7 from '../images/shopImg7.jpeg';
import shopcake8 from '../images/shopImg8.jpeg';
import { myContext } from './context/HandlingCartData';



export default function Shop() {

  const [shopProducts , setShopProoducts] = useState([
      {id:1 , img:shopcake1 , name:'FRUIT CAKE' , price:'30$'},
      {id:2 , img:shopcake2 , name:'COOKIE FAULT LINE' , price:'30$'},
      {id:3 , img:shopcake3 , name:'VANILLA NAKED' , price:'30$'},
      {id:4 , img:shopcake4 , name:'VANILLA & STRAWBERRY' , price:'30$'},
      {id:5 , img:shopcake5 , name:'BIRTHDAY DESIGN' , price:'30$'},
      {id:6 , img:shopcake6 , name:'WEEDING DESIGN' , price:'30$'},
      {id:7 , img:shopcake7 , name:'CHILDREN CAKE' , price:'30$'},
      {id:8 , img:shopcake8 , name:'CUPCAKE' , price:'30$'}
  ]);

  const {items , setItems} = useContext(myContext);

  const {cartItem , setCartItem}  = useContext(myContext);
 
  const buttons = useRef([]);

  
  useEffect( () => {
     document.querySelector('.badge').innerHTML = cartItem;
  },[cartItem]);

  
//  const handleClick = () => {

      

    //  document.querySelectorAll('.addToCart').forEach( (ele) => {
    //      ele.addEventListener('click' , () => {
    //             const cartItem = {
    //                   id: Math.random() * 10,
    //                   productImage : ele.parentNode.childNodes[0].getAttribute('src') ,
    //                   productName: ele.parentNode.childNodes[1].innerHTML ,
    //                   productPrice: ele.parentNode.childNodes[2].innerHTML
    //             };

    //             const newArr = [...items , cartItem];
    //             setItems(newArr);

    //       })

    //       console.log(items.length);

    //  })

//  }

 const addButtons = ele =>{
      buttons.current.push(ele);
 }



   const handleClick = () =>{ 
       
       setCartItem(cartItem + 1)

       buttons.current.map(
          btn => btn.addEventListener('click' , () => {
        

            var productId = btn.parentNode.getAttribute('id');

            const cartItem = {
                 id:productId,
                 productImage : shopProducts[productId].img ,
                 productName: shopProducts[productId].name ,
                 productPrice: shopProducts[productId].price
            };

            const newArr = [...items , cartItem];
                 
            setItems(newArr);

            console.log(cartItem);
            console.log(newArr);
            console.log(items);

          })
    )}



 
  return (
     
     
       <div id='shop'>
         <div className="container pt-5">
            <div className='aboutus_title mt-5'>
               <h5 className='text-start'>OUR SHOP</h5>
               <p className='text-start'>A humble shop </p>
            </div>
            <div className="container">
               <div className="row mt-5 pt-5 pe-5 ps-5">
                   

                  {shopProducts.map(
                      product => {
                          return(
                            <div className="col-md-6 col-lg-3 cake1" id={product.id} key={product.id}>
                                 <img src={product.img} alt={product.name + ' image'} />
                                 <h5 className='mt-4'>{product.name}</h5>
                                 <p> {product.price} </p>
                                 <button onClick={handleClick} ref={addButtons}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                            </div>
                      )}
                  )}

                   {/* <div className="col-md-6 col-lg-3 cake2">
                       <img src={shopcake2} alt="fruit cake image" />
                       <h5 className='mt-4'>COOKIE FAULT LINE</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake3">
                       <img src={shopcake3} alt="fruit cake image" />
                       <h5 className='mt-4'>VANILLA NAKED</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake4">
                       <img src={shopcake4} alt="fruit cake image" />
                       <h5 className='mt-4'>VANILLA & STRAWBERRY</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake5">
                       <img src={shopcake5} alt="fruit cake image" />
                       <h5 className='mt-4'>BIRTHDAY DESIGN</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake6">
                       <img src={shopcake6} alt="fruit cake image" />
                       <h5 className='mt-4'>WEEDING DESIGN</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake7">
                       <img src={shopcake7} alt="fruit cake image" />
                       <h5 className='mt-4'>CHILDREN CAKE</h5>
                       <p>30$</p>
                       <button onClick={handleClick} ref={button}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div>
                   <div className="col-md-6 col-lg-3 cake8">
                       <img src={shopcake8} alt="fruit cake image" />
                       <h5 className='mt-4'>CUPCAKE</h5>
                       <p>30$</p>
                       <button onClick={handleClick}  className='addToCart btn btn-primary w-75'><i class="fas fa-cart-plus"></i> add to cart</button>
                   </div> */}
              </div>
             </div>
          </div>
        </div>

  )
}
