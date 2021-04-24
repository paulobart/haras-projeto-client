import React, { Component } from 'react'
import headerImg from '../assets/header.jpg'
import sponsorImg from '../assets/sponsor.jpg'
import Mensagem from './Mensagem'
import Midia from './Midia'
import { NavLink, Link } from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
              <div className="container">
                <div className="notification">
                    <div className="container-geral" style={{marginTop: -90} }>
                        <div className="imagem-header">
                            <figure className="image is-3by1">
                                <img src={headerImg} alt="header"/>
                            </figure>
                        </div>
                        <div className="imagem-menu is-flex is-justify-content-space-between" style={{marginTop: -35}}>
                            <figure className="image is-128x128">
                                <img src={sponsorImg} alt="user"/>
                            </figure>
                            <div className="tabs is-centered is-boxed is-medium"style={{marginleft: -15}} >
                                <ul>
                                    <a>
                                        <span classNameName="">Nome Sponsor</span>
                                    </a>
                                    <li className="is-active">
                                        <a>
                                            <span className="icon is-small"><i className="fas fa-horse" aria-hidden="true"></i></span>
                                            <NavLink to="/cavalos"><span>Lista Cavalos</span><NavLink/>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon is-small"><i className="fas fa-list" aria-hidden="true"></i></span>
                                            <span>Cavalos Apadrinhados</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
                                            <span>Reserva</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon is-small"><i className="fas fa-info" aria-hidden="true"></i></span>
                                            <span>Help</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <section className="section"></section>
                        <div className="columns" style={{marginTop: -90}}>
                            <Midia/>
                            <Mensagem/>
                        </div>
                </div>
            </div>  
        </div>
        )
    }

}

export default Profile
