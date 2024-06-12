import React, { createContext, useContext, useState } from 'react'
import { setLocalStorage } from '../LocalStorageHandle/HandleLocalStorage';
import { ItemsContext } from './ItemsContext';

export const UserContext = createContext({
    id: 0,
    name: "",
    itemsInCart: [{
        id: 0,
        quantity: 0
    }],
    changeName: () => {},
    addOrSubtractToCart: () => {},
    isInCart: () => {},
    updateData: () => {},
    updateItemsQuantity: () => {},
    deleteItemFromCart: () => {}
});

function UserContextProvider({children}) {
    let emptyCart = [];
    for(let i=1;i<10+1;i++){
        emptyCart.push({id: i, quantity: 0});
    }

    const [name, setName] = useState("Guest");
    const [itemsInCart, setItemsInCart] = useState(emptyCart);

    const changeName = (e) => {
        setName(e);
    }

    const addOrSubtractToCart = (id, value=1) => {
        let items = [...itemsInCart];
        let itemIndex = items.findIndex( el => el.id == id);
        itemIndex >= 0 && (items[itemIndex].quantity += value);

        setItemsInCart(items);
        setLocalStorage(name, itemsInCart);
    }

    const isInCart = (id) => {
        let items = [...itemsInCart];
        if(items.length > 0){
            let itemIndex = items.findIndex( el => el.id == id);

            return items[itemIndex].quantity > 0 ? true : false;
        }
    }

    const updateData = (user) => {
        let userData = JSON.parse(user);
        setName(userData.name);
        setItemsInCart(userData.itemsInCart);
    }

    const updateItemsQuantity = (id, value) => {
        let items = [...itemsInCart];
        let objIndex = items.findIndex( el => el.id == id);

        if(objIndex >= 0){
            items[objIndex].quantity = value;
            setItemsInCart(items);
            setLocalStorage(name, itemsInCart);
        }
    }

    const deleteItemFromCart = (id) => {
        let items = [...itemsInCart];
        let objIndex = items.findIndex( el => el.id == id);

        if(objIndex >= 0){
            items[objIndex].quantity = 0;
            setItemsInCart(items);
            setLocalStorage(name, itemsInCart);
        }
    }

    const userCtx = {
        id: 1,
        name: name,
        itemsInCart: itemsInCart,
        changeName: changeName,
        addOrSubtractToCart: addOrSubtractToCart,
        isInCart: isInCart,
        updateData: updateData,
        updateItemsQuantity: updateItemsQuantity,
        deleteItemFromCart: deleteItemFromCart
    }

  return (
    <UserContext.Provider value={userCtx}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider