import Button from "./Button";
import Binance from "./Binance";
import Overlay from "./Overlay";
import { useEffect, useState } from "react";

function Container({ stockPrice, showOverlay, setShowOverlay }) {
  const [inValue, setInValue] = useState("");
  let [outValue, setOutValue] = useState("");

  function handleChange(event) {
    setInValue(event.target.value);

    outValue = parseInt(event.target.value / (stockPrice?.p * 80));

    setOutValue(outValue);
  }

  return (
    <div className="container bg-secondary p-8 rounded-2xl w-full flex items-center flex-col">
      <div className="icon w-[70px] h-[70px] mb-8 -translate-y-16 rounded-full"></div>
      <div className="flex justify-between items-center mb-2 w-full">
        <span>Current value</span>
        <Binance stockPrice={stockPrice} />
      </div>
      <button
        className="flex justify-center items-center  mt-2 mb-8 bg-background2 w-full h-16 rounded-xl"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        DROPDOWN
      </button>
      <div className="block mb-8">
        <label htmlFor="" className="">
          Amount you want to invest
        </label>
        <input
          className="appearance-none focus:ring-0 focus:outline-none w-full bg-inherit h-16 rounded-xl border-[#6e56f8]/25 "
          type="number"
          placeholder="0.00"
          value={inValue}
          onChange={handleChange}
        />
      </div>
      <div className="block mb-8">
        <label htmlFor="" className="">
          Estimate Number of ETH You will Get
        </label>
        <input
          className="w-full bg-background2 h-16 rounded-xl border-none "
          type="text"
          disabled
          value={outValue}
          placeholder="0.00"
        />
      </div>
      <Button label="Buy" className="w-full " />
    </div>
  );
}

export default Container;
