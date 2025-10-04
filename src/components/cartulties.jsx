import Cartulty from "./Cartulty"
import mens from "../assets/images/mens.png"
import hbags from "../assets/images/hbags.png"
import watches from "../assets/images/watches.png"
import ladies from "../assets/images/ladies.png"

function Cartulties (){
    return(
<div className="container mx-auto flex-wrap  py-15">
      <div className=" grid grid-cols-2 grid-rows-3 gap-3">
        <Cartulty
          img={mens}
          name="Men's Collection"
          color="bg-gray-300"
          gridStyles="col-start-1 col-end-2 row-start-1 row-end-3"
          // triangle={triangle}
        />
        <Cartulty
          img={hbags}
          name="Designer Handbags"
          color="bg-pink-200"
          gridStyles="col-start-1 col-end-2 row-start-3 row-end-4"
          // triangle={triangle}
        />
        <Cartulty
          img={watches}
          name="Luxury Watches"
          color="bg-green-200"
          gridStyles="col-start-2 col-end-3 row-start-1 row-end-2"
          // triangle={triangle}
        />
        <Cartulty
          img={ladies}
          name="Ladies Collection"
          color="bg-pink-400"
          gridStyles="col-start-2 col-end-3 row-start-2 row-end-4"
          // triangle={triangle}
        />
      </div>
    </div>
  )}
export default Cartulties