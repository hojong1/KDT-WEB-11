import logo from "./logo.svg";
import "./App.css";

import Drink from "./Drink";

function App() {
  const price = "4000원";

  const drinks = [
    {
      menu: "아메리카노",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
      price: price,
    },
    {
      menu: "카페라떼",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg",
      price: price,
    },
    {
      menu: "카페모카",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[46]_20210415134438165.jpg",
      price: price,
    },
    {
      menu: "망고블렌디드",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2023/02/[9200000004512]_20230207150514347.jpg",
      price: price,
    },
    {
      menu: "딸기 요거트 블렌디드",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg",
      price: price,
    },
    {
      menu: "유자 블렌디드",
      url: "https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004870]_20230905110300360.jpg",
      price: price,
    },
  ];
  return (
    <div className="App">
      <Drink drinks={drinks} />
    </div>
  );
}

export default App;
