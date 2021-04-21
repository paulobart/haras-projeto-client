import React, { Component } from "react";

class Planos extends Component {
  render() {
    return (
      <div>
        <div className="mt-6" style={{ display:"flex", justifyContent:"center", alignItems:"" }}>
          <div class="box columns is-12">
            <div className="column is-2 card">
              <header className="card-header">
                <p className="card-header-title">Mensal</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br />
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  Comprar Agora!
                </a>
              </footer>
            </div>
            <div className="column is-2 card">
              <header className="card-header">
                <p className="card-header-title">Bimestral</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br />
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  Comprar Agora!
                </a>
              </footer>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Planos;
