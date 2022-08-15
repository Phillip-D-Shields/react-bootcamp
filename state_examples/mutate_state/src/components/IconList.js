import React, { Component } from "react";

export default class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      icons: [],
    };
  }

  addIcon = () => {
    let index = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[index];

    // ? wrong way
    // let newIcons = this.state.icons;
    // newIcons.push(newIcon);
    // this.setState({ icons: newIcons });

    // ? right way
    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  render() {
    const icons = this.state.icons.map((icon) => (
      <i key={icon} className={`fa fa-${icon}`}></i>
    ));
    return (
      <div>
        <h1>icons: {icons}</h1>
        <button onClick={this.addIcon}>add another icon</button>
      </div>
    );
  }
}
