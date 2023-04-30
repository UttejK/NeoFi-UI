import { useEffect, useState } from "react";

function Binance({ stockPrice }) {
  return (
    <span>
      {"\u20B9"} {(parseFloat(stockPrice?.p) * 80).toFixed(2)}
    </span>
  );
}

export default Binance;
