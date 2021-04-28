import React, { Component } from 'react'
import apiUtils from "../api/api.utils";

const initialState = {
    name: "",
    email: "",
    age: "",
    phone: "",
    imagem: "",
    imagemFile: "",
    password: ""
};

class CreateAdmin extends Component {
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
            const { name, email, age, phone, password } = this.state;
            await this.handleUpload()
            const { imagem } = this.state;
            this.setState(initialState)
            await apiUtils.newAdmin({name, age, email, phone, password, imageUrl: imagem});
            
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
    };

    handChangeFile = (event) => {
        this.setState({
            imagemFile: event.taget.files[0]
        })
    };

    render() {
        return (
            <div className="mt-5 columns" style={{width: "100%"}}>
        <form className="box column is-8 is-offset-2">
        <div>
        <p className="card-header-title is-size-4 has-text-info">
          Cadastre Novo Administrador
          </p>
      </div>
          <div className=" columns form-e-imagem"  > 
          <div className="column is-8 formulario">
            <div className="field">
               <div className="control">
                <input className="input" value={this.state.name} type="name" placeholder="Name" name="name" onChange={this.handleInput}/>
              </div>
            </div>
            <div className="field">
            <div className="control">
                <input className="input" value={this.state.email} type="email" placeholder="e.g. alex@example.com" name="email" onChange={this.handleInput}/>
              </div>
            </div>
            <div className="field">
             
              <div className="control">
                <input className="input" value={this.state.age} type="age" placeholder="Idade" name="age" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.phone} type="phone" placeholder="Número de telefone" name="phone" onChange={this.handleInput} />
              </div>
            </div>
            <div className="field">
                         <div className="control">
                <input className="input" value={this.state.password} type="password" placeholder="Password" name="password" onChange={this.handleInput} />
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
                    <span className="file-label">Imagem para perfil</span>
                  </span>
                  <span className="file-name">{this.state.imagemFile.name}</span>
                </label>
              </div>
            </div>
          </div>
          </div>
          <button className="button is-fullwidth" className="button is-info" onClick={this.handleSubmit} style={{width: "100%"}}>
            <p>Cadastre-se</p>
          </button>
          </form>
      </div>
        )
    }
}

export default CreateAdmin
