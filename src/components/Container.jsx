import Button from "./Button";
import Binance from "./Binance";
import Overlay from "./Overlay";
import { AiFillCaretDown } from "react-icons/ai";
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
            `../../node_modules/cryptocurrency-icons/svg/color/${token.symbol
              .slice(0, -4)
              .toLowerCase()}.svg`
          )
        ).default
      ))();
  }, [token]);

  return (
    <div className="container bg-secondary p-8 px-10  rounded-2xl md:w-full md:ml-0 flex items-center flex-col w-[90%] ml-[5%] md:min-h-auto min-h-3/4">
      <img
        src={iconSource}
        alt={token.name.slice(0, 3)}
        className="w-[60px] h-[60px] box-content border-[10px] border-background2 -translate-y-[74px] rounded-full absolute hidden md:block"
      />
      <img
        src="/NeoFi.svg"
        alt="NeoFi_logo"
        className="md:hidden block h-[80px] w-[80px] p-[10px] border-[10px] border-background2 -translate-y-[74px]  rounded-full absolute"
      />
      <div className="flex justify-between md:items-center items-start mb-2 w-full z-0 md:flex-row flex-col md:mt-9 mt-8 ">
        <span className="text-[#C5C5C5] font-normal text-sm">
          Current value
        </span>
        <Binance stockPrice={stockPrice} />
      </div>
      <button
        className="downarrow flex items-center text-left gap-2 pl-4  mt-2 mb-6 bg-background2 w-full h-16 rounded-xl z-[1]"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        <img
          className="w-[25px] h-[25px]"
          src={iconSource}
          alt={token.name.slice(0, 3)}
        />
        {token.name}
        <AiFillCaretDown className="relative ml-auto mr-4 text-primary" />
      </button>
      <div className=" mb-6 z-0">
        <label
          htmlFor=""
          className="inline-block md:text-md text-sm md:mb-3 mb-3 text-[#C5C5C5] font-normal"
        >
          Amount you want to invest
        </label>
        <div className="flex items-center input-field">
          <input
            className="w-full appearance-none focus:ring-0 focus:outline-none  bg-inherit h-16 rounded-xl border-[#6e56f8]/25 font-semibold text-xl"
            type="number"
            placeholder="0.00"
            value={inValue}
            onChange={(event) => setInValue(event.target.value)}
          />
        </div>
      </div>
      <div className=" mb-12 z-0">
        <label
          htmlFor=""
          className="md:text-md text-sm md:mb-3 mb-3 inline-block text-[#C5C5C5] font-normal "
        >
          Estimate Number of ETH You will Get
        </label>
        <input
          className=" w-full bg-background2 h-16 rounded-xl border-none font-semibold text-xl"
          type="text"
          disabled
          value={outValue}
          placeholder="0.00"
        />
      </div>
      <div className="tdgrad w-full">
        <Button label="Buy" className="w-full z-1 py-3 relative" />
      </div>
    </div>
  );
}

export default Container;
