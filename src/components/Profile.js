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
        horses:[],
        horse:"",
        check: false,
        midias: [],
        midiasVideo: [],
        url:"",
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
    getMidia = async (midia)=>{
        try {
            console.log(midia.infos.refPlanHorse_id)
            this.setState({
                horses:midia.infos.refPlanHorse_id
            })
        } catch (error) {
            
        }
    }
    getHorseToIndex = (index)=>{
        console.log(index)
    }
    getHorseToEdit = async (index) => {
    try {
        console.log("oi")
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
        url:copiaMidiasVideo[0],
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
                    <div className="container-geral" style={{marginTop: -90} }>
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
                    
                    <span>Escolha qual de seus cavalos gostaria de ver as midias:</span>
                    
                    <select onChange={()=>this.getHorseToEdit()}> 
                    {this.state.horses.map((horse, index) => {
                  return (
                    <option name="horse"  value="selecione um cavalo" onChange={()=>this.getHorseToIndex(index)} >{horse.horse_id.name}</option>
                    //  <label key={horse._id} className="radio panel-block control ml-1">
                    //     <input type="radio" name="horse" onChange={()=>this.getHorseToEdit(index)}/>
                    //     <span className="has-text-info has-text-weight-semibold ml-3"> {horse.horse_id.name} </span>
                    //     </label>
                    );
                })}
                </select>
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
                                    <div className="columns" style={{ marginTop: -90 }}>
                                    <Midia user={ this.props.user.id } getMidia={this.getMidia} horse={this.state.midias} horseVideo={this.state.midiasVideo} url={this.state.url} />
                                    <Mensagem user={ this.props.user }/>
                                    </div>
                                    ) }
                        </div>
                    </div>
                </div>  
        </div>
        )
    }

}

export default Profile
