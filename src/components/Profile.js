import React, { Component } from 'react'
import headerImg from '../assets/header.jpg'
import sponsorImg from '../assets/sponsor.jpg'
import Midia from './Midia'

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
                    <Midia/>
                    </div>
              </div>  
            </div>
        )
    }
}

export default Profile
