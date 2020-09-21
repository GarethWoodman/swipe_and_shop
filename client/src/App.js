import React, { Component } from "react";
import Sell from "./components/sell.jsx";
import Buy from "./components/buy.jsx";
import SignUp from "./components/signUp.jsx";
import Button from "./components/button.jsx";

class App extends Component {
  state = {
    currentPage: "Login",
  };

  pageSetter = ({ target }) => {
    this.setState({ currentPage: target.value });
  };

  render() {
    return (
      <div>
        <p>Swipe and Shop</p>

        <Button id={"signUp"} value={"Sign Up"} onClick={this.pageSetter} />

        {this.state.currentPage !== "Login" && (
          <Button id={"buyButton"} value={"Buy"} onClick={this.pageSetter} />
        )}
        {this.state.currentPage !== "Login" && (
          <Button id={"sellButton"} value={"Sell"} onClick={this.pageSetter} />
        )}

        {this.state.currentPage === "Buy" && <Buy />}
        {this.state.currentPage === "Sell" && <Sell />}
        {this.state.currentPage === "Sign Up" && <SignUp />}
      </div>
    );
  }
}

export default App;
