import React, { Component } from "react";
import axios from "axios";

class Shortlist extends Component {
  state = {
    seller_items: [],
  };

  // Call this method on component
  componentDidMount = () => {
    // Get current user from local storage
    const user_id = localStorage.getItem("user_id");
    // Get users.to_buy list
    axios
      .get("/user/" + user_id)
      .then((response) => {
        var items = response.data[0].to_buy;
        // Once response is returned call get_item_and_seller
        this.get_item_and_seller(items)
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  }

  // Make Async function to render promise 
  async get_item_and_seller(items){
    let sellers = [];
    // Initialize promises
    let promises = [];

    // When items have been populated - loop through each item
    items.forEach(function (item, index){
      // Push each promise into promises
      promises.push(
      axios
        .get("/user/" + item.user_id)
        .then((response) => {
          var data = response.data[0];
          sellers.push({seller: data, item: item})
        })
        .catch(() => {
          console.log("---")
        })
      )
    })

    // Once all promises have been fufilled setState for seller_items
    Promise.all(promises).then(() => this.setState({seller_items: sellers}))
  }

 render() {
    return (
      <div>
        { 
          this.state.seller_items.map(function(item){ 
            return <li>{item.seller.email}</li>
          })
        }
      </div>
    )
  }

}

export default Shortlist;

// 1. User logs in
// 2. User clicks yes on item
// 3. Item is stored in users to_buy array as item_id
// 4. User clicks on shortlist
// 5. items that appear in users to_buy is listed 

// Notes
// Chaining promises
// axios
//   .get("/user/" + item.user_id)
//   .then((response) => {
//     var data = response.data[0];
//     return Promise
//   })
//   .then((response) => {
//     var data = response.data[0];
//     this.setState({users: data})
//   .catch(() => {
//     alert("Blablabla")
//   )}
