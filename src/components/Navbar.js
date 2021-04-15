import React, { Component } from "react";

class Navbar extends Component {
    
    state={
        menu:""
    }

    responsiveMenu = () => {
        if (this.state.menu === ""){
            this.setState({
                menu: "is-active"
            })
        }else {
            this.setState({
                menu:""
            })
        }
    }
  


    render() {

    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </div>

            <div onClick={this.responsiveMenu}
              role="button" 
              className={`navbar-burger ${this.state.menu}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBasicExample" className={`navbar-menu ${this.state.menu}`}>
            <div className="navbar-start">
              <div className="navbar-item">Haras</div>
              <div className="navbar-item">Planos</div>
              <div className="navbar-item">Cavalos</div>
              <div className="navbar-item">Reservas</div>
              <div className="navbar-item">Help</div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <div className="button is-primary">
                    <strong>Sign up</strong>
                  </div>
                  <div className="button is-light">Log in</div>
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
