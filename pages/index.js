import React, { Component } from "react";

export default class About extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <input
          type="text"
          name="input"
          onChange={this.handleChange}
          name="input"
          value={input}
        />
        {input + "Here is the input "}
      </div>
    );
  }
}
