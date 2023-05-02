import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Overlay from "./components/Overlay";
import { useCallback, useEffect, useState } from "react";

function App() {
  // const [symbols, setSymbols] = useState([]); // used while fetching the symbols from binance
  const [showOverlay, setShowOverlay] = useState(false);
  const [stockPrice, setStockPrice] = useState(null);
  const [token, setToken] = useState({
    id: 1,
    symbol: "ETHUSDT",
    name: "Ethereum (ETH)",
  });
  const [ws, setWS] = useState(null);

  const onClose = () => setShowOverlay(false);

  const updatePrice = useCallback(
    (event) => {
      let data = JSON.parse(event.data);
      if (data.s.toLowerCase().includes(token.symbol.toLowerCase()))
        setStockPrice(data);
    },
    [token]
  );

  useEffect(() => {
    if (ws) {
      ws.removeEventListener("message", updatePrice);
      ws.close();
    }

    setWS(
      new WebSocket(
        `wss://stream.binance.com:9443/ws/${token.symbol.toLowerCase()}@trade`
      )
    );
    setStockPrice(null);
  }, [token]);

  useEffect(
    () => {
      if (ws) {
        ws.removeEventListener("message", updatePrice);
        ws.addEventListener("message", updatePrice);
      }
    },
    [ws],
    () => {
      ws.removeEventListener("message", updatePrice);
    }
  );

  return (
    <>
      <Navbar />
      {showOverlay && (
        <Overlay
          token={token}
          onClose={onClose}
          onChange={(token) => {
            setToken(token);
          }}
        />
      )}
      <div className="max-w-md mx-auto h-screen w-screen flex items-center justify-stretch ">
        <Container
          stockPrice={stockPrice}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          token={token}
        />
      </div>
    </>
  );
}

export default App;
