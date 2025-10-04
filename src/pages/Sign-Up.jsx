
import { Link } from "react-router-dom"
import image2 from "../assets/images/signup.png"
function Sign (){
    return(
        <div className="flex object-cover">
        <div className="ml-20 flex-col">
        <div className="text-4xl font-bold mt-8 pl-8 pb-4 ml-20">
          <p>Create  An  Account</p>
        </div>
            <div className="flex gap-4">
                <div className="container flex items-center rounded-full border-2 mt-6 h-20 w-80">
          <div className="ml-6"></div>
          <input
            className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="container flex items-center rounded-full border-2 mt-6 h-20 w-80">
          <div className="ml-6"></div>
          <input
            className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
            type="text"
            placeholder="Last Name"
          />
        </div>
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
            type="tel"
            placeholder="Phone Number"
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
        <div className="container flex items-center rounded-full border-2 mt-12 h-24 w-170">
          <div className="ml-6"></div>
          <input
            className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170 bg-green-700 text-white text-2xl font-bold"
        >
          Create Account
        </button>
        <hr className="mt-6"/>
        <button
          type="submit"
          className="flex items-center justify-center rounded-full border-2 mt-12 h-24 w-170  text-blue-500 text-2xl font-bold"
        >
          Sign Up With Google
        </button>
        <div className="flex mt-8 ml-6 text-2xl gap-4 ">
          <p>Already Have An Account?</p>
          <Link to="/login" className="text-green-400">Log In</Link>
        </div>
        
        
    
        
        </div>
           <img src={image2} alt="sign " className="w-270 h-278 ml-4 object-cover" />  

        </div>
    )
}
export default Sign