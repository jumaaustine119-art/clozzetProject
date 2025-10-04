import logo from "../assets/images/logo.svg";
import { ShoppingCart } from "lucide-react";
// import Category from "./Categories";
import { Link } from "react-router-dom";

function Nav({cart = []}) {
  return (
    <nav>
      <div className="container mx-auto ">
        <div className="flex place-content-between">
          <div className="flex gap-8">
            <img src={logo} alt={logo} />
            <ul className="flex gap-12 pt-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul> 
          </div>
          <div>
            <ul className="flex gap-6 pt-6">
              <Link to="/cart" className="relative">
                <span className="flex justify-center bg-[#45C9A1] rounded-full w-[2em] h-[2em] items-center font-bold absolute bottom-4 left-4">{cart.length}</span>
                <ShoppingCart />
              </Link>
              <li>
              <Link to="/sign-up">Sign Up</Link>
              </li>
              <Link to="/logIn">
              <button>Log In</button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
