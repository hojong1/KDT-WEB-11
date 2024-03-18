import { useState } from "react";

export default function Exam2() {
  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [count, setCount] = useState(0);
  const addResult = () => {
    const tbody = document.getElementsByTagName("tbody")[0];
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const tr = document.createElement("tr");
    setCount((prevCount) => prevCount + 1);
    console.log(inputId);

    td1.textContent = count + 1;
    td2.textContent = inputId;
    td3.textContent = inputTitle;
    tr.append(td1, td2, td3);

    tbody.appendChild(tr);
  };

  return (
    <div>
      <div style={{}}>
        작성자 :
        <input
          type="text"
          placeholder="작성자"
          value={inputId}
          onChange={(e) => {
            setInputId(e.target.value);
          }}
        />
        &nbsp;&nbsp; 제목 :
        <input
          type="text"
          placeholder="제목"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <button onClick={addResult}>작성</button>
      </div>
      <div>
        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <button>검색</button>
        <button>전체</button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
