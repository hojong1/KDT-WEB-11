import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App4() {
  const price = useSelector((state) => state.money.price);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const MoneyBank = (type) => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      dispatch({ type, value });
    }
  };
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {price}원</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <button onClick={() => MoneyBank("PLUS")}>입금</button>
      <button onClick={() => MoneyBank("MINUS")}>출금</button>
    </div>
  );
}
