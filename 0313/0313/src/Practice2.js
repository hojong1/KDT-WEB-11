import React, { Component } from "react";

export default class Practice2 extends Component {
  state = {
    count: 0,
  };

  render() {
    // const { count } = this.state;

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
