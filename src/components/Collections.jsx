import Collection from "./Collection";
import jacket from "../assets/images/leather-jacket.png";
import sweatshirts from "../assets/images/sweatshirts.png";
import denim from "../assets/images/denim.png";
import pallazo from "../assets/images/pallazo.png";
import heart from "../assets/images/heart.png"


function Collections( {cart, setCart}) {
  return (
    <div>
      <div className="text-center pt-8 pb-3.5 text-4xl">
        <h2>Featured Collection</h2>
      </div>
      <div className="flex container mx-auto justify-between">
        <Collection
          img={jacket}
          name="Brown Leather Jacket"
          price={2250}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Collection 
        img={sweatshirts} 
        name="Sweatshirt" 
        price= {1800}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Collection 
        img={pallazo} 
        name="Pallazo" 
        price= {2250} 
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Collection 
        img={denim} 
        name="Denim" 
        price= {1200}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
        
      </div>
    </div>
  );
}
export default Collections;