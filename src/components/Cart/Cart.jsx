import PropTypes from 'prop-types';
import './Cart.css';


const Cart = ({cart}) => {
  //console.log(cart);
     
    return (
        <div className='cart-container'>
             <h6>Cart Bottles :{cart?.length}</h6>
             <div>
             <ul>
                {
                    cart.map(bottle=><li key={bottle.id}>{bottle.name} {bottle.price}$</li>)
                }
             </ul>
             </div>
             
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}
export default Cart;