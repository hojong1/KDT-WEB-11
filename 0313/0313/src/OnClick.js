import React, { Component } from "react";
import PropTypes from "prop-types";

class OnClick extends Component {
  vaild = () => {
    console.log("콘솔띄우기 성공");
  };
  render() {
    const { text, vaild } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <h2>{vaild}</h2>

        <button onClick={this.vaild}>vaild</button>
      </div>
    );
  }
}
OnClick.defaultProps = {
  text: "이건 기본 text props입니다.",
};
OnClick.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OnClick;
