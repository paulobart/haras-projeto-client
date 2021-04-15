import React, { Component } from 'react'
import headerImg from '../assets/header.jpg'
import sponsorImg from '../assets/sponsor.jpg'
import cavaloImg from '../assets/cavalo.png'

class Profile extends Component {
    render() {
        return (
            <div>
              <div className="container">
                <div className="notification">
                      <div className="container-geral">
                        <div className="imagem-header">
                            <figure class="image is-3by1">
                                <img src={headerImg} alt="header"/>
                            </figure>
                        </div>
                        <div className="imagem-menu" style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
                            <figure class="image is-128x128">
                                <img src={sponsorImg} alt="user"/>
                            </figure>
                            <div className="tabs">
                                <ul>
                                    <li><a>Lista Cavalos</a></li>
                                    <li><a>Cavalos Apadrinhados</a></li>
                                    <li><a>Reserva</a></li>
                                    <li><a>Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="section"></section>
                    <div className="container-imagens-mensagens">
                            <div className="componentes-imagens" style={{display: "flex", justifyContent: "space-between"}}>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="box">
                            <article class="media">
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>John Smith</strong> <small>Admnistrador</small> <small>31m</small>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                                </div>
                            </article>
                            </div>
                        </div>
                    </div>
                    <section className="section"></section>
                    <div className="container-imagens-mensagens">
                            <div className="componentes-imagens" style={{display: "flex", justifyContent: "space-between"}}>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="card-image" style={{paddingRight: "50px"}}>
                                <figure class="image is-128x128">
                                <img src={cavaloImg} alt="cavalo"/>
                                </figure>
                            </div>
                            <div class="box">
                            <article class="media">
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>John Smith</strong> <small>Admnistrador</small> <small>31m</small>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                                </div>
                            </article>
                            </div>
                        </div>
                    </div>
                </div>
              </div>  
            </div>
        )
    }
}

export default Profile
