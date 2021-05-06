import React, { Component } from "react";
import harasLogo from "../assets/haras-logo.png";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    menu: "",
  };

  responsiveMenu = () => {
    if (this.state.menu === "") {
      this.setState({
        menu: "is-active",
      });
    } else {
      this.setState({
        menu: "",
      });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <NavLink to="/">
                <img src={harasLogo} width="180" height="45" />
              </NavLink>
            </div>
            <div
              onClick={this.responsiveMenu} role="button" className={`navbar-burger ${this.state.menu}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${this.state.menu}`}
          >
            <div className="navbar-start">
              <div className="navbar-item">Haras</div>
              <NavLink to="/planos/." className="navbar-item">Planos</NavLink>
              <NavLink to="/cavalos" className="navbar-item">Cavalos</NavLink>
              <div className="navbar-item">Reservas</div>
              <div className="navbar-item">Help</div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {this.props.user ? (
                    <>
                  <NavLink className="button is-danger" to="/logout"> Logout </NavLink>
                  </>
                  ) : (
                    <>
                    <NavLink className="button is-link" to="/login"> Login </NavLink>
                  <NavLink className="button is-info" to="/signup">
                    <strong>Sign up</strong>
                  </NavLink>
                  </>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
