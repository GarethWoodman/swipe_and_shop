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

  getCurrentUser = async (user_id) => {
    await axios
      .get("/user/" + user_id)
      .then((response) => {
        var data = response.data[0];
        this.setState({ userShortlist: data.to_buy });
        this.setState({ userItems: data.to_sell });
        console.log("ONE");
        return axios.get("/item");
      })
      .then((response) => {
        var data = response.data;
        var items = data;
        var randomisedItems = this.randomiseItemArray(items);
        this.setState({ items: randomisedItems });
        console.log("TWO");
        return axios.get("/user");
      })
      .then((response) => {
        var data = response.data;
        this.generateItemArray();
        this.setState({ users: data });
        console.log("THREE");
      })
      .catch(() => {
        alert("Error getting all users from buy");
      });
  };

  componentDidMount = () => {
    this.getCurrentUser(localStorage.getItem("user_id"));
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
    let items = this.state.items;

    let shortlist = this.state.userShortlist;
    let shortlistIds = shortlist.map((obj) => obj._id);

    console.log(this.state.userItems);
    let userItems = this.state.userItems;
    let userItemsIds = userItems.map((obj) => obj._id);
    console.log(userItemsIds);

    var itemArray = items.filter((val) => !shortlistIds.includes(val._id));

    itemArray = itemArray.filter((val) => !userItemsIds.includes(val._id));

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
    return (
      <div>
        <section className="d-flex justify-content-center">
          <section className="">
            <div className="buy-page">
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
                  <p id="itemPrice">
                    £{this.state.items[this.state.itemNum].price}
                  </p>
                  <img
                    className="itemPicture"
                    src={this.state.items[this.state.itemNum].picture}
                    alt="pic"
                  ></img>

                  <div id="buyButtons">
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
                </div>
              )}
              {this.state.itemNum > this.state.items.length - 1 && (
                <h1 className="noItemsLeft">No items left in your area!</h1>
              )}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Buy;
