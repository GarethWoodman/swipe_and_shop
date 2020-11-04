import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  state = {};
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
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
          <span class="navbar-text">Navbar text with an inline element</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;