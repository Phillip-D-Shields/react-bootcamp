import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";

export default class Box extends Component {
  static defaultProps = {
    allColors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
  };

  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;

    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div
        className="box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
