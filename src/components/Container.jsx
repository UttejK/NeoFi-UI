import Button from "./Button";
import Binance from "./Binance";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useMemo, useState } from "react";

import Input from "./Input";

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
      <Input
        className="mb-6 z-0"
        label="Amount you want to invest"
        value={inValue}
        onChange={setInValue}
        rightLabel="INR"
      ></Input>
      <Input
        className="mb-12 z-0"
        label={`Estimate Number of ${token.symbol.slice(0, -4)} you will Get`}
        value={outValue}
        disabled
      ></Input>
      <div className="tdgrad w-full">
        <Button label="Buy" className="w-full z-1 py-3 relative" />
      </div>
    </div>
  );
}

export default Container;
