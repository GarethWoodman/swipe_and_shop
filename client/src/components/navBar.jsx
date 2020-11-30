import React, { Component } from "react";
import Button from "./button.jsx";
import logo from "../images/swipe_and_shop_logo.png";
// import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logOut = () => {
    console.log("Halo");
    localStorage.setItem("authToken", null);
    localStorage.setItem("user_id", null);
    this.props.pageSetter("Login");
    this.props.usernameSetter("");
  };

  createMenu = () => {
    if (
      this.props.currentPage === "Buy" ||
      this.props.currentPage === "Sell" ||
      this.props.currentPage === "Shortlist"
    ) {
      return (
        <React.Fragment>
          <li className="nav-item" key="buy">
            <a
              className="nav-link"
              href="/#"
              onClick={() => this.props.pageSetter("Buy")}
            >
              Buy
              {/* <Button
                id={"buyButton"}
                value={"Buy"}
                pageSetter={this.props.pageSetter}
              /> */}
            </a>
          </li>

          <li className="nav-item" key="sell">
            <a
              className="nav-link"
              href="/#"
              onClick={() => this.props.pageSetter("Sell")}
            >
              Sell
              {/* <Button
                id={"sellButton"}
                value={"Sell"}
                pageSetter={this.props.pageSetter}
              /> */}
            </a>
          </li>

          <li className="nav-item" key="shortlist">
            <a
              className="nav-link"
              href="/#"
              onClick={() => this.props.pageSetter("Shortlist")}
            >
              Shortlist
              {/* <Button
                id={"shortListButton"}
                value={"Shortlist"}
                pageSetter={this.props.pageSetter}
              /> */}
            </a>
          </li>

          <li className="nav-item" key="logout">
            <a className="nav-link" href="/#" onClick={() => this.logOut()}>
              Log Out
            </a>
          </li>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        // style={{ backgroundColor: "#1E90FF" }}
      >
        <a class="navbar-brand">
          {/* Swipe and Shop */}
          <img src={logo} style={{ height: "40px" }} />
        </a>

        <div class="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="navbar-text">{this.props.currentUser.real_name}</a>
            </li>
          </ul>
        </div>

        {/* <span class="navbar-text">{this.props.currentUser.real_name}</span> */}

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleCollapse}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class={(this.state.isOpen ? "" : "collapse ") + "navbar-collapse"}
          id="navbarText"
        >
          <ul class="navbar-nav ml-auto">
            {this.createMenu()}
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
          {/* <span class="navbar-text">Navbar text with an inline element</span> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
