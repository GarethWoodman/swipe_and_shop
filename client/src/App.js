import React, { Component } from "react";
import Sell from "./components/sell.jsx";

class App extends Component {
  state = {
    currentPage: "Buy",
  };

  pageSetter = () => {
    this.setState({ currentPage: "Sell" });
  };

  render() {
    return (
      <div>
        <p>Swipe and Shop</p>

        <button id="buyButton" value="Buy">
          Buy
        </button>

        <button id="sellButton" value="Sell" onClick={this.pageSetter}>
          Sell
        </button>

        {this.state.currentPage === "Sell" && <Sell />}
      </div>
    );
  }
}

export default App;
