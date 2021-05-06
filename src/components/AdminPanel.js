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
          <div className="box painel-admin column is-8"> 
          <h5 className="card-header-title is-size-4 has-text-info">Painel Administrativo</h5>
            <div className="botoes-admin-cavalos card-header mt-3 py-2">
            <div className="field is-grouped">
                <p className="control">
                <Link to="/admin/newhorse"><button className="ml-2 button is-info" style={{width: 200}}>
                    Cadastar Cavalo
                    </button>
                    </Link>
                </p>
                <p className="control">
                <Link to="admin/edithorse"><button className="button is-info" style={{width: 200}}>
                    Editar Cavalo
                    </button>
                    </Link>    
                </p>
                <p className="control">
                <Link to="admin/deletehorse"><button className="button is-info" style={{width: 200}}>
                    Deletar Cavalo
                    </button>
                    </Link>
                </p>
                </div>
            </div>
            <div className="botoes-admin-planos card-header mt-3 py-2">
            <div className="field is-grouped">
                <p className="control">
                <Link to="admin/criarplanos"><button className="ml-2 button is-link" style={{width: 200}}>
                    Cadastrar Plano
                    </button>
                </Link>      
                </p>
                <p className="control">
                <Link to="admin/editarplanos"><button className="button is-link" style={{width: 200}}>
                    Editar Plano
                    </button>
                </Link>
                </p>
                <p className="control">
                <Link to="/admin/deletarplanos"><button className="button is-link" style={{width: 200}}>
                    Deletar Plano
                    </button>
                </Link>        
                </p>
                </div>
            </div>
            <div className="botoes-admin-haras card-header mt-3 py-2">
            <div className="field is-grouped">
                <p className="control">
                <Link to="/admin/updateharas">
                    <button className="ml-2 button is-info" style={{width: 200}}>
                    Editar Haras
                    </button>
                    </Link>
                </p>
                <p className="control">
                <Link to="/admin/createAdmin"><button className="button is-info" style={{width: 200}}>
                    Novo Administrador
                    </button>
                    </Link>
                </p>
                <p className="control">
                <Link to="/admin/deleteAdmin"><button className="button is-info" style={{width: 200}}>
                    Deletar Administrador
                    </button>
                    </Link> 
                </p>
                </div>
            </div>
            <div className="botoes-admin-site card-header mt-3 py-2">
            <div className="field is-grouped">
                <p className="control">
                    <Link to="/"><button className="ml-2 button is-link" style={{width: 200}}>
                    Ver Alterações Site
                    </button>
                    </Link>
                </p>
            </div>
            </div>
            <div className="botoes-admin-relacionamento card-header mt-3 py-2">
            <div className="field is-grouped">
                <p className="control">
                <Link to="/admin/uploadmidia"><button className="ml-2 button is-info" style={{width: 200}}>
                    Upload de Mídia
                    </button>
                    </Link>
                </p>
                <p className="control">
                   <Link to="/admin/conversas"> <button className="button is-info" style={{width: 200}}>
                    Conversas
                    </button>
                   </Link> 
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
