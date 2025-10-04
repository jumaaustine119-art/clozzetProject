import Market from "./Market"
import { Search } from "lucide-react";
import graphic from "../assets/images/graphic-tshirts.png"
import heart from "../assets/images/heart.png"
import bomber from "../assets/images/bomber.png"
import pallazo from "../assets/images/pallazo.png"
import shoes from "../assets/images/leather-shoes.png"
import ragged from "../assets/images/ragged-jeans.png"
import sweatshirts from "../assets/images/sweatshirts.png";
import banquet from "../assets/images/slim-banquet-dress.png"
import denim from "../assets/images/denim.png";
import jacket from "../assets/images/leather-jacket.png";
import quartz from "../assets/images/quartz-watch.png"
import jeans from "../assets/images/denim-jeans.png"
import brown from "../assets/images/brown-handbag.png"
import cocktail from "../assets/images/cocktail.png"
import shoulder from "../assets/images/Off-The-Shoulder.png"
import serpenti from "../assets/images/serpenti-forever.png"
import unisex from "../assets/images/unisex.png"
import Airsense from "../assets/images/Airsense-pleated.png"
import smartwatch from "../assets/images/smartwatch.png"
import zooshi from "../assets/images/ZOOSHI-COBALT.png"
import Knitted from "../assets/images/knitted-sweater.png"

function Markets({cart, setCart}){
    return(


    <div>
      <div>
        <div className=" container mx-auto flex items-center rounded-full border-2 mt-3 h-24 w-200">
            
            <div className="ml-6  ">
            < Search />
            </div>

            <input
              className="flex-1 border-0  py-1 px-4 outline-0 ml-4 text-2xl"
              type="text"
              placeholder="search Products and caregories"
            ></input>
          </div>
      </div>
      <div className="flex container mx-auto justify-between mt-10">
        <Market
          img={ragged}
          name="Blue Ragged Geans"
          price= {2250}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Market 
        img={sweatshirts} 
        name="Brown Leather Jacket"
        price= {2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Market 
        img={banquet} 
        name="Slim Banquet Dress" 
        price= {10250} 
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Market
        img={denim} 
        name="Blue Denim Jacket" 
        price= {2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
        
      </div>
      
          <div className="flex container mx-auto justify-between pt-10">
        <Market
          img={jacket}
          name="Broun Leather Jacket"
          price= {3000}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Market 
        img={quartz} 
        name="Quartz Men's Watch"
        price= {2400}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Market 
        img={jeans} 
        name="Women Denim Jeans" 
        price= {2300}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Market
        img={brown} 
        name="Broun handbag" 
        price= {2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
      </div>

      
          <div className="flex container mx-auto justify-between pt-10">
        <Market
          img={graphic}
          name="Unisex Graphic T-shirt"
          price= {2100}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Market 
        img={bomber} 
        name="Black Bomber Jacket"
        price= {2200}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Market 
        img={pallazo} 
        name="Pallazo Pallazo Pants" 
        price= {2000} 
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Market
        img={ shoes} 
        name="Pure Leather Shoes" 
        price= {1250}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
      </div>
        <div className="flex container mx-auto justify-between pt-10">
        <Market
          img={serpenti}
          name="Purple Serpenti Purse"
          price= {2250}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Market 
        img={unisex} 
        name="Unisex Airforce Sneakers"
        price= {2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Market 
        img={cocktail} 
        name="Blue Coctail Dress" 
        price= {2500} 
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Market
        img={shoulder} 
        name="Off-Shoulder Crop Top" 
        price= {2300}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
      </div>
        <div className="flex container mx-auto justify-between pt-10">
        <Market
          img={Airsense}
          name="AirsePleated Pants"
          price= {2400}
          heart={heart}
          setCart={setCart}
          cart={cart}
        />

        <Market 
        img={smartwatch} 
        name="Classy Smart Watch"
        price={2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
        />

        <Market 
        img={zooshi} 
        name="Blue Platform Heals" 
        price= {2500} 
        heart={heart}
        setCart={setCart}
        cart={cart}
        />
        <Market
        img={Knitted} 
        name="Strip Knitted Sweater" 
        price= {2250}
        heart={heart}
        setCart={setCart}
        cart={cart}
         />
      </div>
    </div>


    )
}
export default Markets