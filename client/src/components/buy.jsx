import React, { Component } from "react";
import axios from "axios";

class Buy extends Component {
  state = {
    user: "",
    item_name: "",
    description: "",
    expiry_date: "",
    picture: "",
    price: "",
    items: ""
  }

  componentDidMount = () => {
    axios
      .get("/item")
      .then((response) => {
        var data = response.data;
        this.setState({ items: data });
        // console.log(data)
        console.log("Data has been recieved")
      })
      .catch(() => {
        alert("Error retrieving data!!!")
      })
  };

  render() {
    if(!this.state.items.length) return null;
    console.log(this.state.items[0].item_name)
    return (
      <div>
        <h1>Buy Page</h1>;
        <p>{this.state.items[0].item_name}</p>
      </div>
    );
  }
}

export default Buy;
