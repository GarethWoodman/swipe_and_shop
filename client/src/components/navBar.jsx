import React, { Component } from "react";
import Button from "./button.jsx";
// import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // createMenu = () => {
  // if (this.state.isLoggedIn === null) {
  // return (
  //   <React.Fragment>
  //     <li className="nav-item" key="login">
  //       <a className="nav-link" href="/#">
  //         Login
  //       </a>
  //     </li>
  //     <li className="nav-item" key="signup">
  //       <a className="nav-link" href="/#">
  //         Signup
  //       </a>
  //     </li>
  //   </React.Fragment>
  // );
  // } else {
  // return (
  //   <ul className="navbar-nav ml-auto">
  //     <li className="nav-item" key="logout">
  //       <a className="nav-link" href="/#" onClick={this.clickSignout}>
  //         Sign Out
  //       </a>
  //     </li>
  //   </ul>
  // );
  // }
  // };

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
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        // style={{ backgroundColor: "#1E90FF" }}
      >
        <a class="navbar-brand" href="#">
          Swipe and Shop
        </a>
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
