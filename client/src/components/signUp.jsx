import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    real_name: "",
    picture: "",
    to_buy: [],
    to_sell: []
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id
    let value     = event.target.value
    this.setState({[attribute]: value})
  }

  render() {
    console.log(this.state);
    return (
      <div>

        <p>real_name:</p>
        <input
          id="real_name"
          type="text"
          onChange={this.myChangeHandler}
        />

        <p>username:</p>
        <input
          id="username"
          type="text"
          onChange={this.myChangeHandler}
        />

        <p>email:</p>
        <input
          id="email"
          type="text"
          onChange={this.myChangeHandler}
        />

        <p>password:</p>
        <input
          id="password"
          type="password"
          onChange={this.myChangeHandler}
        />

        <p>picture</p>
        <input
          id="picture"
          type="text"
          onChange={this.myChangeHandler}
        />

      </div>
    )
  }
}

export default SignUp;