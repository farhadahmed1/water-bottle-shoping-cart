
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



export { addToLS, getStoredCart };

