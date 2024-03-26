import React from "react";

export default function Practice3(props) {
  return (
    <div>
      <div className="box1">
        <div style={{ color: "orange" }}>이번주 베스트셀러</div>
        <div>
          <img
            src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158511906.jpg"
            alt="책"
            width={100}
            height={150}
          ></img>
        </div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>저자: {props.author}</div>
        <div>판매가: {props.price}원</div>
        <div>구분: {props.type}</div>
      </div>
    </div>
  );
}
