import React, { Component } from 'react'
import apiUtils from '../api/api.utils';
import { Link } from "react-router-dom"
import ButtonDelete from './ButtonDelete';

class ListAdminToDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            admin: {},
            check: false,
        };
    }

    componentDidMount = () =>{
        this.LoadAdminList()
    };

    LoadAdminList = async () => {
        try {
            const adminsList = await apiUtils.getAdmin();
            console.log(adminsList)
            this.setState({
                admins: adminsList
            });
        } catch (error) {
            console.error(error)
        }
    };

    getAdminToDelete = async (index) => {
        try {
            this.setState({
                admin: this.state.admins[index],
                check: true
            })
        } catch (error) {
            console.error(error)
        }
    };

    deleteAdmin = async () => {
        try {
            console.log(this.state.admin)
            const admin = await apiUtils.adminToDelete(this.state.admin._id);
            this.setState({
                check: false
            })
            this.LoadAdminList();
        } catch (error) {
            console.error(error)
        }
    }



    render() {
        return (
            <div>
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
            <div className="box ml-5 mr-5 is-flex is-flex-direction-column is-align-content-flex-start">
                <div>
        <p className="card-header-title is-size-4 has-text-info">
          Selecione o Administrador para Deletar 
          </p>
      </div>
      {this.state.admins.map((admin, index) => {
        return (
              
          <label key={admin._id} className="radio panel-block control ml-1">
                <input type="radio" name="horse" onChange={()=>this.getAdminToDelete(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {admin.name} </span>
              </label>
            );
          })}
          <Link to="/adminpainel"><button className="button is-fullwidth is-link mt-3" >Voltar</button></Link>
          
          

            <div>
          {this.state.check == true ? (
            <div><button className="button is-fullwidth is-danger mt-3" onClick={this.deleteAdmin}>Deletar Admininstrador</button></div>
            ):(
              <div></div>
              )}
              
                </div>
          </div>
          </div>
          </div>
                </div>
        )
    }
}

export default ListAdminToDelete
