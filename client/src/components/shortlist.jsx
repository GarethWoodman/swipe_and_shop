import React, { Component } from "react";
import axios from "axios";

class Shortlist extends Component {
  state = {
    items: []
  };

  componentDidMount = () => {
    const user_id = localStorage.getItem("user_id");
    axios
      .get("/user/" + user_id)
      .then((response) => {
        var data = response.data[0];
        console.log(data.to_buy)
        this.setState({ items: data.to_buy });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  }

  render() {
    
    console.log(this.state.items)
    return (
      <div>
        { 
          // (this.state.items).forEach(function (item, i) {
          //   return <li>{item.item_name}</li> 
          // })
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

