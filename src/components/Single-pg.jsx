import unisex from "../assets/images/unisex.png";
function Single() {
  return (
    <div className="flex mx-auto object-cover">
      <img
        src={unisex}
        alt="Unisex Airforce Sneakers"
        className="w-[50%] h-[55em] ml-10 object-cover justify-center items-center img-no-repeat bg-cover pl-4 pb-4 mt-6"
      />
      <div className="flex-col pr-6 mr-6 w-[50%]">
        <div className="text-4xl font-bold mt-4 pl-4 pb-4 ml-12">
          <h1>Unisex Airforce Sneakers</h1>
          <div className="w-18 h-1 bg-black mt-8"></div>
          <p className="mt-6">Ksh 3,500</p>
        </div>
        <div>
          <p className="text-2xl mt-8 pl-4 pb-4 ml-12"> 
            The sneaker has all sizes which fit to normal size, it is suitable
            for all weather conditions, it is light in weight making it
            comfortable for a long wear. The shoe can be worn by both genders.
            It is suitable for outdoor activities. Buy from our shop, get it
            delivered to your doorstep and slay the whole day.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Single;
