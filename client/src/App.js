import React, { Component } from "react";
import Sell from "./components/sell.jsx";
import Buy from "./components/buy.jsx";
import SignUp from "./components/signUp.jsx";
import Button from "./components/button.jsx";
import Login from "./components/login.jsx";

class App extends Component {
  state = {
    currentPage: "Login",
  };

  pageSetter = ({ target }) => {
    console.log("Target page setter");
    console.log(target);
    this.setState({ currentPage: target.value });
  };

  signUpSubmit = () => {
    this.setState({ currentPage: "Login" });
  };

  loginSubmit = () => {
    this.setState({ currentPage: "Buy" });
  };

  render() {
    return (
      <div>
        <p>Swipe and Shop</p>

        {this.state.currentPage === "Login" && (
          <Button id={"signUp"} value={"Sign Up"} onClick={this.pageSetter} />
        )}

        {this.state.currentPage === "Sign Up" && (
          <Button id={"login"} value={"Login"} onClick={this.pageSetter} />
        )}

        {(this.state.currentPage === "Buy" ||
          this.state.currentPage === "Sell") && (
          <Button id={"buyButton"} value={"Buy"} onClick={this.pageSetter} />
        )}
        {(this.state.currentPage === "Buy" ||
          this.state.currentPage === "Sell") && (
          <Button id={"sellButton"} value={"Sell"} onClick={this.pageSetter} />
        )}

        {this.state.currentPage === "Login" && (
          <Login loginSubmit={this.loginSubmit} />
        )}
        {this.state.currentPage === "Buy" && <Buy />}
        {this.state.currentPage === "Sell" && <Sell />}
        {this.state.currentPage === "Sign Up" && (
          <SignUp signUpSubmit={this.signUpSubmit} />
        )}
      </div>
    );
  }
}

export default App;
