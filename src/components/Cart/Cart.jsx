
import './Cart.css';
const Cart = (cart) => {
    const {category, name , price } = cart.cart
    return (
        <div className='cart-container'>
             <h6>Cart Bottles :{cart?.cart?.length}</h6>
             <ul>
                {
                    cart.cart.map(cart=><li key={cart.id}>{cart.name} {cart.price}$</li>)
                }
             </ul>
        </div>
    );
};

export default Cart;