import React, { Component } from "react";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  // less than ideal way to update based on current state value
  singleKill = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  // update state with callback form
  tripleKill = () => {
    // st param represesnts current state object
    this.setState((st) => {
      return { score: st.score + 3 };
    });
  };

  // abstract state update to a functional setState method
  uberScore = (currentState) => {
    return { score: currentState.score + 10 };
  }
  
  uberKill = () => {
    this.setState(this.uberScore)
  }
  render() {
    return (
      <div>
        <h1>score is {this.state.score}</h1>
        <button onClick={this.singleKill}>single kill</button>
        <button onClick={this.tripleKill}>triple kill</button>
        <button onClick={this.uberKill}>uber kill</button>
      </div>
    );
  }
}
