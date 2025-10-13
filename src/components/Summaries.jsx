


import Summary from "./Summary";
import Cart from "./Summary";
function Summaries({cartCopy}) {
  return (
    <div className="bg-[#f0efef]  w-[400px] h-[400px]">
      <h2 className="font-bold text-2xl justify-center">Cart Summary</h2>
      <div>
        <Summary cartCopy={cartCopy}/>
      </div>
    </div>
  );
}
export default Summaries;

