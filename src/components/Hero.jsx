import image from "../assets/images/hero-image.png";
import { Search } from "lucide-react";
function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-[50%]">
          <h1 className="text-7xl font-semibold mt-7">
            Choose the look that <span className="text-[#45c9a1]">suits</span>{" "}
            you best
          </h1>
          <p className="text-xl font-normal my-7 ">
            Eveyday is afashion show & the world is your runway.Clozzet will
            elevate your wardrope with the best collections.Be exclusive,Be
            Devine, Be yourself.Explore outfits that will make you comfortably
            beautiful.True style never dies.
          </p>
          <div className="flex gap-7">
            <button className="bg-[#45c9a1] rounded-full py-2 px-7 cursor-pointer">
              Shop Now
            </button>
            <button className="bg-grey-500 text-[#45c9a1] rounded-full py-2 px-7 border-1 cursor-pointer ">
              About Us
            </button>
          </div>
          <div className="flex items-center rounded-full border-1 mt-3 mb-6">
            <Search />
            <input
              className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
              type="text"
              placeholder="search"
            ></input>
          </div>
        </div>
        <div className=" w-[50%] bg-[url(/src/assets/images/hero-image.png)] bg-contain bg-no-repeat bg-center">{image}</div>
      </div>
    </div>
  );
}
export default Hero;