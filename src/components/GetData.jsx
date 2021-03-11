import React, { Component } from "react";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== "getData") {
      return null;
    }
    return (
      <div className="container">
        <h1>Get Data</h1>
      </div>
    );
  }
}

export default StepOne;
