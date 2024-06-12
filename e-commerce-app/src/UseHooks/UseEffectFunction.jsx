import { useEffect, useContext, useState } from "react";
import { fetchDataFunction } from "../Fetch_Data/Fetch_data.js";
import { ItemsContext } from "../context/ItemsContext";
import { UserContext } from "../context/UserContext.jsx";
import { checkLocalStorage } from "../LocalStorageHandle/HandleLocalStorage.jsx";

export const UseEffectFunction = () => {

    const itemsCtx = useContext(ItemsContext);
    const userCtx = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let data = await fetchDataFunction('http://localhost:3000/items');
            itemsCtx.addItems(data);
            setLoading(false);
        })()

        checkLocalStorage(userCtx);
    }, []);

    if(!loading)
        return true;
}