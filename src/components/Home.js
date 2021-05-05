import React, { Component } from "react";
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import "bulma-carousel/dist/css/bulma-carousel.min.css";
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner-esq.png'
import banner5 from '../assets/banner-dir.png'

class Home extends Component {
    componentDidMount() {
        const carousels = bulmaCarousel.attach('.hero-carousel', {breakpoints: [{ changePoint: 480, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 }, { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 }]})
        console.log(carousels)
    }
  render() {
    return (
      <div>
        <div className="container-offset">
          <div className="notification">
            <section className="hero is-halfheight carousel" >
              <div id="carousel-demo" className="hero-carousel" data-infinite data-autoplay effect>
                <div className="item-1" >
                <figure className="banner1" ><img src={banner1} alt="header"/></figure>
                </div>
                <div className="item-2">
                <figure><img src={banner2} alt="header"/></figure>
                </div>
                <div className="item-3">
                <figure><img src={banner3} alt="header"/></figure>
                </div>
              </div>
              <div className="hero-head"></div>
              <div className="hero-body"></div>
              <div className="hero-foot"></div>
            </section>
             <div className="columns">
              <div className="column" >
              <figure><img className="banner rigth" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
              src={banner4} alt="header"/></figure>
              </div>
              <div className="column">
              <figure><img className="banner left" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
              src={banner5} alt="header"/></figure>
              </div>
            </div>
            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Haras and Horse Power Plataform</strong> by{" "}
                   <a href="https://github.com/paulobart/haras-projeto-client">
                    Alison Paulinho e Paulo Duarte
                  </a>
                  . <br></br> Web Dev PT October 2020 <a href="https://www.ironhack.com/br"> Ironhack </a>
                  . The website content is licensed to {" "}
                  <a href="https://www.ironhack.com/br">
                  Ironhack
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
