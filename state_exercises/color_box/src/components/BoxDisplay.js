import React, { Component } from "react";
import Box from "./Box";
import "./BoxDisplay.css";

export default class BoxDisplay extends Component {
  static defaultProps = {
    numberOfBoxes: 18,
  };

  render() {
    const boxes = Array.from({ length: this.props.numberOfBoxes }).map(
      (_, i) => <Box />
    );
    return <div className="boxDisplay">{boxes}</div>;
  }
}
