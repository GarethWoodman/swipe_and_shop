import React, { Component } from "react";
import axios from "axios";

class Shortlist extends Component {
  state = {
    items: ""
  };

  componentDidMount = () => {
    const user_id = localStorage.getItem("user_id");

    axios
      .get("/user/" + user_id)
      .then((response) => {
        var data = response.data;
        console.log(data)
        this.setState({ items: data.to_buy });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
    }

}

// 1. User logs in
// 2. User clicks yes on item
// 3. Item is stored in users to_buy array as item_id
// 4. User clicks on shortlist
// 5. items that appear in users to_buy is listed 

