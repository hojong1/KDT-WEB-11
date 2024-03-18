import React, { Component, createRef } from "react";

export default class Ex1 extends Component {
  //createRef를 사용하여 만들 때는 컴포넌트 내부에서 변수에 createRef()를 담아주는 것
  writerRef = createRef();
  titleRef = createRef();

  handleFocus = () => {
    if (this.writerRef.current.value.trim().length === 0) {
      this.writerRef.current.focus();
    }
    if (this.titleRef.current.value.trim().length === 0) {
      this.titleRef.current.focus();
    }
  };

  render() {
    return (
      <>
        <input type="text" ref={this.writerRef} />
        <input type="text" ref={this.titleRef} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
