import { useState } from "react";

export default function Exam1() {
  const [inputId, setInputId] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addResult = () => {
    const resultBox = document.querySelector(".resultBox");
    const result = document.createElement("div");
    console.log(inputId);
    result.addEventListener("dblclick", function () {
      console.log(inputId);
      resultBox.removeChild(this);
    });

    result.textContent = inputId + ":" + inputEmail;
    resultBox.append(result);
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === "Enter") {
      addResult();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputId}
        onChange={(e) => {
          setInputId(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <br />
      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <br />
      <button onClick={addResult}>등록</button>
      <div className="resultBox"></div>
    </div>
  );
}
