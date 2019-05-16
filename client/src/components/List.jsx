import React, { Component } from "react";

export class List extends Component {
  state = {
    tags: ["Matt", "Jack", "Harrison", "William", "Randy"]
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.tags.length === 0 && "Please Create a New Tag"}</span>
        <span>{this.renderTags()}</span>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default List;
