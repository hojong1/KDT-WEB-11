import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Practice4 extends Component {
  // class에서의 함수 선언
  vaild() {
    console.log("콘솔 띄우기 성공");
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        {/* 함수 사용시에도 this */}
        <button onClick={this.vaild}>콘솔</button>
      </div>
    );
  }
}
Practice4.defaultProps = {
  text: "이건 기본 text props입니다.",
};
Practice4.propTypes = {
  text: PropTypes.string.isRequired,
};
