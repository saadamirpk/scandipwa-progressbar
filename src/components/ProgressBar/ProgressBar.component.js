import React, { Component } from "react";
import checkic from "../../img/check-ic.png";

export default class ProgressBar extends Component {
  getSteps() {
    let current = 0;
    const lastStep = this.props.allSteps.length - 1;

    //CHECK WHICH STEP WE ARE ON
    for (let i = 0; i < lastStep + 1; i++) {
      if (this.props.currentStep === this.props.allSteps[i]) {
        current = i;
      }
    }

    return this.props.allSteps.map((step, i) => {
      if (i === lastStep) {
        return;
      }
      return (
        <>
          <div
            key={step}
            className={i <= current ? "step primary" : "step grey"}
          >
            <div>
              {i < current ? <img src={checkic} alt="icon" /> : <p>{i + 1}</p>}
            </div>
            <p>{step.split("_")[0]}</p>
          </div>
          <div className={i < current ? "bar primary" : "bar grey"}>
            <div />
          </div>
        </>
      );
    });
  }

  render() {
    return (
      <div className="progressBar">
        <div className="bar primary">
          <div />
        </div>
        {this.getSteps()}
      </div>
    );
  }
}
