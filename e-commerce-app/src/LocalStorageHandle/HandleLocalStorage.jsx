export const checkLocalStorage = (userCtx) => {
    let user = localStorage.getItem("user");
    if(user != null){
        userCtx.updateData(user);
    }
}

export const setLocalStorage = (name, itemsInCart) => {

    let storage = {name, itemsInCart};
    localStorage.setItem("user", JSON.stringify(storage));
}
