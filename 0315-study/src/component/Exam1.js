import React, { useState } from "react";

export default function Exam1() {
  const [alpha, setAlpha] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        id="alpha"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
      />

      <button
        type="button"
        onClick={() => {
          if (!inputAlpha) {
            alert("알파벳을 입력해주세요!");
            return;
          } else if (inputAlpha.trim().length === 0) {
            alert("띄어쓰기는 입력되지 않습니다. 알파벳을 입력해주세요!");
            return;
          }
          const newAlpha = alpha.concat({
            // a.concat(b) a,b합쳐짐
            id: alpha.length + 1,
            alpha: inputAlpha,
          });
          setInputAlpha("");
          setAlpha(newAlpha);
        }}
      >
        ADD
      </button>
      <ol>
        {alpha.map((value) => (
          <li key={value.id}>{value.alpha}</li>
        ))}
      </ol>
    </div>
  );
}
