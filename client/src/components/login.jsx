import React, { Component } from "react";
import axios from "axios";
import Error from "./error.jsx";

class Login extends Component {
  state = {
    error: false,
    emailLogin: "",
    passwordLogin: "",
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin,
    };

    console.log(payload);

    axios({
      method: "post",
      url: "/user/login",
      data: payload,
    })
      // Called if server provides response
      .then((response) => {
        if (response.data.data.length == 0) {
          this.setState({ error: true });
        } else {
          console.log("Login accepted");
          this.props.pageSetter("Buy");

          console.log(response.data.token);
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user_id", response.data.data[0]._id);
          console.log(response.data.data[0]);
          this.props.usernameSetter(response.data.data[0]);
        }
      })
      // Called if server is unresponsive
      .catch(() => {
        console.log("Internal Server Error");
      });

    // this.props.pageSetter("Buy");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.error === true && (
          <Error message={"Incorrect login information"} />
        )}

        <form className="form-signin" onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal"></h1>

          {/* <p>email:</p> */}
          <div className="form-group">
            <input
              id="emailLogin"
              className="form-control"
              placeholder="Email address"
              type="email"
              onChange={this.myChangeHandler}
            />
          </div>

          {/* <p>password:</p> */}
          <div class="form-group">
            <input
              id="passwordLogin"
              className="form-control"
              placeholder="Password"
              type="password"
              onChange={this.myChangeHandler}
            />
          </div>

          <button
            id="loginSubmit"
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
