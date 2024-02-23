
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')

    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}

const savaCartToLS = cart => {
    const storedCartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart' , storedCartStringfied);
}
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push( id)
    // save to local storage
    savaCartToLS(cart);
}

const removeFromLs = id => {
    const cart = getStoredCart()
    const remaning = cart.filter(idx=> idx !== id);
    savaCartToLS(remaning)
}

export { addToLS, getStoredCart, removeFromLs };

