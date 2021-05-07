import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import { Link } from "react-router-dom";

class Planos extends Component {
  state = {
    plans: [],
    horse_id: this.props.match.params.id,
    message: "",
    button: false,
  };

  componentDidMount = () => {
    this.getListPlan();
  };

  getListPlan = async () => {
    try {
      const plansList = await apiUtils.listPlan();
      this.setState({
        plans: plansList,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleApadrinhar = async (idPlan) => {
    try {
      console.log(this.props.user.id);
      const payload = {
        horse_id: this.state.horse_id,
        plans_id: idPlan,
        sponsor_id: this.props.user.id,
      };
      console.log(payload);
      const tosponsor = await apiUtils.apadrinhar(payload);
      this.setState({
        message: "Cavalo Apadrinhado com sucesso.",
        button: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  sendMessage = async () => {
    try {
      this.setState({
        message: "Escolha um cavalo a partir do Perfil.",
        button: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <div className="">
          <div className="box is-flex is-justify-content-space-around ">
            {this.state.plans.map((plan) => {
              return (
                <div className="mt-6 mr-1 ml-1 is-2 card">
                  <header className="card-header has-background-info">
                    <p className="card-header-title has-text-white">
                      {plan.name}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content is-2">
                      {plan.description}
                      <br />
                      <br />
                      <strong className="has-text-info">Valor</strong>
                      <p>R${plan.price},00</p>
                      <strong className="has-text-info">Benefícios</strong>
                      <div>
                        <span className="has-text-info">✔</span> {plan.dayUse}{" "}
                        day use por mês
                      </div>
                      <div>
                        <span className="has-text-info">✔</span> {plan.foto}{" "}
                        Foto diária
                      </div>
                      <div>
                        <span className="has-text-info">✔</span> {plan.video}{" "}
                        Vídeo semanal
                      </div>
                    </div>
                  </div>
                  <footer className="card-footer is-1"></footer>
                  {!this.props.user ? (
                    <div>
                      <Link to="/login">
                        <button
                          className="card-footer-item has-text-white button is-info"
                          style={{ width: "100%" }}
                        >
                          Comprar Agora!
                        </button>
                      </Link>
                    </div>
                  ) : this.props.user && this.props.match.params.id == "." ? (
                    <div>
                      <button
                        className="card-footer-item has-text-white button is-info"
                        onClick={this.sendMessage}
                        style={{ width: "100%" }}
                      >
                        Comprar Agora!
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="card-footer-item has-text-white button is-info"
                        onClick={() => this.handleApadrinhar(plan._id)}
                        style={{ width: "100%" }}
                      >
                        Comprar Agora!
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="has-text-info">{this.state.message}</p>
          {this.state.button == true ? (
            <Link to="/profile">
              <button className="button is-link mt-3" style={{ width: "25%" }}>
                Voltar
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Planos;
