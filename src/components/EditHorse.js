import React, { Component } from 'react'
import apiUtils from "../api/api.utils";
import ListEditHorse from './ListEditHorse';

const initialState = {
    name: "",
    age: "",
    affiliation: "",
    color: "",
    breed: "",
    behavior: "",
    imagem: "",
    imagemFile: "",
    flag: false,
};
class EditHorse extends Component {
    state = initialState
    
    
        
    loadInfo = async () => {
      this.setState({
        name: this.props.horse.name,
      })
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

  

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const {name, age, affiliation, color, breed, behavior} = this.state;
            await this.handleUpload()
            const { imagem } = this.state;
            this.setState(initialState)
            await apiUtils.editHorse(this.props.horse._id, {name, age, affiliation, color, breed, behavior, imageUrl: imagem});
            
        } catch (error) {
            console.error(error)
        }
    };

    handleUpload = async (event) => {
        try {
            const imageUrl = await apiUtils.upload(this.state.imagemFile)
            this.setState({
                imagem: imageUrl
            })
            
        } catch (error) {
            console.error(error)            
        }
    }

    handleChangeFile = (event) => {
        this.setState({
            imagemFile: event.target.files[0]
        })
    }

    



    render() {
        return (
          
            <div className="mt-5 columns" style={{width: "100%"}}>
              <div> { this.state.flag === true ? (

                <ListEditHorse load={this.loadInfo}/>  
              ) : (
                <div></div>
              )
              }</div> 
        <form className="box column is-8 is-offset-2">
          <div className=" columns form-e-imagem"  > 
          <div className="column is-8 formulario">
            <div className="field">
               <div className="control">
                <input className="input" value={this.state.name} type="name" name="name" onChange={this.handleInput}/>
              </div>
            </div>
            <div className="field">
            <div className="control">
                <input className="input" placeholder={this.props.horse.age} value={this.state.age} type="age" name="age" onChange={this.handleInput}/>
              </div>
              
            </div>
            <div className="field">
             
              <div className="control">
                <input className="input" placeholder={this.props.horse.affiliation} value={this.state.affiliation} type="affiliation" name="affiliation" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" placeholder={this.props.horse.color} value={this.state.color}  type="cor" name="color" onChange={this.handleInput} />
              </div>
              </div>
            <div className="field">
                         <div className="control">
                <input className="input" placeholder={this.props.horse.breed} value={this.state.breed} type="breed" name="breed" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" placeholder={this.props.horse.behavior} value={this.state.behavior} type="behavior" name="behavior" onChange={this.handleInput} />
              </div>
            </div>
            </div>
          <div className="column is-4 imagem-perfil">
            <div className="notification is-fluid" >
              <div className="file is-info is-boxed has-name" style={{justifyContent:"center"}}>
                <label className="file-label">
                  <input className="file-input" type="file" name="imagem" onChange={this.handleChangeFile}/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Imagem do Cavalo</span>
                  </span>
                  <span className="file-name">{this.state.imagemFile.name}</span>
                </label>
              </div>
            </div>
          </div>
          </div>
          <button className="button is-fullwidth" className="button is-info" onClick={this.handleSubmit} style={{width: "100%"}}>
            <p>Gravar Alterações do Cavalo</p>
          </button>
          </form>
    </div>
        )
    }
}

export default EditHorse
