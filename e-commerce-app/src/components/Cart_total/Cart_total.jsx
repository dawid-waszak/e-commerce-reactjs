import React, { useContext, useState } from 'react'
import { ItemsContext } from '../../context/ItemsContext'
import { UserContext } from '../../context/UserContext'
import './Cart_total.css'

function Cart_total() {
    const {itemsInCart} = useContext(UserContext);
    const {findItem} = useContext(ItemsContext);

    let totalPrice = 0;
    let count = 0;
    let getItems = itemsInCart.filter( el => el.quantity > 0);
    for(let i = 0;i < getItems.length;i++){
        let item = findItem(getItems[i].id); 
        const realPrice = (item.price) - (item.price * item.sale);
        totalPrice += realPrice * getItems[i].quantity;
        count += getItems[i].quantity;
    }
    
    const val = totalPrice.toFixed(2);
    const itemsCount = count;

    if(itemsCount > 0){
        return (
            <>
            <div className="total-con">
                <div className="total-stats">
                    <h1 style={{fontWeight: '700'}}>Total</h1>
        
                    <h2 style={{fontWeight: '500'}}>{val}$</h2>
        
                    <h2 style={{fontWeight: '500'}}>{itemsCount} items</h2>
                </div>
                <div >
                    <form action="" className="submit-form">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id='full-name' placeholder='John Doe' />
                        <label htmlFor="phone-number">Phone number</label>
                        <input type="number" id='phone-number' placeholder='+42 123456789'/>
                        <input type='submit' value='Go to payment'/>
                    </form>
                </div>
            </div>
            </>
          )
    }
    else{
        return (
            <>
                <div style={{textAlign: 'center'}} >
                    <h1>There is nothing yet</h1>
                    <a href="/">Check our offer</a>
                </div>
            </>
        )
    }
  
}

export default Cart_total