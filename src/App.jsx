import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";

function App() {
  // const [symbols, setSymbols] = useState([]); // used while fetching the symbols from binance
  const [showOverlay, setShowOverlay] = useState(false);
  const [stockPrice, setStockPrice] = useState();
  const [token, setToken] = useState("ethusdt");

  const onClose = () => setShowOverlay(false);

  useEffect(() => {
    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${token}@trade`);
    console.log(ws);
    ws.onmessage = (event) => {
      let stockPrice = JSON.parse(event.data);
      setStockPrice(stockPrice);
    };
  }, []); // do not leave commented

  // // fetching all the available tokens from binance

  // useEffect(() => {
  //   fetch("https://data.binance.com/api/v3/exchangeInfo")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data?.symbols?.length) {
  //         const usdtSymbols = [];
  //         data.symbols.forEach(({ symbol }, i) => {
  //           if (symbol.endsWith("USDT")) {
  //             usdtSymbols.push(symbol);
  //           }
  //         });

  //         setSymbols(usdtSymbols);
  //       }
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      {showOverlay && <Overlay onClose={onClose} setToken={setToken} />}
      <div className="max-w-md mx-auto h-screen w-screen flex items-center justify-stretch">
        <Container
          stockPrice={stockPrice}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      </div>
    </>
  );
}

export default App;
