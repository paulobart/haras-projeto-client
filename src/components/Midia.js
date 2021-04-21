import React, { Component } from 'react';
import apiUtils from '../api/api.utils';



class Midia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"6071bd1245e7b01c9dc7de92",
            midias: []
        }
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
            this.setState({
                midias: copiaMidias
            });
            console.log(this.state.midias)

           } catch (error) {
            console.error(error)
    }
    }
// criar funcão para carregar todas as mídias
    render() {
        return (
            <div className="column is-6"> 
                <div className="container-imagens-mensagens">
                    <div className="componentes-imagens" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="card-image" style={{paddingRight: "50px"}}>
                            <figure className="image is-128x128">
                                {this.state.midias.map(function(image){
                                return(
                                    <div>
                                        <div className=" columns midiasImg " >
                                            <div className="column "> 
                                                <img  src={image} width='120' />
                                            </div>
                                        </div>
                                     </div>
                                )})}
                            </figure>
                            <button onClick={this.getInfo}>Info Profile </button>
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
export default Midia