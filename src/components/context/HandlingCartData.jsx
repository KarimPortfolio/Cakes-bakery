import React , {createContext , useState} from 'react'

export const myContext = createContext();

function HandlingCartData(props) {

    const [items , setItems] = useState([]);
    const [cartItem , setCartItem] = useState(0);

  return (
     <myContext.Provider value={{items , setItems , cartItem , setCartItem}}>
         {props.children}
     </myContext.Provider>
  )
}

export default HandlingCartData;