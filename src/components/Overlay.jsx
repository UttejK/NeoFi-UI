import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2, BiCheck } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const symbols = [
  { id: 1, symbol: "ETHUSDT", name: "Ethereum (ETH)" },
  { id: 2, symbol: "BTCUSDT", name: "Bitcoin (BTC)" },
  { id: 3, symbol: "BNBUSDT", name: "Binance Coin (BNB)" },
  { id: 4, symbol: "ADAUSDT", name: "Cardano (ADA)" },
  { id: 5, symbol: "XRPUSDT", name: "XRP (XRP)" },
  { id: 6, symbol: "SOLUSDT", name: "Solana (SOL)" },
  { id: 7, symbol: "DOTUSDT", name: "Polkadot (DOT)" },
  { id: 8, symbol: "LINKUSDT", name: "Chainlink (LINK)" },
  { id: 9, symbol: "MATICUSDT", name: "Polygon (MATIC)" },
  { id: 10, symbol: "DOGEUSDT", name: "Dogecoin (DOGE)" },
  { id: 11, symbol: "LTCUSDT", name: "Litecoin (LTC)" },
  { id: 12, symbol: "BCHUSDT", name: "Bitcoin Cash (BCH)" },
  { id: 13, symbol: "FILUSDT", name: "Filecoin (FIL)" },
  { id: 14, symbol: "XLMUSDT", name: "Stellar Lumens (XLM)" },
  { id: 15, symbol: "UNIUSDT", name: "Uniswap (UNI)" },
  { id: 16, symbol: "AAVEUSDT", name: "Aave (AAVE)" },
  { id: 17, symbol: "AVAXUSDT", name: "Avalanche (AVAX)" },
  { id: 18, symbol: "THETAUSDT", name: "Theta (THETA)" },
  { id: 19, symbol: "VETUSDT", name: "VeChain (VET)" },
  { id: 20, symbol: "EOSUSDT", name: "EOS (EOS)" },
  { id: 21, symbol: "ATOMUSDT", name: "Cosmos (ATOM)" },
  { id: 23, symbol: "ONEUSDT", name: "Harmony (ONE)" },
  { id: 24, symbol: "ZECUSDT", name: "Zcash (ZEC)" },
  { id: 25, symbol: "ICPUSDT", name: "Internet Computer (ICP)" },
  { id: 26, symbol: "SUSHIUSDT", name: "SushiSwap (SUSHI)" },
  { id: 27, symbol: "ZILUSDT", name: "Zilliqa (ZIL)" },
  { id: 28, symbol: "KSMUSDT", name: "Kusama (KSM)" },
  { id: 30, symbol: "XTZUSDT", name: "Tezos (XTZ)" },
];

function Overlay({ className, onClose, onChange, token, ...props }) {
  const [sources, setSources] = useState({});
  const [search, setSearch] = useState("");
  const formRef = useRef(null);

  function onTokenSelect(token) {
    onChange(token);
    onClose();
  }

  useEffect(() => {
    (async () =>
      setSources(
        (
          await Promise.all(
            symbols.map((symbol) =>
              import(
                `../../node_modules/cryptocurrency-icons/svg/color/${symbol.symbol
                  .slice(0, -4)
                  .toLowerCase()}.svg`
              )
            )
          )
        ).reduce(
          (sources, source, index) => ({
            ...sources,
            [symbols[index].symbol]: source.default,
          }),
          {}
        )
      ))();
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        className={clsx([
          "fixed h-screen w-screen bg-secondary/80 z-10 flex items-center justify-center ",
          className,
        ])}
        {...props}
      />
      <div
        className={clsx([
          "fixed top-1/2 left-1/2 h-screen -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center",
          className,
        ])}
        onClick={(event) => {
          if (!formRef.current.contains(event.target)) onClose();
        }}
      >
        <div className="border-grad w-[28rem] h-4/5 md:h-3/5 md:max-w-[410px] md:max-h-[490px] max-w-xs">
          <div
            ref={formRef}
            className="text-white bg-[#181627] rounded-md z-20 relative px-4 md:px-11 pb-11 pt-6 w-full h-full md:p-10"
          >
            <button
              className="w-6 h-6 rounded-lg bg-[#6E56F8]/25 relative md:hidden mb-7 block ml-auto"
              onClick={onClose}
            >
              <IoMdClose className="w-4 h-4 ml-1 " />
            </button>

            <div className="search-input flex items-center border-2 rounded-full border-[#6E56F8]/25 mb-4 ">
              <BiSearchAlt2 className="text-[#D2D2D2] text-xl md:text-3xl ml-4" />
              <input
                className="focus:outline-none font-normal text-sm peer-hover:border-[#6E56F8] focus:ring-0 w-full bg-[#181627] text-[#D2D2D2]  rounded-full border-none"
                type="text"
                autoFocus
                placeholder="Search chains"
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="overflow-y-scroll h-[80%] pl-1 pr-2">
              {symbols
                .filter((symbol) =>
                  search
                    ? symbol.name.toLowerCase().includes(search.toLowerCase())
                    : true
                )
                .map((n) => (
                  <button
                    onClick={() => onTokenSelect(n)}
                    className={clsx(
                      "text-left px-4 text-sm font-normal flex gap-2 items-center w-full bg-inherit rounded-sm py-4 mb-1 focus:bg-[#1b192d] hover:bg-[#1b192d] ",
                      n.symbol === token.symbol ? "selected" : ""
                    )}
                    key={n.id}
                  >
                    <img
                      className={"w-[24px] h-[24px]"}
                      src={sources[n.symbol]}
                      alt={n.name.slice(0, 3)}
                    />
                    {n.name}

                    {n.symbol === token.symbol && (
                      <span className="ml-auto pr-5">
                        {/* <BiCheck className="h-6 w-8 text-green-300" /> */}
                        <FcCheckmark className="h-6 w-6" />
                      </span>
                    )}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overlay;
