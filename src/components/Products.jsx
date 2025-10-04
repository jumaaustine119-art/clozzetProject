

import Product from "./Product";
import knitted from "../assets/images/knitted-sweater.png";
import unisex from "../assets/images/unisex.png";
import dress from "../assets/images/slim-banquet-dress.png";
import denim from "../assets/images/denim-jeans.png";
function Products({ cart, setCartCopy, cartCopy }) {
  return (
    <div className="container mx-auto border font-bold">
      <div className=" flex justify-between py-5 mx-4">
        <h2>Product</h2>
        <h2>Quality</h2>
        <h2>Price</h2>
      </div>
      <hr></hr>
      <div className="m-4 ">
        {cart &&
          cart.map((cartItem, idx) => {
            return (
              <Product
                key={idx}
                cartItem={cartItem}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Products;