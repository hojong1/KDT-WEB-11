import logo from './logo.svg';
import './App.css';
import './Circle.css';

function App() {
  //   const name = 'Codee';
  const styles = {
    // color: 'blue',
    // fontSize: '48px',
    // backgroundColor: 'yellow',
  };
  const name = '푸바오';
  const animal = '푸들';
  const a = 30;
  const b = 20;
  //주석 작성
  return (
    <>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* JSX 문법 */}
        {/* 1. 하나로 감싸인 요소  */}
        {/* 2. JavaScript 표현식 사용 
          -{} 로 감싸면 js 표현식 사용 가능 
          - {} 에서 삼항 연산자 사용 가능 (if 문 안됨)
        */}
        <div>{name}안녕?</div>
        <div>반갑다</div>
        <div>{name === 'Codee' ? 'KDT 11기에요!' : '누구세요?'} </div>
        {/* 
            3. style 속성 
            - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용 
            - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야함 
        */}
        <div style={styles}>하이~</div>
        <div
          style={{
            color: 'blue',
            fontSize: '48px',
            backgroundColor: 'pink',
          }}
        >
          하이하이~
        </div>
        {/* 
        4. className 사용
        - class 속성이 아닌 className 속성 사용 <div className="App">

        5. 종료 태그가 없는 태그의 사용 
        - 기존의 종료 태그가 없는 태그 사용하더라도 종료 태그를 작성해야함 or self-close
        - ex. <br> -> <br /> or <br><br />

        6. 주석
          - // : jsx 외부 주석
          = {**} :jsx 내부 주석 

        */}
      </div>
      <div>부모가 없다</div>
      {/* <div className="App-circleBox">
        <div className="App-circle1 circle">
          <div className="App-circle6 ">
            <div className="App-circle7 "></div>
          </div>
        </div>
        <div className="App-circle2 circle"></div>
        <div className="App-circle3 circle"></div>
        <div className="App-circle4 circle"></div>
        <div className="App-circle5 circle"></div>
      </div>
      <div>
        <img src="./grass.png" className="grass"></img>
      </div> */}
      {/* <div className="border-h2">
        <h2>
          제 반려동물의 이름은 {name}입니다. <br /> {name}은 {animal}입니다.
        </h2>
        {3 + 5 == 8 ? '정답입니다' : '오답입니다'}
      </div> */}
      <div>{a > b && 'a가 b보다 큽니다'}</div>
      <div className="Box">
        <h2 className="orange">Hello World</h2>
        <div>
          <label for="id"> 아이디 : </label>
          <input type="text" name="id" />
        </div>
        <div>
          <label for="pw"> 비밀번호 : </label>
          <input type="password" name="pw" />
        </div>
      </div>
    </>
  );
}

export default App;
