import React, { Component } from "react";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import "bulma-carousel/dist/css/bulma-carousel.min.css";


class Home extends Component {
    componentDidMount() {
        const carousels = bulmaCarousel.attach('.hero-carousel')
        console.log(carousels)
    }
  render() {
    return (
      <div>
        <div className="container">
          <div className="notification is-fluid">
            <section className="hero is-halfheight carousel" >
              <div id="carousel-demo" className="hero-carousel" data-infinite data-autoplay>
                <div className="item-1">Apadrinhe cavalos</div>
                <div className="item-2">Escolha o seu plano</div>
                <div className="item-3">Conheça o Haras Mustang</div>
              </div>
              <div className="hero-head"></div>
              <div className="hero-body"></div>
              <div className="hero-foot"></div>
            </section>
            <section className="section"></section>
            <div className="columns">
              <div className="column">Banner Planos</div>
              <div className="column">Banner Cavalos</div>
            </div>
            <section className="section"></section>
            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Haras</strong> by{" "}
                  <a href="https://jgthms.com">
                    Alison Paulinho e Paulo Duarte
                  </a>
                  . The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">
                    Ironhack
                  </a>
                  . The website content is licensed{" "}
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                  </a>
                  .
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
