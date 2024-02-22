import { useEffect, useState } from "react";
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
 // console.log( bottles);

  // event-handelar 
  const handleAddToCart = bottle => {
    //console.log("bottale is going to cart");
    //console.log(bottle);
    const newCart = [...cart ,bottle];
    setCart(newCart);

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