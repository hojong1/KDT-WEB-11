import logo from "./logo.svg";
import "./App.css";
import FoodComponent from "./FoodComponent";
import BookComponent from "./BookComponent";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import OnClick from "./OnClick";
import Exam1 from "./Exam1";
import Exam2 from "./Exam2";

function App() {
  // const food = "고기";
  // const title = "나의 하루는 4시 40분에 시작된다.";
  // const author = "저자 : 김유진";
  // const price = "13,500원";
  // const type = "구분: 자기 계발서";
  // const book = {
  //   title: "리액트",
  //   author: "코딩온",
  //   price: "13,500원",
  //   type: "개발서",
  // };
  const vaild = "vaild";
  const text = "text";
  return (
    <div className="App">
      {/* <FoodComponent food={food} />
      <FoodComponent />

      <hr />
      <BookComponent title={title} author={author} price={price} type={type} />
      <Book title="리액트" author="코딩온" price="13,500원" type="개발서" />
      <Book book={book} /> */}

      <Counter />
      <hr />
      <SayFunction />

      <hr />
      <OnClick vaild={vaild} text={text} />
      <OnClick />

      <hr />
      <Exam1 />
      <Exam2 />
    </div>
  );
}

export default App;
