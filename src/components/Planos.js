import React, { Component } from "react";

class Planos extends Component {
  render() {
    return (
      <div>
        <div className="mt-6 mr-6 ml-6">
          <div className="box is-flex is-justify-content-space-around">
            <div className="column is-2 card">
              <header className="card-header has-background-info">
                <p className="card-header-title has-text-white">Mensal</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br/>
                  <br/>
                  <strong className="has-text-info">Valor</strong>
                  <p>R$250,00</p>
                  <strong className="has-text-info">Benefícios</strong>
                  <div><span className="has-text-info">✔</span> 1 day use por mês</div>
                  <div><span className="has-text-info">✔</span> 1 Foto diária</div>
                  <div><span className="has-text-info">✔</span> 1 Vídeo semanal</div>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-info">
                  Comprar Agora!
                </a>
              </footer>
            </div>
            <div className="column is-2 card">
              <header className="card-header has-background-info">
                <p className="card-header-title has-text-white">Bimestral</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br/>
                  <br/>
                  <strong className="has-text-info">Valor</strong>
                  <p>R$350,00</p>
                  <strong className="has-text-info">Benefícios</strong>
                  <div><span className="has-text-info">✔</span> 2 day use por mês</div>
                  <div><span className="has-text-info">✔</span> 2 Foto diária</div>
                  <div><span className="has-text-info">✔</span> 2 Vídeo semanal</div>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-info">
                  Comprar Agora!
                </a>
              </footer>
            </div>

            <div className="column is-2 card">
              <header className="card-header has-background-info">
                <p className="card-header-title has-text-white">Semestral</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br />
                  <br/>
                  <strong className="has-text-info">Valor</strong>
                  <p>R$450,00</p>
                  <strong className="has-text-info">Benefícios</strong>
                  <div><span className="has-text-info">✔</span> 4 day use por mês</div>
                  <div><span className="has-text-info">✔</span> 4 Foto diária</div>
                  <div><span className="has-text-info">✔</span> 3 Vídeo semanal</div>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-info">
                  Comprar Agora!
                </a>
              </footer>
            </div>

            <div className="column is-2 card">
              <header className="card-header has-background-info">
                <p className="card-header-title has-text-white">Anual</p>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <br />
                  <br/>
                  <strong className="has-text-info">Valor</strong>
                  <p>R$500,00</p>
                  <strong className="has-text-info">Benefícios</strong>
                  <div><span className="has-text-info">✔</span> 8 day use por mês</div>
                  <div><span className="has-text-info">✔</span> 4 Foto diária</div>
                  <div><span className="has-text-info">✔</span> 6 Vídeo semanal</div>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-info">
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
