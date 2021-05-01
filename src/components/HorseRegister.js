import React, { Component } from 'react'
import apiUtils from "../api/api.utils";

const initialState = {
    name: "",
    age: "",
    affiliation: "",
    color: "",
    breed: "",
    behavior: "",
    imagem: "",
    imagemFile: "",
    register: "",
    message: "",
};

class HorseRegister extends Component {
    state = initialState

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const {name, age, affiliation, color, breed, behavior, register } = this.state;
            if (!name || !age || !affiliation || !color || !breed || !behavior || !register) {
              this.setState({
                  message: "Todos os campos são obrigatórios",
              });
              return;
          }
          
            await this.handleUpload()
            const { imagem } = this.state;
            this.setState(initialState)
            await apiUtils.newHorse({name, age, affiliation, color, breed, behavior, register, imageUrl: imagem});
            this.props.history.push("/adminpainel")
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
        <form className="box column is-8 is-offset-2">
        <div>
        <p className="card-header-title is-size-4 has-text-info">
          Cadastre Novo Cavalo 
          </p>
      </div>
          <div className=" columns form-e-imagem"  > 
          <div className="column is-8 formulario">
            <div className="field">
               <div className="control">
                <input className="input" value={this.state.name} type="name" placeholder="Nome" name="name" onChange={this.handleInput}/>
              </div>
            </div>
            <div className="field">
            <div className="control">
                <input className="input" value={this.state.age} type="number" placeholder="Idade" name="age" onChange={this.handleInput}/>
              </div>
            </div>
            <div className="field">
             
              <div className="control">
                <input className="input" value={this.state.affiliation} type="affiliation" placeholder="Filiação" name="affiliation" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.color} type="cor" placeholder="Cor do Cavalo" name="color" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.breed} type="breed" placeholder="Raça" name="breed" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.behavior} type="behavior" placeholder="Comportamento" name="behavior" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.register} type="number" placeholder="Número do Registro" name="register" onChange={this.handleInput} />
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
          <p className="has-text-danger">{this.state.message}</p>
          <button className="button is-fullwidth" className="button is-info" onClick={this.handleSubmit} style={{width: "100%"}}>
            <p>Cadastre Novo Cavalo</p>
          </button>
          </form>
      </div>
        )
    }
}

export default HorseRegister
