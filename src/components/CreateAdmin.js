import React, { Component } from 'react'
import apiUtils from "../api/api.utils";

const initialState = {
    name: "",
    email: "",
    age: "",
    phone: "",
    imagem: "",
    imagemFile: "",
    password: "",
    message: "",
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
            if (!password || !name || !email || !phone || !age) {
              this.setState({
                  message: "Todos os campos são obrigatórios",
              });
              return;
          }
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
          <div>
          <div className="geral container ml-6 box mt-6 columns">
            <div className="paineis column is-4">
              <div className="box info-admin column" style={{ marginTop: -12 }}>
                <div className="foto-admin">
                  <div className="imagem-header">
                    <figure className="image is-128x128">
                      <img src={this.props.user.imageUrl} />
                    </figure>
                  </div>
                </div>
                <div className="dados-admin"></div>
                <p className="card-header card-header-title is-size-4 has-text-info">
                  {" "}
                  {this.props.user.name}
                </p>
                <p className="card-header card-header-title is-size-6 has-text-info">
                  {" "}
                  E-mail: {this.props.user.email}
                </p>
                <p className="card-header card-header-title is-size-6 has-text-info">
                  {" "}
                  Telefone: {this.props.user.phone}
                </p>
              </div>
            </div>
            <div className="mt-0 columns" >
        <form className="box column is-10 ml-3" style={{width: "130%"}}>
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
              <div className="file is-info is-boxed has-name ml-2">
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
          <p className="has-text-danger">{this.state.message}</p>
          <button className="button is-fullwidth" className="button is-info" onClick={this.handleSubmit} style={{width: "100%"}}>
            <p>Cadastre-se</p>
          </button>
          </form>
      </div>
      </div>
      </div>
        )
    }
}

export default CreateAdmin
