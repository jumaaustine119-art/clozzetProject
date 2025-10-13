    


import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.png";
import contact from "../assets/images/phone.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
function Footer() {
  return (
    <div className="#eeeeee">
      <h1 className="text-4xl flex justify-center pt-8 font-normal">
        Subscribe & get up to30% OFF
      </h1>
      <div className="flex gap-8 justify-center pt-8">
        <div className="border-2 rounded-full w-100 h-15 border-[#45c9a1] py-2">
          <input
            className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
            type="text"
            placeholder="Enter your Email"
          ></input>
        </div>
        <div>
          <div>
            <button className="border rounded-full w-48 h-15 text-white bg-[#45c9a1]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 container mx-auto pt-12 justify-between">
        <div className="ml-12">
          <img src={logo} alt={logo} />
          <p className="text-2 font-medium mt-2">
            Offering a unique and <br />
            stylish perspective on
            <br /> fashion is our number <br />
            one priority.Confuse <br />
            your mirror by our <br />
            trendy outfits.
          </p>
        </div>
        <div className="py-4 ">
          <h2 className="font-bold">Store</h2>
          <ul className="mt-2">
            <li className="pt-4">Women's Fashion</li>
            <li className="pt-4">Men's Fashion</li>
            <li className="pt-4">Store Sale</li>
            <li className="pt-4">Collections</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Help</h2>
          <ul className="mt-2">
            <li className="pt-4">Customer Support</li>
            <li className="pt-4">Terms & Conditions</li>
            <li className="pt-4">Privacy Policy</li>
            <li className="pt-4">Track Your Order</li>
          </ul>
        </div>
        <div className="mr-12">
          <h2 className="font-bold">Contact Us</h2>
          <div className="flex gap-1 mt-2 pt-4">
            <img className="w-[30px]" src={email} alt={email} />
            <p>contact@clozzet.com</p>
          </div>
          <div className="flex py-4 gap-1">
            <img className="w-[30px]" src={contact} alt={contact} />
            <p>254-700-333-333</p>
          </div>
          <p className="pt-2">Follow Us</p>
          <div className="flex pt-3 gap-2">
            <img className="w-[40px]" src={facebook} alt={facebook} />
            <img className="w-[40px]" src={instagram} alt={instagram} />
            <img className="w-[40px]" src={twitter} alt={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;




















