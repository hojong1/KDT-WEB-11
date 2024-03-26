import React, { useState } from "react";

export default function Practice1() {
  const [count, SetCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      {/* onclick 안의 구조를 잘 보자  */}
      <button onClick={() => SetCount(count + 1)}>+</button>
      <button onClick={() => SetCount(count - 1)}>-</button>
    </div>
  );
}
