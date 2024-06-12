import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Cart_item from '../components/Cart_item/Cart_item';
import { ItemsContext } from '../context/ItemsContext';
import Cart_total from '../components/Cart_total/Cart_total';

function Cart() {
    const userCtx = useContext(UserContext);
    const itemsCtx = useContext(ItemsContext);

    const itemsFiltered = [...userCtx.itemsInCart];

  return (
    <>
    <section id="cart">
      <div className='cart-con'>
          {itemsFiltered.filter( el => el.quantity > 0).map( item => 
              <Cart_item key={item.id}
                        item={itemsCtx.findItem(item.id)}
                        quantity={item.quantity}
                        userCtx={userCtx}/>
          )}
      </div>
      <Cart_total/>
    </section>
    </>
    // TODO 
    // ADD SUMMARY VALUE
    // ADD FORM WITH USER DATA (LOGGED USER AUTO FILL)
  )
}

export default Cart