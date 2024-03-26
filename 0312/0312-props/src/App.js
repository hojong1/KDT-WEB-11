import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import Button from "./Button";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import Practice3 from "./Practice3";
import Practice4 from "./Practice4";

function App() {
  const name = "코딩온";
  return (
    <div className="App">
      {/* <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent name={13} time="14시">
        자식내용
      </FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시" />
      {/* 함수형과 클래스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}

      {/* <hr />
      <ClassComponent name={name} />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">
        <span>Google</span>
      </Button> */}

      <hr />
      {/* <Practice1 age={20} gender="남성">
        리더
      </Practice1>
      <Practice1 name="홍길동" age={15} gender="남성">
        크루
      </Practice1>
      <Practice1 name="성춘향" age={17} gender="여성">
        크루
      </Practice1> */}
      <Practice2 food="김치" />
      <hr />
      <Practice3
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      <Practice4 />
    </div>
  );
}

export default App;
