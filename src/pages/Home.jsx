
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Collections from "../components/Collections"
import Cartulties from "../components/cartulties";

function Home({ cart, setCart }) {
  return (
    <header>
      <Hero />
      <Categories />
      <Collections cart={cart} setCart={setCart}/>
      <Cartulties/>
    </header>
  );
}
export default Home;
