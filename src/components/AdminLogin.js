import React, { Component } from "react";
import apiUtils from "../api/api.utils";

class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { password, email } = this.state;
      if (!password || !email) {
      this.setState({
        message: "Todos os campos são obrigatórios",
      });
      return;
      }
      const userDB = await apiUtils.loginAdmin(this.state);
      this.props.userAdm(userDB);
      this.setState({
        email: "",
        password: "",
      });

      this.props.history.push("/adminpainel");
    } catch (error) {
      console.error(error);
      this.setState({
        message: "Email ou senha não conferem."
      });
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form
          className="box"
          style={{ marginRight: "20%", marginLeft: "20%", marginTop: "30px" }}
        >
          <div className="container">
            <div className="notification is-fluid">
              <div className="field">
                <label className="label">
                  Login to your Administration Account
                </label>
                <div className="control">
                  <input className="input" value={this.state.email} type="email" placeholder="e.g. alex@example.com" name="email" onChange={this.handleInput} />
                </div>
              </div>
              <div className="field">
                <label className="label"></label>
                <div className="control">
                  <input className="input" value={this.state.password} type="password" placeholder="********" name="password" onChange={this.handleInput} />
                </div>
              </div>
              <p className="has-text-danger">{this.state.message}</p>
              <button className="button is-fullwidth is-info" onClick={this.handleSubmit} >
                <p>Login</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLogin;
