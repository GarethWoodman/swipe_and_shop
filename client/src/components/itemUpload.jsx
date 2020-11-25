import React, { Component } from "react";
import axios from "axios";
import InputBox from "./inputBox.jsx";

class ItemUpload extends Component {
  state = {
    user_id: localStorage.getItem("user_id"),
    item_name: "",
    description: "",
    price: 0.0,
    expiry_date: "",
    picture: "",
    users: "",
  };

  componentDidMount = () => {
    axios
      .get("/user")
      .then((response) => {
        var data = response.data;

        this.setState({ users: data });
        this.generateItemArray();
      })
      .catch(() => {
        alert("Error retrieving data mate");
      });
  };

  getUser = (id) => {
    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i]._id === id) {
        return this.state.users[i];
      }
    }
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value });
  };

  updateUserSellList = (item) => {
    // const currentItem = this.state.items[this.state.itemNum];
    // const user_id = localStorage.getItem("user_id");
    // let currentUser = this.getUser(user_id);
    // console.log(currentUser);
    // console.log("Item", currentItem);

    let itemToSell = item;

    console.log("itemToSell");
    console.log(itemToSell);

    let currentUser = this.getUser(this.state.user_id);

    console.log("CURRENT USER");
    console.log(currentUser);

    const payload = {
      user: currentUser,
      item: itemToSell,
    };

    axios({
      url: "/user/sell_item",
      method: "PUT",
      data: payload,
    })
      .then((response) => {
        console.log("Data has been sent to the server");
        console.log(response.data);
        // this.updateUser(response.data);
      })
      .catch(() => {
        console.log("Internal server error");
      });
    // const num = this.state.itemNum;
    // this.setState({ itemNum: num + 1 });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      user_id: this.state.user_id,
      item_name: this.state.item_name,
      description: this.state.description,
      price: this.state.price,
      expiry_date: this.state.expiry_date,
      picture: this.state.picture,
    };

    axios({
      method: "post",
      url: "/item/save",
      data: payload,
    })
      .then((response) => {
        // If response.data is true redirect to buy page
        if (response.data) {
          this.props.pageSetter("Buy");
        }
        console.log("Data has been sent to the server");
        console.log("response");
        console.log(response.data);

        this.updateUserSellList(response.data);
      })
      .catch(() => {
        console.log("Internal server error");
      });
    console.log(this.state);
  };

  render() {
    return (
      <section className="d-flex justify-content-center">
        <section className="col-12 col-sm-6 col-md-3">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <InputBox
              id={"item_name"}
              placeholder={"Name"}
              type={"text"}
              onChange={this.myChangeHandler}
            />

            <InputBox
              id={"description"}
              placeholder={"Description"}
              type={"text"}
              onChange={this.myChangeHandler}
            />

            <InputBox
              id={"price"}
              placeholder={"Price"}
              type={"number"}
              onChange={this.myChangeHandler}
            />

            <InputBox
              id={"expiry_date"}
              placeholder={"Expiry"}
              type={"text"}
              onChange={this.myChangeHandler}
            />

            <InputBox
              id={"picture"}
              placeholder={"Picture"}
              type={"text"}
              onChange={this.myChangeHandler}
            />

            <input
              id="itemSubmit"
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              value="Submit"
            ></input>
          </form>
        </section>
      </section>
    );
  }
}

export default ItemUpload;
