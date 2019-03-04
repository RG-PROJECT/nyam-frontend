import React, { Component } from "react";
import axios from "axios";
const LOGIN_API = "https://nyam.deerwhite.net:2083/users/login";

class CommonLogin extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    let { email, pw } = this.state;

    // TODO: login valid check
    console.log(email, pw);

    axios
      .post(LOGIN_API, { email, pw })
      .then(res => {
        console.log(res);
        if (res.data.message === "OK") {
          alert("로그인 되었습니다.");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    let { name, value } = event.target;
    // TODO: 보기편하게 개선..
    if (name === "email") {
      this.setState({ email: value });
    }
    if (name === "pw") {
      this.setState({ pw: value });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="loginWrapper commonLogin">
            <div className="loginItem email">
              <label>Email 주소</label>
              <input
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="loginItem passward">
              <label>비밀번호</label>
              <input
                type="password"
                className="form-control"
                name="pw"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="loginButton">
              <button type="submit" className="loginItem btn btn-outline-dark">
                로그인
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CommonLogin;
