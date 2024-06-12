import React, { useState } from 'react'
import './Cart_item.css'

function Cart_item( {item, quantity, userCtx} ) {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const updateLocalQuantity = (e) => {
    let intValue = parseInt(e.target.value);
    if(intValue > 0){
      setLocalQuantity(intValue);
      userCtx.updateItemsQuantity(item.id, parseInt(intValue));
    }
  }

  const buttonQuantity = (val=1) => {
    if(val < 0 && localQuantity <= 1)
      return 0;
    userCtx.updateItemsQuantity(item.id, (localQuantity + val));
    setLocalQuantity(q => q + val);
  }

  if(item != null){
    return (
      <div className='cart-item-con'>
        <img src={item.image_url} alt="" />
        <div className="left">
          <h1>{item.name}</h1>
          <div className="price">
            {item.sale > 0.0 && (<h2 className='sale'>{(item.price).toFixed(2)}$</h2>)}
            <h2>{((item.price) - (item.price * item.sale)).toFixed(2)}$</h2>
          </div>
          </div>
        <div className="quantity-con">
          <button onClick={() => buttonQuantity(-1)}>-</button>
          <input type="number" value={localQuantity} onChange={(e) => updateLocalQuantity(e)} />
          <button onClick={() => buttonQuantity()}>+</button>
        </div>
        <button className='delete-btn' onClick={() => userCtx.deleteItemFromCart(item.id)}><i className="fa-solid fa-trash"></i></button>
      </div>
      // TODO 
      // + AND - BUTTONS FOR QUANTITY
      // DELETE FROM CART BUTTON
    )
  }
  else{
    return (
      <>

      </>
    )
  }

  
}

export default Cart_item