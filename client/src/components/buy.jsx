import React, { Component } from "react";
import axios from "axios";

class Buy extends Component {
  state = {
    items: "",
    itemNum: 0,
  };

  componentDidMount = () => {
    axios
      .get("/item")
      .then((response) => {
        var data = response.data;
        this.setState({ items: data });
        // console.log(data)
        console.log("Data has been recieved");
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  nextItem = () => {
    const num = this.state.itemNum;
    if (num < this.state.items.length - 1) {
      this.setState({ itemNum: num + 1 });
    }
  };

  render() {
    if (!this.state.items.length) return null;
    console.log(this.state.items[0].item_name);
    return (
      <div>
        <h1>Buy Page</h1>
        <p>{this.state.items[this.state.itemNum].item_name}</p>
        <p>{this.state.items[this.state.itemNum].description}</p>
        <p>{this.state.items[this.state.itemNum].price}</p>
        <img src={this.state.items[this.state.itemNum].picture} alt="pic"></img>

        <button id="yesButton">Yes</button>

        <button id="noButton" onClick={this.nextItem}>
          No
        </button>
      </div>
    );
  }
}

export default Buy;
