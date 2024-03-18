import React, { Component } from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";

export default class LifeCycleClass extends Component {
  //Mount
  componentDidMount() {
    console.log("컴포넌트 마운트!!");
  }
  //Update
  componentDidUpdate() {
    console.log("컴포넌트 업데이트!!");
  }
  //UnMount
  componentWillUnmount() {
    console.log("컴포넌트 언마운트!!");
  }
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>Plus</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
