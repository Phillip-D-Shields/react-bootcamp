import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxValue: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      lottoNumbers: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generateLottoNumbers = () => {
    this.setState((currentState) => ({
      lottoNumbers: currentState.lottoNumbers.map(
        () => Math.floor(Math.random() * this.props.maxValue) + 1
      ),
    }));
  };

  handleClick = () => {
    this.generateLottoNumbers();
  };

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <div className="lottoBallsDisplay">
          {this.state.lottoNumbers.map((number) => (
            <Ball value={number} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate Lotto Numbers</button>
      </section>
    );
  }
}
