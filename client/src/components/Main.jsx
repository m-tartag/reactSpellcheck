import React, { Component } from "react";
import { Jumbotron, Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export class Main extends Component {
  state = {
    value: ""
  };
  componentDidMount() {
    axios.get("http://localhost:4000/api/data?word=apple").then(res => {
      const Value = res.data[0].word;
      console.log(res.data[0].word);
      this.setState({ newValue: Value });
    });
  }
  render() {
    return (
      <div className="container">
        <Jumbotron id="main">
          <h1 className="display-4">Word Checker</h1>
          <p className="lead">A MERN Stack app that checks spelling.</p>
          <FormGroup>
            <Label for="exampleText" />
            <Input type="textarea" name="text" id="exampleText" rows={6} />
          </FormGroup>
          <p className="lead">
            <Button color="primary">Submit</Button>
          </p>
          <span>{2 + 2}</span>
        </Jumbotron>
      </div>
    );
  }
}

export default Main;
