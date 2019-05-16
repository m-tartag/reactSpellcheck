import React, { Component } from "react";

export class Counter extends Component {
  // State

  state = {
    //prop is being passed from state in counterS
    value: this.props.value
  };

  // Render

  render() {
    // Visualize props being passed
    console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // Methods

  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
