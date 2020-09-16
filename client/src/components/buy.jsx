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

  nextItemNo = () => {
    const num = this.state.itemNum;
    if (num < this.state.items.length - 1) {
      this.setState({ itemNum: num + 1 });
    }
  };

  nextItemYes = () => {
    // const payload = {
    //   title: this.state.title,
    //   body: this.state.body,
    // };

    // axios({
    //   url: "/user/save",
    //   method: "POST",
    //   data: payload,
    // })
    //   .then(() => {
    //     console.log("Data has been sent to the server");
    //     this.resetUserInputs();
    //     this.getBlogPost();
    //   })
    //   .catch(() => {
    //     console.log("Internal server error");
    //   });

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

        <button id="yesButton" onClick={this.nextItemYes}>
          Yes
        </button>

        <button id="noButton" onClick={this.nextItemNo}>
          No
        </button>
      </div>
    );
  }
}

export default Buy;
