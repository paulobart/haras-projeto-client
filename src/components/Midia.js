import React, { Component } from 'react';
import apiUtils from '../api/api.utils';
import FrameVideo from './FrameVideo'
import { Link, Route } from "react-router-dom";
import playButton from '../assets/playButton.png'

class Midia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"6071bd1245e7b01c9dc7de92",
            midias: [],
            midiasVideo: [],
            url:""
        }
    }
   
     componentDidMount = () =>{
    this.getInfo();
  }

    getInfo = async () => {
        console.log('entrei na getinfo')
        try {
            const infoProfile = await apiUtils.getProfile(this.state.id)
            const midias = infoProfile.infos.refPlanHorse_id[8].horse_id.midiasImg
            const copiaMidias = [...this.state.midias];
            midias.forEach(midia => {
                midia[0].slice(0,95);
                copiaMidias.push(midia)
            });
            const videos = infoProfile.infos.refPlanHorse_id[8].horse_id.midiasVideo
            const copiaMidiasVideo = [... this.state.midiasVideo]
             videos.forEach(video => {
                video[0].slice(0,95);
                copiaMidiasVideo.push(video)
            });
          this.setState({
                midias: copiaMidias,
                midiasVideo: copiaMidiasVideo,
                url:copiaMidiasVideo[0]
            });
           
           } catch (error) {
            console.error(error)
        }
    }

    sendUrl = async (event)=>{
        try {
            console.log(event.target.name)
            this.setState({
                url: event.target.name
            })
            
        } catch (error) {
            
        }
    }

    render() {
        return (
            <div className="column is-8 box mr-1"> 
                <div className="container-imagens-mensagens ">
                    <div className="componentes-imagens">
                      <FrameVideo url={this.state.url} />
                       <div className=" box is-flex is-flex-wrap-wrap is-justify-content-flex-start">
                       {this.state.midiasVideo.map((video)=>{
                           return(
                        <div >
                            <figure className=" image mr-2 is-128x128">
                                <a > 
                                <img className="image is-128x128" 
                                src={playButton} name={video}  onClick={this.sendUrl}/>
                                </a>                       
                            </figure>
                            </div>
                        
                           )
                       })}
                       </div>
                       
                           
                                <div className=" box is-flex is-flex-wrap-wrap is-justify-content-flex-start" >
                                    {this.state.midias.map((image)=>{
                                     return(
                                         
                                            <div className=" image mr-1" > 
                                             <figure className="image mt-3 ">
                                                <img className="image is-128x128" src={image}  />
                                            </figure>
                                            </div>
                                            
                                        )})}
                                </div>
                       
                    </div>
                </div>    
            </div>
        )
    }
}
export default Midia