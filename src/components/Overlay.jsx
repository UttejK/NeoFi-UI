import clsx from "clsx";
import { BiSearchAlt2 } from "react-icons/bi";

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
  { id: 22, symbol: "FTMUSDT", name: "Fantom (FTM)" },
  { id: 23, symbol: "ONEUSDT", name: "Harmony (ONE)" },
  { id: 24, symbol: "ZECUSDT", name: "Zcash (ZEC)" },
  { id: 25, symbol: "ICPUSDT", name: "Internet Computer (ICP)" },
  { id: 26, symbol: "SUSHIUSDT", name: "SushiSwap (SUSHI)" },
  { id: 27, symbol: "ZILUSDT", name: "Zilliqa (ZIL)" },
  { id: 28, symbol: "KSMUSDT", name: "Kusama (KSM)" },
  { id: 29, symbol: "LUNAUSDT", name: "Terra (LUNA)" },
  { id: 30, symbol: "XTZUSDT", name: "Tezos (XTZ)" },
];

function Overlay({ className, ...props }) {
  return (
    <>
      <div
        className={clsx([
          "fixed h-screen w-screen bg-secondary/80 z-10 flex items-center justify-center ",
          className,
        ])}
        {...props}
      >
        <div className=" w-full h-3/5 block top-8 text-white p-10 bg-[#181627] rounded-xl max-w-md z-20 relative ">
          <div className="flex items-center border-2 rounded-full border-[#6E56F8]/25 mb-4">
            <BiSearchAlt2 className="text-[#D2D2D2] text-3xl ml-4" />
            <input
              className="focus:outline-none focus:ring-0 w-full bg-[#181627] text-[#D2D2D2] h-16 rounded-full border-none  "
              type="text"
            />
          </div>
          <div className="overflow-y-scroll h-[90%]">
            {symbols.map((n) => (
              <button
                className="w-full bg-inherit rounded-sm py-4 mb-1 focus:bg-[#1b192d] hover:bg-[#1b192d] "
                key={n.id}
              >
                {n.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Overlay;
