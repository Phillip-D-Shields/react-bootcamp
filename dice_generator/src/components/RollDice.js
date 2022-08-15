//render two dice and a button that rolls them
import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
    };
  }

  dieFace = ["one", "two", "three", "four", "five", "six"];

  rollDice = () => {
    const newDie1 = this.dieFace[Math.floor(Math.random() * this.dieFace.length)]
    const newDie2 = this.dieFace[Math.floor(Math.random() * this.dieFace.length)]

    this.setState({
      rolling: true,
      die1: newDie1,
      die2: newDie2,
    });

    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="wrapper">
        <h2>roll them dice</h2>
        <div>
          <Die
            count={this.state.die1}
            rolling={this.state.rolling}
          />
          <Die
            count={this.state.die2}
            rolling={this.state.rolling}
          />
        </div>
        <button disabled={this.state.rolling} onClick={this.rollDice}>
          {this.state.rolling ? "Rolling..." : "Roll them bones"}
        </button>
      </div>
    );
  }
}
