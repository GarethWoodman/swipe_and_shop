import React, { Component } from "react";
import ItemUpload from "./itemUpload.jsx";

class Sell extends Component {
  state = {
    newItem: false,
  };

  loadForm = () => {
    this.setState({ newItem: true });
  };

  render() {
    return (
      <div>
        <h1>Sell Page</h1>
        <button id="itemUpload" onClick={this.loadForm}>
          Item Upload
        </button>
        <ItemUpload />
      </div>
    );
  }
}

export default Sell;
