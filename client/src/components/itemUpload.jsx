import React, { Component } from "react";
import axios from 'axios';

class ItemUpload extends Component {
  state = {
    user_id: "1",
    item_name: "",
    description: "",
    price: 0.00,
    expiry_date: "",
    picture: ""
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value})
  }

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      user_id: this.state.user_id,
      item_name: this.state.item_name,
      description: this.state.description,
      price: this.state.price,
      expiry_date: this.state.expiry_date,
      picture: this.state.picture,
    }

    axios({
      method: "post",
      url: "/item/save",
      data: payload,
    })
    .then(() => {
      console.log("Data has been sent to the server");
    })
    .catch(() => {
      console.log("Internal server error")
    })

    console.log("-------- Item Props --------")
    console.log(this.props)
    this.props.pageSetter("Buy")
  }

  render() {
    return (
      <form id="itemSubmit" onSubmit={this.onSubmit}>
        <input id="item_name" type="text" placeholder="Name" onChange={this.myChangeHandler}></input>
        <input
          id="description"
          type="text"
          placeholder="Description"
          onChange={this.myChangeHandler}
        ></input>
        <input id="price" type="number" placeholder="Price" onChange={this.myChangeHandler}></input>
        <input id="expiry_date" type="text" placeholder="Expiry" onChange={this.myChangeHandler}></input>
        <input id="picture" type="text" placeholder="Picture"onChange={this.myChangeHandler}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default ItemUpload;
