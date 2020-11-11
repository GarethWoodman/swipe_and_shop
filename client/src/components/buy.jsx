import React, { Component } from "react";
import axios from "axios";

class Buy extends Component {
  state = {
    items: [],
    userShortlist: [],
    userItems: [],
    users: "",
    itemNum: 0,
    currentUser: "",
  };

  componentDidMount = () => {
    const user_id = localStorage.getItem("user_id");
    axios
      .get("/user/" + user_id)
      .then((response) => {
        var data = response.data[0];
        console.log(data.to_buy);
        this.setState({ userShortlist: data.to_buy });
        this.setState({ userItems: data.to_sell });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });

    axios
      .get("/item")
      .then((response) => {
        var data = response.data;
        var items = data;
        var randomisedItems = this.randomiseItemArray(items);
        this.setState({ items: randomisedItems });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });

    axios
      .get("/user")
      .then((response) => {
        var data = response.data;

        this.setState({ users: data });
      })
      .catch(() => {
        alert("Error retrieving data mate");
      });

    setTimeout(this.generateItemArray, 3000);
  };

  getUser = (id) => {
    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i]._id === id) {
        return this.state.users[i];
      }
    }
  };

  randomiseItemArray = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  generateItemArray = () => {
    var items = this.state.items;
    var shortlist = this.state.userShortlist;
    var userItems = this.state.userItems;

    var itemArray = items.filter((val) => !shortlist.includes(val));

    itemArray = items.filter((val) => !userItems.includes(val));

    this.setState({ items: itemArray });
  };

  updateUser = (updatedUser) => {
    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i]._id === updatedUser._id) {
        this.state.users[i] = updatedUser;
      }
    }
  };

  nextItemNo = () => {
    const num = this.state.itemNum;
    this.setState({ itemNum: num + 1 });
  };

  nextItemYes = () => {
    const currentItem = this.state.items[this.state.itemNum];
    const user_id = localStorage.getItem("user_id");

    let currentUser = this.getUser(user_id);

    console.log(currentUser);
    console.log("Item", currentItem);

    const payload = {
      user: currentUser,
      item: currentItem,
    };

    axios({
      url: "/user/save_item",
      method: "PUT",
      data: payload,
    })
      .then((response) => {
        console.log("Data has been sent to the server");
        console.log(response.data);
        this.updateUser(response.data);
      })
      .catch(() => {
        console.log("Internal server error");
      });

    const num = this.state.itemNum;
    this.setState({ itemNum: num + 1 });
  };

  render() {
    // Checks if items and users have been loaded, if they haven't - return null
    if (!this.state.items.length || !this.state.users.length) {
      console.log("Not loaded");
      return null;
    }
    console.log(this.state.items[0].item_name);
    return (
      <div>
        {/* <h1>Buy Page</h1> */}
        {/* <p id="itemUserRealName">{this.getUser(this.state.items[this.state.itemNum].user_id).real_name}</p> */}
        {this.state.itemNum <= this.state.items.length - 1 && (
          <div>
            <p id="itemName">
              {this.state.items[this.state.itemNum].item_name}
            </p>
            <p id="itemDescription">
              {this.state.items[this.state.itemNum].description}
            </p>
            <p id="itemPrice">{this.state.items[this.state.itemNum].price}</p>
            <img
              id="itemPicture"
              src={this.state.items[this.state.itemNum].picture}
              alt="pic"
            ></img>

            <button
              id="yesButton"
              className="btn btn-lg btn-primary btn-block"
              onClick={this.nextItemYes}
            >
              Yes
            </button>

            <button
              id="noButton"
              className="btn btn-lg btn-primary btn-block"
              onClick={this.nextItemNo}
            >
              No
            </button>
          </div>
        )}
        {this.state.itemNum > this.state.items.length - 1 && (
          <h1>No items left in your area!</h1>
        )}
      </div>
    );
  }
}

export default Buy;
