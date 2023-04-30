import Button from "./Button";
import Binance from "./Binance";
import Overlay from "./Overlay";
import { useEffect, useMemo, useState } from "react";

function Container({ stockPrice, showOverlay, setShowOverlay, token }) {
  const [inValue, setInValue] = useState("");
  const [iconSource, setIconSource] = useState("");
  const outValue = useMemo(
    () =>
      inValue && stockPrice && stockPrice.p
        ? parseFloat(inValue) / parseFloat(stockPrice.p) / 80.0
        : "",
    [inValue, stockPrice]
  );

  useEffect(() => {
    (async () =>
      setIconSource(
        (
          await import(
            `/node_modules/cryptocurrency-icons/svg/color/${token.symbol
              .slice(0, -4)
              .toLowerCase()}.svg`
          )
        ).default
      ))();
  }, [token]);

  return (
    <div className="container bg-secondary p-8 rounded-2xl w-full flex items-center flex-col">
      <img
        src={iconSource}
        alt={token.name.slice(0, 3)}
        className="w-[70px] h-[70px] mb-8 -translate-y-16 rounded-full"
      />
      <div className="flex justify-between items-center mb-2 w-full">
        <span>Current value</span>
        <Binance stockPrice={stockPrice} />
      </div>
      <button
        className="flex items-center text-left gap-2 pl-4  mt-2 mb-8 bg-background2 w-full h-16 rounded-xl"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        <img
          className="w-[20px] h-[20px]"
          src={iconSource}
          alt={token.name.slice(0, 3)}
        />
        {token.name}
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
          onChange={(event) => setInValue(event.target.value)}
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
          placeholder=""
        />
      </div>
      <Button label="Buy" className="w-full " />
    </div>
  );
}

export default Container;
