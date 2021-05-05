import React, { Component } from 'react'
import headerImg from '../assets/header.jpg'
import sponsorImg from '../assets/sponsor.jpg'
import Mensagem from './Mensagem'
import Midia from './Midia'
import { NavLink, Link } from "react-router-dom";
import ListSponsoredHorses from "./ListSponsoredHorses";
import HorseList from './HorseList'
import SponsoredHorses from './SponsoredHorses'
import apiUtils from '../api/api.utils';


class Profile extends Component {
    
    state = {
        page: "Nome Sponsor",
        button: "",
        horses:[],
        horse:"",
        check: false,
        midias: [],
        midiasVideo: [],
        url:"",
    }
      componentDidMount = async () =>{  
       this.getMidia()
    }

    handleInput = async (event) =>{
         try {
             this.setState({
                 page: event.target.innerHTML 
                })
        } catch (error) {
        }
     } 

     handleInputButton = async (event) =>{
        try {
            this.setState({
                page: event.target.name
               })
       } catch (error) {
       }
    } 
    getMidia = async ()=>{
        try {
            const infoProfile = await apiUtils.getProfile(this.props.user.id)
            console.log(infoProfile.infos.refPlanHorse_id[0].horse_id.midiasVideo[0].slice(0,95))
            this.setState({
                horses:infoProfile.infos.refPlanHorse_id,
                url:infoProfile.infos.refPlanHorse_id[0].horse_id.midiasVideo[0].slice(0,95),
            })
            
        } catch (error) {
            
        }
    }
    
    getHorseToEdit = async (index) => {
    try {
        const imagens = this.state.horses[index].horse_id.midiasImg
        const copiaMidias = []
        
        imagens.forEach(midia => {
            midia.slice(0,95);
            copiaMidias.push(midia)
        });
        console.log(imagens)
        const videos = this.state.horses[index].horse_id.midiasVideo
        const copiaMidiasVideo = []
        videos.forEach(video => {
           video[0].slice(0,95);
           copiaMidiasVideo.push(video)
       });
       console.log(videos)
        this.setState({
        horse: this.state.horses[index],
        midias: copiaMidias,
        midiasVideo: copiaMidiasVideo,
        check: true
        })
        } catch (error) {
    }
}

    render() {
        return (
            <div>
                
              <div className="container">
                <div className="notification">
                    <div className="container-geral" style={{marginTop: -90}}>
                        <div className="imagem-header">
                            <figure className="image is-3by1">
                                <img src={headerImg} alt="header"/>
                            </figure>
                        </div>
                        <div className="imagem-menu is-flex is-justify-content-space-between" style={{marginTop: -35}}>
                            <figure className="image is-128x128">
                                <img src={this.props.user.imageUrl} alt="user"/>
                            </figure>

                            

                            <div className="tabs mt-3 is-centered is-boxed is-medium" style={{marginleft: -15}} >

                                <ul>
                                <li className={this.state.page === "Nome Sponsor" && "is-active"}>
                                    <a>
                                    <div onClick={this.handleInput}>{this.props.user.name}</div>
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
                                <ListSponsoredHorses user={ this.props.user.id }/> 
                                ) : 
                                  this.state.page == "Reserva" ? (
                               <SponsoredHorses namePage={ this.handleInputButton }/> 
                                ) : (
                                <div>
                                    <div>
                                        <div className="mr-6 mb-3 has-text-info is-size-5" style={{marginTop: -120}}> Escolha o cavalo para ver os videos e imagens</div>
                                            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                                                {/*<a className="pagination-previous" style={{marginTop: -160}}>Previous</a>
                                                 <a className="pagination-next" style={{marginTop: -160}}>Next page</a>*/}
                                                <ul className="pagination-list">
                                                    {this.state.horses.map((horse, index) => {
                                                        return (
                                                        <>
                                                        <li><div
                                                         className="pagination-link p-2 has-text-white has-background-grey-light" 
                                                        aria-label="Goto page 1" onClick={()=>this.getHorseToEdit(index)}> {horse.horse_id.name} 
                                                        </div></li>
                                                        </>
                                                        );
                                                    })}
                                                </ul>
                                            </nav>
                                        </div>
                                            <div className="columns mt-5 " >
                                                <Midia user={ this.props.user.id }  horse={this.state.midias} horseVideo={this.state.midiasVideo} url={this.state.url} />
                                                <Mensagem user={ this.props.user }/>
                                            </div>
                                    </div>
                                )}
                            </div>
                        </div>
                </div>  
            </div>
        )
    }

}

export default Profile
