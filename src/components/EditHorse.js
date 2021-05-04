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
};

class EditHorse extends Component {
    state = initialState
    
    componentDidMount = () => {
      this.loadInfo();
    }

  
    loadInfo = async () => {
      this.setState({
        name: this.props.horse.name,
        age: this.props.horse.age,
        affiliation: this.props.horse.affiliation,
        color: this.props.horse.color,
        breed: this.props.horse.breed,
        behavior: this.props.horse.behavior,
        imageUrl: this.props.horse.imageUrl,
      })
      
    }

  

    render() {
        return (
          
            <div className="mt-5 columns" style={{width: "94%"}}>
              <form className="box column is-9" style={{marginLeft: "3%"}}>
              <div>
        <p className="card-header-title is-size-4 has-text-info">
          Preencha as informações para alterar 
          </p>
      </div>
          <div className=" columns form-e-imagem"  > 
          <div className="column is-8 formulario">
            <div className="field">
               <div className="control">
                <input className="input" value={this.props.horse.name} type="name" name="name" onChange={this.props.handleInput}/>
              </div>
            </div>
            <div className="field">
            <div className="control">
                <input className="input" value={this.props.horse.age} type="number" name="age" onChange={this.props.handleInput}/>
              </div>
              
            </div>
            <div className="field">
             
              <div className="control">
                <input className="input" value={this.props.horse.affiliation} type="affiliation" name="affiliation" onChange={this.props.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.props.horse.color}  type="cor" name="color" onChange={this.props.handleInput} />
              </div>
              </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.props.horse.breed} type="breed" name="breed" onChange={this.props.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.props.horse.behavior} type="behavior" name="behavior" onChange={this.props.handleInput} />
              </div>
            </div>
            </div>
          <div className="column is-4 imagem-perfil">
            <div className="notification is-fluid" >
              <div className="file is-info is-boxed has-name" style={{justifyContent:"center"}}>
                <label className="file-label">
                  <input className="file-input" type="file" name="imagem" onChange={this.props.handleChangeFile}/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Imagem do Cavalo</span>
                  </span>
                  <span className="file-name">{this.props.imagemFile.name}</span>
                </label>
              </div>
            </div>
          </div>
          </div>
          <button className="button is-fullwidth" className="button is-info" onClick={this.props.editHorse} style={{width: "100%"}}>
            <p>Gravar Alterações do Cavalo</p>
          </button>
          </form>
    </div>
        )
    }
}

export default EditHorse
