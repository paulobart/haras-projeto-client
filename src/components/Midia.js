import React, { Component } from 'react';
import apiUtils from '../api/api.utils';
import cavaloImg from '../assets/cavalo.png';


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
            <div>
                <div className="container-imagens-mensagens">
                            <div className="componentes-imagens" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="card-image" style={{paddingRight: "50px"}}>
                                <figure className="image is-128x128">
                                <img src={this.state.midias[0]} alt="cavalo"/>
                                </figure>
                            </div>
                            <div className="box">
                            <article className="media">
                                <div className="media-content">
                                <div className="content">
                                    <p>
                                    <strong>John Smith</strong> <small>Administrador</small> <small>31m</small>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                    </p>
                                </div>
                                <button onClick={this.getInfo}>Info Profile </button>
                                </div>
                            </article>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Midia
