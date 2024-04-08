import React, { useState } from 'react'
import Api from './Api'
import Header from './Header'
import Cart from './Cart'

const App = () => {
    const [cartItems,setCartItems]=useState([])

  return (
    <div>
      
        <Header cartItem={cartItems}  setCartItem={setCartItems}/>

        <Api cartItem={cartItems}  setCartItem={setCartItems} />
        <Cart cart={cartItems}  setCart={setCartItems} />

    </div>
  )
}

export default App
