


import { Type } from "lucide-react";
function Summary({cartCopy}) {
  return (
    <div>
      <h3>Have a promo code? Apply here</h3>
      <div className="flex gap-3 pt-6">
        <input
          className="border h-12 w-40 bg-amber-50 rounded"
          type="text"
          placeholder="promo code(optional)"
        ></input>
        <div>
          <button className="border h-12 w-20 rounded bg-green-300 text-white font-bold">
            Apply
          </button>
        </div>
      </div>
      <div>
        <div className="flex gap-8 pt-6">
          <p>Subtotals</p>
          <p>Ksh. {cartCopy && cartCopy.reduce((acc,current)=>acc + current.price,0).toLocaleString()}</p>
        </div>
        <div className="flex gap-8 pt-5">
          <p>Delivery Fee</p>
          <p>Ksh 450</p>
        </div>
      </div>
      <hr></hr>
      <div className="pt-4 py-5 flex gap-15">
        <h4>Totals</h4>
        <p>Ksh. {cartCopy && cartCopy.reduce((acc,current)=>acc + current.price,0 + 450).toLocaleString()}</p>
      </div>
      <div className="pt-5">
        <button className="border rounded bg-green-300 text-white text-1xl font-bold w-[150px] h-[50px]">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Summary;