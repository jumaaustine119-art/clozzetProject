import Category from "./Category";
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import shoe from "../assets/images/shoe.png";
import jeans from "../assets/images/jeans.png";
import dress from "../assets/images/dress.png";
import sweater from "../assets/images/sweater.png";
import tshirt from "../assets/images/tshirt.png";
function Categories() {
  return (
    <div>
      <h1 className="text-center pt-8 pb-3.5 text-4xl">Top Categories</h1>
      <div className="rounded-full">
        <div className="flex container mx-auto justify-between ">
          <Category img={jacket} name="jackets"/>
          <Category img={handbag} name="handbag" />
          <Category img={tshirt} name="tshirt" />
          <Category img={dress} name="dress" />
          <Category img={jeans} name="jeans" />
          <Category img={shoe} name="shoe" />
          <Category img={sweater} name="sweater" />
        </div>
      </div>
    </div>
  );
}
export default Categories;
