import React, { useContext } from 'react'
import './Nav.css'
import { UserContext } from '../../context/UserContext.jsx'

function getCartCount(items){
    let val = 0;

    for(let i = 0;i < items.length; i++){
        if(items[i].quantity > 0)
            val += 1;
    }

    return val;
}

function Nav() {
    const { itemsInCart } = useContext(UserContext); 

    const inCartCount = getCartCount(itemsInCart);
  return (
    <nav>
        <a href="/">Home</a>
        <a href="/cart"><i className="fa-solid fa-cart-shopping"></i>{inCartCount}</a>
    </nav>
  )
}

export default Nav