import React, { Component } from "react";
import axios from "axios";

class Spelling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { value } = this.state;

    axios.post("/data", { value }).then(result => {
      //access the results here....
    });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <textarea
            text="text"
            name="value"
            value={value}
            onChange={this.onChange}
          >
            {this.state.value}
          </textarea>
          <span>Value = {this.props.name}</span>

          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Spelling;
