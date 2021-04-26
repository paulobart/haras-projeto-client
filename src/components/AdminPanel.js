import React, { Component } from "react";
import adminImg from "../assets/admin.jpg";
import { Link } from "react-router-dom"


class AdminPanel extends Component {


  render() {
    return (
      <div>
        <div className="geral container is-fullhd ml-6 box mt-6 columns">
          <div className="paineis column">
            <div className="box info-admin column" style={{marginTop: -12}}>
              <div className="foto-admin">
                <div className="imagem-header">
                  <figure className="image is-128x128">
                    <img src={adminImg} />
                  </figure>
                </div>
              </div>
              <div className="dados-admin"></div>
              <p className="card-header card-header-title is-size-4 has-text-info"> Nome Administrador
              </p>
              <p className="card-header card-header-title"> Email 
              </p>
              <p className="card-header card-header-title"> Telefone 
              </p>
            </div>
          </div>
          <div className="box painel-admin column is-8"> 
          <h5 class="card-header-title is-size-4 has-text-info">Painel Administrativo</h5>
            <div className="botoes-admin-cavalos card-header mt-3 py-2">
            <div class="field is-grouped">
                <p class="control">
                    <button class="ml-2 button is-info" style={{width: 200}}>
                    Cadastrar Cavalo
                    </button>
                </p>
                <p class="control">
                    <button class="button is-info" style={{width: 200}}>
                    Editar Cavalo
                    </button>
                </p>
                <p class="control">
                    <button class="button is-info" style={{width: 200}}>
                    Deletar Cavalo
                    </button>
                </p>
                </div>
            </div>
            <div className="botoes-admin-planos card-header mt-3 py-2">
            <div class="field is-grouped">
                <p class="control">
                    <button class="ml-2 button is-link" style={{width: 200}}>
                    Cadastrar Plano
                    </button>
                </p>
                <p class="control">
                    <button class="button is-link" style={{width: 200}}>
                    Editar Plano
                    </button>
                </p>
                <p class="control">
                    <button class="button is-link" style={{width: 200}}>
                    Deletar Plano
                    </button>
                </p>
                </div>
            </div>
            <div className="botoes-admin-haras card-header mt-3 py-2">
            <div class="field is-grouped">
                <p class="control">
                    <button class="ml-2 button is-info" style={{width: 200}}>
                    Editar Haras
                    </button>
                </p>
                <p class="control">
                    <button class="button is-info" style={{width: 200}}>
                    Novo Administrador
                    </button>
                </p>
                <p class="control">
                    <button class="button is-info" style={{width: 200}}>
                    Deletar Administrador
                    </button>
                </p>
                </div>
            </div>
            <div className="botoes-admin-site card-header mt-3 py-2">
            <div class="field is-grouped">
                <p class="control">
                    <Link to="/"><button class="ml-2 button is-link" style={{width: 200}}>
                    Ver Alterações Site
                    </button>
                    </Link>
                </p>
            </div>
            </div>
            <div className="botoes-admin-relacionamento card-header mt-3 py-2">
            <div class="field is-grouped">
                <p class="control">
                    <button class="ml-2 button is-info" style={{width: 200}}>
                    Upload de Mídia
                    </button>
                </p>
                <p class="control">
                    <button class="button is-info" style={{width: 200}}>
                    Conversas
                    </button>
                </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
