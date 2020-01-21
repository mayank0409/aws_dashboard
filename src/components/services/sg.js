import React, { Component } from "react";

import CreateTableFromJSON from "../table";

export default class ec2 extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/sg")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <div>
        <h2 className="service-header">SG Service</h2>
        <p id="showData"></p>
        <CreateTableFromJSON data={this.state.data} />
      </div>
    );
  }
}
