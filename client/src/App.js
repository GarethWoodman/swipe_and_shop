import React, { Component } from "react";
import "./styles.css";
import Sell from "./components/sell.jsx";
import Shortlist from "./components/shortlist.jsx";
import Buy from "./components/buy.jsx";
import SignUp from "./components/signUp.jsx";
import Login from "./components/login.jsx";
import NavBar from "./components/navBar.jsx";
import axios from "axios";
import fetch from 'cross-fetch';

class App extends Component {
  state = {
    currentPage: "Login",
    currentUser: "",
  };

  // pageSetter = ({ target }) => {
  //   console.log("Target page setter");
  //   console.log(target);
  //   this.setState({ currentPage: target.value });
  // };

  // signUpSubmit = () => {
  //   this.setState({ currentPage: "Login" });
  // };

  // loginSubmit = () => {
  //   this.setState({ currentPage: "Buy" });
  // };

  async componentDidMount() {
    if (localStorage.getItem("authToken") !== "null") {
      console.log(localStorage.getItem("authToken"));
      this.pageSetter("Buy");

      const user_id = localStorage.getItem("user_id");
      axios
        .get("/user/" + user_id)
        .then((response) => {
          var data = response.data[0];

          console.log("Andrew did mount");
          console.log(data);

          this.usernameSetter(data);
          // console.log(data.to_sell);
          // this.setState({ userShortlist: data.to_buy });
          // this.setState({ userItems: data.to_sell });
        })
        .catch(() => {
          alert("Error retrieving data user on App.js");
        });
    }

    // Clear all records of items before logging in
    console.log("Deleting all items")
    await axios
      .delete("/item/delete")
      .then((response) => {
        console.log(response)
      })
      .catch(() => {
        console.log("Error deleting all records in App.js");
      });

    // Then populate records
    await this.populateDB()
  }

  async populateDB(){
    let pokemon = []

    for (let i = 1; i <= 3; i++) {
      const url = "https://pokeapi.co/api/v2/pokemon/" + i
      const response = await fetch(url)
      this.data = await response.json()
      console.log(this.data.name)
  
      const payload = {
        user_id: "5fb94fe588f9ad9e2cf04380",
        item_name: this.data.name,
        description: `#${this.data.id} | Type: ${this.data.types[0].type.name} | Ability: ${this.data.abilities[0].ability.name}`,
        price: 1,
        expiry_date: "soon",
        picture: this.data.sprites.other.["official-artwork"].front_default
      };

      pokemon.push(payload)
    }

    console.log(pokemon)

    await axios({
      method: "post",
      url: "/item/save",
      data: pokemon,
      })
      .then((response) => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }

  pageSetter = (value) => {
    this.setState({ currentPage: value });
  };

  usernameSetter = (value) => {
    this.setState({ currentUser: value });
  };

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          pageSetter={this.pageSetter}
          currentUser={this.state.currentUser}
          usernameSetter={this.usernameSetter}
        />

        {/* {this.state.currentUser !== "" && (
          <p id="welcomeMessage">Welcome {this.state.currentUser.real_name}!</p>
        )} */}

        <div className="mainBody">
          {this.state.currentPage === "Shortlist" && <Shortlist />}

          {this.state.currentPage === "Login" && (
            <Login
              pageSetter={this.pageSetter}
              usernameSetter={this.usernameSetter}
            />
          )}
          {this.state.currentPage === "Buy" && <Buy />}
          {this.state.currentPage === "Sell" && (
            <Sell pageSetter={this.pageSetter} />
          )}
          {this.state.currentPage === "Sign Up" && (
            <SignUp pageSetter={this.pageSetter} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
