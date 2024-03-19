import React, { useState, useMemo } from "react";

//- 메모이제이션으로 수행한 연산값를 기억함으로써
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 임의의 큰 연산을 하는 함수
  // 버튼을 누를 때에도, input 입력할 때에도 연산이 이뤄짐 (calc 함수 호출)
  // useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화
  //[before]
  //   const calc = () => {
  //     console.log("열심히 계산 중... ");
  //     for (let i = 0; i < 100000000; i++) {}
  //     return count ** 2;
  //   };

  //[after]
  // count의 값이 바뀔 때만 함수를 실행
  // input의 상태가 바뀌면 컴포넌트가 리렌더링, 이때 calc 연산되지 않게
  const calc = useMemo(() => {
    console.log("열심히 계산 중... ");
    for (let i = 0; i < 100000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Ex</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>count : {count}</div>
      {/* [before] */}
      {/* <div>calc: {calc()}</div> */}
      {/* [after] */}
      <div>calc:{calc} </div>
    </div>
  );
}
