import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";

function App() {
  const [symbols, setSymbols] = useState([]);
  const [stockPrice, setStockPrice] = useState();

  useEffect(() => {
    let ws = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
    ws.onmessage = (event) => {
      let stockPrice = JSON.parse(event.data);
      //   console.log((parseFloat(stockPrice?.p) * 80).toFixed(2)); // Development only
      setStockPrice(stockPrice);
    };
  }, []);

  useEffect(() => {
    fetch("https://data.binance.com/api/v3/exchangeInfo")
      .then((res) => res.json())
      .then((data) => {
        if (data?.symbols?.length) {
          const usdtSymbols = [];
          data.symbols.forEach(({ symbol }, i) => {
            if (symbol.endsWith("USDT")) {
              usdtSymbols.push(symbol);
            }
          });

          setSymbols(usdtSymbols);
        }
      });
  }, []);

  return (
    <>
      <Overlay usdtSymbols={symbols} className="hidden" />
      <Navbar />
      <div className="max-w-md mx-auto h-screen w-screen flex items-center justify-stretch">
        <Container stockPrice={stockPrice} />
      </div>
    </>
  );
}

export default App;
