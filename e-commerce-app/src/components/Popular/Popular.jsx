import React, {useEffect, useState, useContext} from 'react'
import './Popular.css'
import { ItemsContext } from '../../context/ItemsContext'
import Item from '../Item/Item';

function Popular() {

    const {items} = useContext(ItemsContext);

    const popularArr = items.sort(({sale: a},{sale: b}) => b-a).slice(0,4);

  return (
    <div className='popular-con'>
        {popularArr.map( item => 
            <Item key={item.id}
                  item={item}/>
        )}
    </div>
  )
}

export default Popular