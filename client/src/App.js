import React, { Component } from "react";
import Sell from "./components/sell.jsx";

class App extends Component {
  state = {
    currentPage: "Buy",
  };

  pageSetter = ({ target }) => {
    this.setState({ currentPage: target.value });
  };

  render() {
    return (
      <div>
        <p>Swipe and Shop</p>

        <button id="buyButton" value="Buy" onClick={this.pageSetter}>
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
