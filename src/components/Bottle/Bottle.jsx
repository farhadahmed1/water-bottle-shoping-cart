import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({bottle,handleAddToCart}) => {
    const {name , price ,img } = bottle ;


   //console.log(bottle);
    return (
        <div className="bottle">
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p> price {price}$</p>
            <button onClick={() =>handleAddToCart(bottle)}> purches</button>
        </div>
    );
};
Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired,
}

export default Bottle;