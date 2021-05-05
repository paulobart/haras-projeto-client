import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import { Link } from "react-router-dom"

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
  state = initialState;

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        name,
        age,
        affiliation,
        color,
        breed,
        behavior,
        register,
      } = this.state;
      if (
        !name ||
        !age ||
        !affiliation ||
        !color ||
        !breed ||
        !behavior ||
        !register
      ) {
        this.setState({
          message: "Todos os campos são obrigatórios",
        });
        return;
      }

      await this.handleUpload();
      const { imagem } = this.state;
      this.setState(initialState);
      await apiUtils.newHorse({
        name,
        age,
        affiliation,
        color,
        breed,
        behavior,
        register,
        imageUrl: imagem,
      });
      this.props.history.push("/adminpainel");
    } catch (error) {
      console.error(error);
    }
  };

  handleUpload = async (event) => {
    try {
      const imageUrl = await apiUtils.upload(this.state.imagemFile);
      this.setState({
        imagem: imageUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChangeFile = (event) => {
    this.setState({
      imagemFile: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <div className="geral container is-fullhd ml-6 box mt-6 columns">
          <div className="paineis column">
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
          <div className="box painel-admin column is-8">
            <h5 className="columns card-header-title is-size-4 has-text-info">
              Cadastre Novo Cavalo
            </h5>
            <div
              className="columns form-e-imagem ml-1 is-flex"
            >
              <div
                className="column is-8 formulario"
              >
                <div className="field ">
                  <div className="control"> <input className="input" value={this.state.name} type="name" placeholder="Nome" name="name" onChange={this.handleInput} />
                  </div>
                </div>
                <div className="field ">
                  <div className="control"> <input className="input" value={this.state.age} type="number" placeholder="Idade" name="age" onChange={this.handleInput} />
                  </div>
                </div>

                <div className="field ">
                  <div className="control">
                    <input className="input" value={this.state.affiliation} type="affiliation" placeholder="Filiação" name="affiliation" onChange={this.handleInput} />
                  </div>
                </div>

                <div className="field ">
                  <div className="control">
                    <input className="input" value={this.state.color} type="cor" placeholder="Cor do cavalo" name="color" onChange={this.handleInput} />
                  </div>
                </div>

                <div className="field ">
                  <div className="control">
                    <input className="input" value={this.state.breed} type="breed" placeholder="Raça" name="breed" onChange={this.handleInput} />
                  </div>
                </div>

                <div className="field ">
                  <div className="control">
                    <input className="input" value={this.state.behavior} type="behavior" placeholder="Comportamento" name="behavior" onChange={this.handleInput} />
                  </div>
                </div>

                <div className="field ">
                  <div className="control">
                    <input className="input" value={this.state.register} type="register" placeholder="Número de Registro" name="register"
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="column is-4 imagem-perfil">
                <div className="notification is-fluid">
                  <div className="file is-info is-boxed has-name ml-2">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="imagem"
                        onChange={this.handleChangeFile}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">Imagem do Cavalo</span>
                      </span>
                      <span className="file-name">
                        {this.state.imagemFile.name}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <p className="has-text-danger">{this.state.message}</p>
            <button
              className="button is-fullwidth"
              className="button is-info"
              onClick={this.handleSubmit}
              style={{ width: "100%" }}
            >
              <p>Cadastre Novo Cavalo</p>
            </button >
            <Link to="/adminpainel"><button className="button is-fullwidth is-link mt-3" >Voltar</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HorseRegister;
