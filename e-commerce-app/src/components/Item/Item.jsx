import React, { useContext } from 'react'
import './Item.css'
import { UserContext } from '../../context/UserContext'

function Item( {item} ) {
    var userCtx = useContext(UserContext);

  return (
    <div className={'item-card ' + (item.sale > 0.0 && 'card-shadow')}>
        {item.sale > 0.0 && (<div className="sale-card">{(item.sale*100).toFixed(0)}% off!</div>)}
        <img src={item.image_url} alt="" />
        <h1>{item.name}</h1>
        <div className="price">
            {item.sale > 0.0 && (<h2 className='sale'>{(item.price).toFixed(2)}$</h2>)}
            <h2 className='price-value'>{item.sale > 0.0 ? (((item.price) - (item.price * item.sale)).toFixed(2)) : (item.price) }$</h2>
        </div>
        {userCtx.isInCart(item.id) ? (
            <p className='in-cart'>Item in cart <a href="/cart" style={{color: 'red'}}>Go to cart</a></p>
        ) :
        (
            <button className='add-btn' onClick={() => userCtx.addOrSubtractToCart(item.id)}>Add to cart</button>
        )}
        
    </div>
  )
}

export default Item