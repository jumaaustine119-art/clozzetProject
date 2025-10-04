import Markets from "../components/Markets";




function Shop({ cart, setCart }) {
  return (
<>
  <Markets cart={cart} setCart={setCart}/>
</>

  )
}

export default Shop;