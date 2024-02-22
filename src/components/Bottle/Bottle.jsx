import './Bottle.css';
const Bottle = (props) => {
    const {bottle,handleAddToCart} = props;
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

export default Bottle;