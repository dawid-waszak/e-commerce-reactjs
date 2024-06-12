import React, {useState, createContext} from 'react'

export const ItemsContext = createContext({
    items: [],
    addItems: () => {},
    findItem: () => {}
});

function ItemsContextProvider({children}) {

    const [items, setItems] = useState([]);

    const handleAddItems = (a) => {
        setItems(a);
    }

    const findItem = (id) => {
        let item = null;
        item = items.find( el => el.id == id);

        return item;
    }

    const itemsContext = {
        items: items,
        addItems: setItems,
        findItem: findItem
    }

  return (
    <ItemsContext.Provider value={itemsContext}>
        {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider