import Category from "./Category";
import jacket from "../assets/images/jacket.png";
import handbag from "../assets/images/handbag.png";
import shoe from "../assets/images/shoe.png";
import jeans from "../assets/images/jeans.png";
import dress from "../assets/images/dress.png";
import sweater from "../assets/images/sweater.png";
import tshirt from "../assets/images/tshirt.png";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";


function Categories() {
  const [Cartegories, setCategories] = useState([]);
  const url = "http://127.0.0.1:8000/api/categories";


  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCategories(data);
      });
  },[]);

  return (
    <div>
      <h1 className="text-center pt-8 pb-3.5 text-4xl">Top Categories</h1>
      <div className="rounded-full">
        <div className="flex container mx-auto justify-between flex-wrap pt-10 ">


          {
          Cartegories.map((category) => {
            return (
              <Category
              
                name={`${category.name}`}
                img={`http://127.0.0.1:8000/api${category.image}`}
              />
            );
          })}


        </div>
      </div>
    </div>
  );
}
export default Categories;
