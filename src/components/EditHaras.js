import React, { Component } from "react";
import apiUtils from "../api/api.utils";



class EditHaras extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    localization: "",
    haras_id: "608b38c0f4ef20001517adb5",
  };

  componentDidMount = () => {
    this.getHarasInfo();
  };

  getHarasInfo = async () => {
    try {
      const harasInfo = await apiUtils.getHaras(this.state.haras_id);
      this.setState({
        name: harasInfo.name,
        phone: harasInfo.phone,
        email: harasInfo.email,
        localization: harasInfo.localization,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        localization: this.state.localization,
      };
      await apiUtils.updateHaras(this.state.haras_id, payload);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
        <div>
        <div className="geral container ml-6 box mt-6 columns">
          <div className="paineis column">
            <div className="box info-admin column" style={{marginTop: -12}}>
              <div className="foto-admin">
                <div className="imagem-header">
                  <figure className="image is-128x128">
                    <img src={this.props.user.imageUrl} />
                  </figure>
                </div>
              </div>
              <div className="dados-admin"></div>
              <p className="card-header card-header-title is-size-4 has-text-info"> {this.props.user.name}
              </p>
              <p className="card-header card-header-title is-size-6 has-text-info"> E-mail: {this.props.user.email}
              </p>
              <p className="card-header card-header-title is-size-6 has-text-info"> Telefone: {this.props.user.phone}
              </p>
            </div>
          </div>
        <div className="mt-1 ml-2 columns" style={{ width: "65%" }}>
        <form className="box column is-10">
          <div>
            <p className="card-header-title is-size-4 has-text-info">
              Preencha as informações para alterar
            </p>
          </div>
            <div className="field">
                <div className="control">
                  <input className="input" value={this.state.name} placeholder={this.state.name} type="name" name="name" onChange={this.handleInput} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                  <input className="input" value={this.state.phone} type="phone" name="phone" onChange={this.handleInput} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                  <input className="input" value={this.state.email} type="email" name="email" onChange={this.handleInput} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                  <input className="input" value={this.state.localization} type="localization" name="localization" onChange={this.handleInput} />
                </div>
            </div>
            <button className="button is-fullwidth mb-4 button is-info" onClick={this.handleSubmit} style={{ width: "100%" }} >
                <p>Gravar Alterações do Haras</p>
            </button>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default EditHaras;
