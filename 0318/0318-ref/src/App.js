import logo from "./logo.svg";
import "./App.css";
import RefSample1 from "./RefSample1";
import RefSample2 from "./RefSample2";
import Ex1 from "./Ex1";
import RefSample3 from "./RefSample3";
import RefSample4 from "./RefSample4";

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트; ref 사용 1. 콜백함수  */}
      <RefSample1 />
      <hr />
      {/* 클래스형 컴포넌트; ref 사용 2. createRef()  */}
      <RefSample2 />
      <RefSample2 />
      {/* 클래스형 ref 실습 */}
      <hr />
      <Ex1 />
      {/* 함수형 컴포넌트; useRef()로 DOM 요소에 접근  */}
      <hr />
      <RefSample3 />
      <hr />
      {/* 함수형 컴포넌트; useRef() */}
      <RefSample4 />
    </div>
  );
}

export default App;
