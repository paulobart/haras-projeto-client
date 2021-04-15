import React, { Component } from "react";
import apiUtils from "../api/api.utils";

class Login extends Component {

    state = {
        email: "",
        password:""
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await apiUtils.login(this.state);
            this.setState({
                email: "",
                password:""
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleInput = (event) => {
        const {name, value } = event.target
        this.setState({
            [name]: value
        })
    }

  render() {
    return (
      <div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" value={this.state.email} type="email" placeholder="Email" name='email' onChange={this.handleInput} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
          <input className="input" value={this.state.password} type="password" placeholder="Password" name='password' onChange={this.handleInput} />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
          <button className="button" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
