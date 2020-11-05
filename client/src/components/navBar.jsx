import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  state = { isOpen: false };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  createMenu = () => {
    // if (this.state.isLoggedIn === null) {
    return (
      <React.Fragment>
        <li className="nav-item" key="login">
          <a className="nav-link" href="/#">
            Login
          </a>
        </li>
        <li className="nav-item" key="signup">
          <a className="nav-link" href="/#">
            Signup
          </a>
        </li>
      </React.Fragment>
    );
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
