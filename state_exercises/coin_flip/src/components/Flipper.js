import React, { Component } from "react";
import Coin from "./Coin";

// ! heads === 0 && tails === 1

export default class Flipper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flips: [],
      currentBinary: null,
    };
  }

  generateBinary = () => {
    return Math.floor(Math.random() * 2);
  };

  handleFlipClick = () => {
    const newBinary = this.generateBinary();

    this.setState({
      flips: [...this.state.flips, newBinary],
      currentBinary: newBinary,
    });
  };

  
  render() {
    return (
      <section>
        <h2>the flippening</h2>
        <div className="coinDisplay">
          <Coin binary={this.state.currentBinary} />
          <h4>
            the current number of flips: {this.state.flips.length}, number of
            heads: {this.state.flips.filter((b) => b === 0).length}, number of
            tails: {this.state.flips.filter((b) => b === 1).length}
          </h4>
        </div>
        <button onClick={this.handleFlipClick}>
          {this.state.flips.length ? "flip again" : "start flipping"}
        </button>
      </section>
    );
  }
}
