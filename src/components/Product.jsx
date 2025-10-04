

// import knitted from "../assets/images/knitted-sweater.png";
function Product({ cartItem, cartCopy, setCartCopy}) {
  function handleIncreament(product){
    setCartCopy ((previous) =>[...previous,product])
  }
  function handleDecreament(product){
    const cartData =[...cartCopy]
    const productIndex =cartData.indexOf(product)
    cartData.splice( productIndex,1) 
    setCartCopy(cartData)
  }
  const quantity =
    cartCopy && cartCopy.filter((item) => item.name === cartItem.name).length;

  return (
    <div className="flex justify-between border-b pt-2">
      <div className="flex text-2xl">
        <img className="w-[200px]" src={cartItem.img} alt={cartItem.img} />
        <div>
          <h3>{cartItem.name}</h3>
          <p>{cartItem.size}</p>
        </div>
      </div>
      <div className="border w-30 h-10 flex justify-between container mx-auto px-4 text-2xl ">
        <button className="border-r-2 ml-4 flex cursor-pointer"
         disabled={cartCopy.filter(item=>item=== cartItem).length===1} onClick = {() =>  handleDecreament(cartItem)}>-</button>
        <button>{quantity}</button>
        <button className="border-l-2 cursor-pointer"
          onClick = {() =>  handleIncreament(cartItem)}
         >+</button>
      </div>
      <div className="text-2xl">
        <p>Ksh. {cartCopy.filter(item=>item===cartItem).reduce((acc,current)=>acc + current.price, 0).toLocaleString()}</p>
      </div>
    </div>
  );
}
export default Product;