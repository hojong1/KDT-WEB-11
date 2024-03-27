import React from "react";
import MapChildren from "./MapChildren";

export default function Map() {
  const arr = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김첨지" },
    { id: 3, name: "심청이" },
  ];

  return (
    <>
      {arr.map((user) => {
        return <MapChildren key={user.id} name={user.name} />;
      })}
    </>
  );
}
