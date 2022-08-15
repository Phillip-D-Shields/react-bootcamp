import React, { Component } from "react";

class luckyNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      luckyNumber: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 11),
    });
  }

  render() {
    return (
      <div>
        <h1>lucky number {this.state.luckyNumber}</h1>
        {this.state.luckyNumber === 7 ? (
          <h3>you win</h3>
        ) : (
          <button onClick={this.handleClick}>try again</button>
        )}
      </div>
    );
  }
}

export default luckyNumber;
