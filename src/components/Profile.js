import React, { Component } from 'react'
import headerImg from '../assets/header.jpg'
import sponsorImg from '../assets/sponsor.jpg'
import Mensagem from './Mensagem'
import Midia from './Midia'
import { NavLink, Link } from "react-router-dom";
import ListSponsoredHorses from "./ListSponsoredHorses";
import HorseList from './HorseList'
import SponsoredHorses from './SponsoredHorses'


class Profile extends Component {
    
    state = {
        page: "Nome Sponsor",
        button: "",
    }

       
     handleInput = async (event) =>{
         console.log(event.target.innerHTML)
         try {
             this.setState({
                 page: event.target.innerHTML 
                })
        } catch (error) {
            
        }
     } 

     handleInputButton = async (event) =>{
        console.log(event.target.name)
        try {
            this.setState({
                page: event.target.name
               })
       } catch (error) {
           
       }
    } 

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
                            <div className="tabs mt-3 is-centered is-boxed is-medium" style={{marginleft: -15}} >
                                <ul>
                                <li className={this.state.page === "Nome Sponsor" && "is-active"}>
                                    <a>
                                    <div onClick={this.handleInput}>Nome Sponsor</div>
                                    </a>
                                    </li>
                                    <li className={this.state.page === "Lista Cavalos" && "is-active"}>
                                       <a>
                                            <span className="icon is-small"><i className="fas fa-horse" aria-hidden="true"></i></span>
                                            <div onClick={this.handleInput} >Lista Cavalos</div>
                                        </a>
                                       </li>
                                    <li className={this.state.page === "Cavalos Apadrinhados" && "is-active"}>
                                       <a>
                                            <span className="icon is-small"><i className="fas fa-list" aria-hidden="true"></i></span>
                                            <div onClick={this.handleInput} >Cavalos Apadrinhados</div>
                                        </a>
                                        
                                    </li>
                                    <li className={this.state.page === "Reserva" && "is-active"}>
                                        <a>
                                            <span className="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
                                            <div onClick={this.handleInput}>Reserva</div>
                                        </a>
                                    </li>
                                    <li className={this.state.page === "Cavalos Apadrinhados" && "is-active"}>
                                        <a>
                                            <span className="icon is-small"><i className="fas fa-info" aria-hidden="true"></i></span>
                                            <div onClick={this.handleInput}>Help</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <section className="section mt-5"></section>
                        <div>
                            { this.state.page == "Lista Cavalos" ? (
                                <HorseList/>
                                ) : 
                                 this.state.page == "Cavalos Apadrinhados" ? (
                                <ListSponsoredHorses/> 
                                ) : 
                                  this.state.page == "Nome Sponsor" ? (
                                <div className="columns" style={{ marginTop: -90 }}>
                                <Midia user={ this.props.user.id }/>
                                <Mensagem user={ this.props.user.id }/>
                                </div>
                                ) :
                                this.state.page == "Reserva" ? (
                               <SponsoredHorses namePage={ this.handleInputButton }/> 
                                ) : null }
                        </div>
                    </div>
                </div>  
        </div>
        )
    }

}

export default Profile
