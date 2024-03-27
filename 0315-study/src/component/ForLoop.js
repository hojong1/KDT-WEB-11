import { useState } from "react";

export default function ForLoop() {
  const [list, setList] = useState(["a", "b", "c", "d", "e"]);
  const [list2, setList2] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  let listItems = [];
  for (let i = 0; i < list.length; i++) {
    listItems.push(<div key={i}>{list[i]}</div>);
  }

  return (
    <>
      {listItems}
      <ol>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
      <ol>
        {/* 객체를 요소로 가지고 있는 배열, key props로 각 요소의 id 전달 */}
        {list2.map((value) => (
          <li key={value.id}>{value.alpha}</li>
        ))}
      </ol>
    </>
  );
}
