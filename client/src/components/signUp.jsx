import React, { Component } from "react";
import axios from "axios";
import InputBox from "./inputBox.jsx";

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
    this.props.pageSetter("Login");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form className="form-signin" onSubmit={this.onSubmit}>
              <InputBox
                id={"real_name"}
                placeholder={"Real Name"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"username"}
                placeholder={"Username"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"email"}
                placeholder={"Email address"}
                type={"email"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"picture"}
                placeholder={"Picture URL"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <button
                id="userSubmit"
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default SignUp;
