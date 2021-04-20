import React, { Component } from 'react';
import apiUtils from '../api/api.utils';



class Mensagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"6071bd1245e7b01c9dc7de92",
            bodyMessage:"",
            author:""
        }
    }

    getInfo = async () => {
        try {
            const messageProfile = await apiUtils.getMessage(this.state.id)
            const {bodyMessage, author} = messageProfile;
            console.log(author)
            
            });
            this.setState({
                midias: copiaMidias
            });
            console.log(this.state.midias)

        }
           } catch (error) {
            console.error(error)
    }
// criar funcão para carregar todas as mídias
    render() {
        return (
            <div>
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
                                
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Mensagem