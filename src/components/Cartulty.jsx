


import men from "../assets/images/mens.png";
// import triangle from "../assets/images/triangle.svg";
function Cartulty({ img, name, color, gridStyles, triangle }) {
  return (
    <div className={` pt-[10px] ${color} ${gridStyles}`}>
      <div className="flex">
        <div className="pt-[70px] px-6">
          <h4>Casual Collection</h4>
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p>Shop now </p>
          <img className="w-[10px]" src={triangle} alt={triangle} />
        </div>
        <div>
          <img className="w-[150px]" src={img} alt={img} />
        </div>
      </div>
    </div>
  );
}
export default Cartulty