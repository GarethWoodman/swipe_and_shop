import React, { Component } from "react";
import Sell from "./components/sell.jsx";
import Buy from "./components/buy.jsx";
import SignUp from "./components/signUp.jsx";
import Button from "./components/button.jsx";
import Login from "./components/login.jsx";

class App extends Component {
  state = {
    currentPage: "Login",
    currentUser: ""
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

  pageSetter = (value) => {
    this.setState({ currentPage: value });
  };

  usernameSetter = (value) => {
    this.setState({ currentUsername: value });
  };

  render() {
    return (
      <div>
        <p>Swipe and Shop</p>

        {this.state.currentUsername !== "" && 
          <p id="userName">Welcome {this.state.currentUser}!</p>}

        {this.state.currentPage === "Login" && (
          <Button id={"signUp"} value={"Sign Up"} pageSetter={this.pageSetter} />
        )}

        {this.state.currentPage === "Sign Up" && (
          <Button id={"login"} value={"Login"} pageSetter={this.pageSetter} />
        )}

        {(this.state.currentPage === "Buy" ||
          this.state.currentPage === "Sell") && (
          <Button id={"buyButton"} value={"Buy"} pageSetter={this.pageSetter} />
        )}
        {(this.state.currentPage === "Buy" ||
          this.state.currentPage === "Sell") && (
          <Button id={"sellButton"} value={"Sell"} pageSetter={this.pageSetter} />
        )}

        {this.state.currentPage === "Login" && (
          <Login pageSetter={this.pageSetter} usernameSetter={this.usernameSetter} />
        )}
        {this.state.currentPage === "Buy" && <Buy />}
        {this.state.currentPage === "Sell" && <Sell />}
        {this.state.currentPage === "Sign Up" && (
          <SignUp pageSetter={this.pageSetter} />
        )}
      </div>
    );
  }
}

export default App;
