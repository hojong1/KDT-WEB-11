import React, { Component } from "react";

export default class LifeCycleClassChild extends Component {
  render() {
    return <div>현재 Number 값은 {this.props.number}입니다!</div>;
  }
}
