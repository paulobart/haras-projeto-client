import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import 'bulma/css/bulma.css'
import { Link, NavLink } from "react-router-dom"

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userDB = await apiUtils.login(this.state);
      console.log(userDB)
      this.props.user(userDB)
      this.setState({
        email: "",
        password: "",
      });

      
      this.props.history.push("/profile")
    } catch (error) {
      console.error(error);
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
         <form className="box" style={{ marginRight: "20%", marginLeft: "20%", marginTop: "30px" }}>
          <div className="container">
            <div className="notification is-fluid">
              <div className="field">
                <label className="label">Login</label>
                <div className="control">
                  <input className="input" value={this.state.email} type="email" placeholder="e.g. alex@example.com" name="email" onChange={this.handleInput}/>
                 </div>
              </div>

              
              <div className="field">
                <label className="label"></label>
                <div className="control">
                  <input className="input" value={this.state.password} type="password" placeholder="********" name="password" onChange={this.handleInput}/>
                </div>
              </div>
              <button className="button is-fullwidth" className="button is-info" onClick={this.handleSubmit}>
                <p>Login</p>
              </button>
            </div>
            <div className="notification is-fluid">
              <div className="field"></div>
              <label className="label">Ou crie a sua conta</label>
              <div className="control"></div>
              <Link to="/signup">
              <button className="button is-fullwidth" className="button is-info">Sign up</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
