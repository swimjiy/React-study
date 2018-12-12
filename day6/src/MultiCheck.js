import React, { Component } from "react";
import Checkbox from "./Checkbox";

const items = ["Project Room", "Seminar Room", "Orange Room"];

class MultiCheck extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);
  render() {
    return (
      <div>
        <h5>checkbox create module</h5>
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}

          <button className="btn btn-default" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MultiCheck;
