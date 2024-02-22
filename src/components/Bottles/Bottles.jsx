import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import './Bottles.css';


const Bottles = () => {
  const [bottles , setBottles]= useState([]);
  const [cart , setCart] = useState([]);

  useEffect(() => {
    fetch('bottles_data.json')
    .then(res => res.json())
    .then(data => setBottles(data))

  },[])

  useEffect(() => {
    console.log(bottles.length);
    if(bottles.length>0){
      const storedCart = getStoredCart();
    console.log(storedCart);
    }

  },[bottles])
 // console.log( bottles);

  // event-handelar 
  const handleAddToCart = bottle => {
    //console.log("bottale is going to cart");
    //console.log(bottle);
    const newCart = [...cart ,bottle];
    setCart(newCart);
    addToLS(bottle.id)

  }



    return (
        <div>
            <h2> Available Bottles here : {bottles.length}</h2>
            {/* <h4> Cart Bottles{cart.length}</h4> */}
            <Cart cart={cart}> </Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle=><Bottle
                    key= {bottle.id}
                    bottle={bottle}
                    handleAddToCart= {handleAddToCart}
                    ></Bottle> )
                }
            </div>
            
        </div>
    );
};

export default Bottles;