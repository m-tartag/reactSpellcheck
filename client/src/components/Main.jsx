import React, { Component } from "react";
import { Jumbotron, Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      apiValue: [],
      color: []
    };
  }
  handleBlur() {
    const input = this.state.value;
    const Url = `http://localhost:4000/api/data?word=${input}`;
    console.log(`Typed: ${input}`);
    axios.get(Url).then(res => {
      if (res.data.length > 0) {
        const Value = res.data[0].word;
        this.setState({ color: "green" });
        this.setState({ apiValue: Value });
        console.log(this.state.apiValue);
        console.log(this.state.color);
      } else {
        console.log("Not a Word!");
        this.setState({ color: "red" });
      }
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    // let style = {
    //   color: { ...this.state.color }
    // };
    return (
      <div className="container">
        <Jumbotron id="main">
          <h1 className="display-4">Word Checker</h1>
          <p style={{ color: "green" }} className="lead">
            A MERN Stack app that checks spelling.
          </p>
          <FormGroup>
            <Label for="exampleText" />
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows={6}
              placeholder="Enter here..."
              onChange={this.handleChange.bind(this)}
              value={this.state.value}
              onBlur={this.handleBlur.bind(this)}
            />
          </FormGroup>
          <p className="lead">
            <Button color="primary">Submit</Button>
          </p>
          <p style={{ color: `${this.state.color}` }}>{this.state.value}</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Main;
