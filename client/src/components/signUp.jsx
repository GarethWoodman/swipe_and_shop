import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    real_name: "",
    picture: "",
    to_buy: [],
    to_sell: [],
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      real_name: this.state.real_name,
      picture: this.state.picture,
      to_buy: [1],
      to_sell: [1],
    };

    axios({
      method: "post",
      url: "/user/save",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        //this.resetUserInputs();
      })
      .catch(() => {
        console.log("Internal server error");
      });

    console.log("PROPS");
    console.log(this.props);
    this.props.signUpSubmit();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>real_name:</p>
          <input id="real_name" type="text" onChange={this.myChangeHandler} />

          <p>username:</p>
          <input id="username" type="text" onChange={this.myChangeHandler} />

          <p>email:</p>
          <input id="email" type="text" onChange={this.myChangeHandler} />

          <p>password:</p>
          <input
            id="password"
            type="password"
            onChange={this.myChangeHandler}
          />

          <p>picture</p>
          <input id="picture" type="text" onChange={this.myChangeHandler} />

          <button id="userSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
