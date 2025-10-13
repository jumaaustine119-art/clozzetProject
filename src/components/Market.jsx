import graphic from "../assets/images/graphic-tshirts.png"
import heart from "../assets/images/heart.png"

function Market({ img, name, price, heart, cart = [], setCart }) {
  function handleSetCart(product) {
    
    if (!cart.find(item => item.name === product.name)) {
      setCart((previous) => [...previous, product]);
    }
  }
  function handleAddToCart(event, product) {
    if (event.target.textContent.toLowerCase() === "add to cart") {
      handleSetCart(product);
      event.target.textContent = "Added To Cart";
    }
  }
         
  return (
    <div>
      <div>
        <div className="bg-[#f0efef] w-[350px] h-[400px] group relative flex justify-center">
          <img className="w-[200px]" src={img} alt={img} />
          <div className="absolute bottom-2 w-[90%] hidden group-hover:block">
            <button
              onClick={(event) => handleAddToCart(event, { img, name, price })}
              className="cursor-pointer border-1 rounded-2xl  bg-[#45c9a1] text-white w-full py-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {console.log(cart)}
        <div className="flex justify-between ">
          <div>
            <p className="text-black-700 font-bold italic">
              {name}
            </p>
            <p className="text-[#45c9a1]">
             Ksh. {price .toLocaleString()}
            </p>
          </div>
          <img
            className="w-[40px] font-exterlight flex"
            src={heart}
            alt={heart}
          />
        </div>
      </div>
    </div>
  )
}
export default Market