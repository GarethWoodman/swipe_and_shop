import React, { Component } from "react";
import axios from "axios";

class Shortlist extends Component {
  state = {
    seller_items: [],
  };

  componentDidMount = () => {
    const user_id = localStorage.getItem("user_id");
    axios
      .get("/user/" + user_id)
      .then((response) => {
        var items = response.data[0].to_buy;
        this.get_item_and_seller(items)
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  }

  async get_item_and_seller(items){
    let sellers = [];
    let promises = [];

    items.forEach(function (item, index){
      promises.push(
      axios
        .get("/user/" + item.user_id)
        .then((response) => {
          var data = response.data[0];
          const seller_item = {seller: data, item: item}
          sellers.push(seller_item)
        })
        .catch(() => {
          console.log("---")
        })
      )
    })

    Promise.all(promises).then(() => this.setState({seller_items: sellers}))
  }



 render() {
  if(!this.state.seller_items.length) {
    return null
  }

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

