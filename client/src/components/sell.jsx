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
        {/* <h1>Sell Page</h1> */}
        <ItemUpload pageSetter={this.props.pageSetter} />
      </div>
    );
  }
}

export default Sell;
