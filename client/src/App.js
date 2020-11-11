import React, { Component } from "react";
import "./styles.css";
import Sell from "./components/sell.jsx";
import Shortlist from "./components/shortlist.jsx";
import Buy from "./components/buy.jsx";
import SignUp from "./components/signUp.jsx";
import Login from "./components/login.jsx";
import NavBar from "./components/navBar.jsx";

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

  componentDidMount() {
    if (localStorage.getItem("authToken") !== null) {
      this.pageSetter("Buy");
    }
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
        />

        {this.state.currentUser !== "" && (
          <p id="welcomeMessage">Welcome {this.state.currentUser.real_name}!</p>
        )}

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
    );
  }
}

export default App;
