import React, { Component } from "react";
import { Jumbotron, Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Main2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleBlur() {
    console.log("You finished typing:", this.state.value);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        value: {this.state.value}
        <br />
        <textarea
          placeholder="Enter name of guest:"
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
          onBlur={this.handleBlur.bind(this)}
        />
      </div>
    );
  }
}

export default Main2;
