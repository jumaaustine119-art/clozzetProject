import { Link } from "react-router-dom";
import { Ban } from "lucide-react";
import Products from "../components/Products";
import Summaries from "../components/Summaries";
import { useEffect, useState } from "react";

function Cart({ cart, }) {
  const [cartCopy, setCartCopy] = useState([]);
  useEffect(() => {
    setCartCopy([...cart]);
  }, []);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex container mx-auto gap-4">
          <Products cart={cart} setCartCopy={setCartCopy} cartCopy={cartCopy} />
          <Summaries cartCopy={cartCopy} setCartCopy={setCartCopy} />
        </div>
      ) : (
        <div className="flex items-center h-full justify-center flex-col gap-4 pt-60">
          <div>
            <Ban />
            <p> No Item In Cart</p>
          </div>
          <div>
            <Link to="/Shop">
              <button className="border bg-green-200 rounded-xl">Shop Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;