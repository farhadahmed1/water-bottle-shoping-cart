import PropTypes from 'prop-types';
import './Cart.css';


const Cart = ({cart,handelRemoveFromCart}) => {
  //console.log(cart);
     
    return (
        <div className='cart-container'>
             <h6>Cart Bottles :{cart?.length}</h6>
             <div>
             <ul>
                {
                    cart.map(bottle=> <div key={bottle.id}>
                        <li >{bottle.name} {bottle.price}$</li>
                        <button onClick={()=> handelRemoveFromCart(bottle.id)}>Removed</button>
                        </div>)
                }
             </ul>
             </div>
             
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handelRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;