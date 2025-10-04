import image from "../assets/images/login.png";
import { Link } from "react-router-dom"
function Login() {
  return (
    <div className="flex object-cover">
      <img src={image} alt="Login" className="w-270 h-200 ml-4 object-cover" />
      <div className=" flex-col ml-20">
        <div className="text-4xl font-bold mt-4 pl-4 pb-4 ml-12">
          <p>Login To Your Account</p>
        </div>

        <div className="container flex items-center rounded-full border-2 mt-6 h-24 w-170">
          <div className="ml-6"></div>
          <input
            className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="container flex items-center rounded-full border-2 mt-12 h-24 w-170">
          <div className="ml-6"></div>
          <input
            className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex mt-8 ml-6 text-2xl">
          
          <div className="flex mt-8 ml-6  items-center">
            <input type="checkbox" id="remember" className="w-4 h-4 mr-2" />
            <label htmlFor="remember" className="mr-8">
              Remember Me
            </label>
            <a href="#" className="ml-30 text-green-400">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170 bg-green-400 text-white text-2xl font-bold"
        >
          Sign In
        </button>
        <hr className="mt-6"/>
        <button
          type="submit"
          className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170  text-blue-500 text-2xl font-bold"
        >
          Log In With Google
        </button>
        <div className="flex mt-8 ml-6 text-2xl gap-4">
          <p>Dont Have An Account Yet?</p>
          <Link to="/Sign" className="text-green-400">Sign Up Free</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
