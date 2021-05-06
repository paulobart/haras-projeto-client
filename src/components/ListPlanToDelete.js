import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import UpdatePlan from "./UpdatePlan";
import { Link } from "react-router-dom"
import ButtonDelete from "./ButtonDelete";

class ListPlanToDelete extends Component {

    state = {
        plan:"",
        plans:[],
        check: false,
    }

componentDidMount = ()=>{
    this.getListPlan();
}

getListPlan = async ()=>{
    try {
        const plansList = await apiUtils.listPlan()
        this.setState({
            plans: plansList,
        })
    } catch (error) {
        console.error(error)
    }
}

getPlanToEdit = async (index) => {
    
    try {
        this.setState({
            plan: this.state.plans[index],
            check: true,
        })
    } catch (error) {
        console.error(error)
    }
}

deletePlan = async () => {
  try {
      const horse = await apiUtils.planToDelete(this.state.plan._id);
      this.setState({
          check: false
      })
      this.getListPlan();
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
        <div className="box ml-4 mr-2 is-flex is-flex-direction-column is-align-content-flex-start">
        <p className="card-header-title is-size-4 has-text-info">
          Selecione um plano para Deletar 
          </p>
              {this.state.plans.map((plan, index) => {
        return (
              
              <label key={plan._id} className="radio panel-block control ml-1">
                <input type="radio" name="plan" onChange={()=>this.getPlanToEdit(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {plan.name} </span>
              </label>
            );
          })}
          <Link to="/adminpainel"><button className="button is-fullwidth is-link mt-3" >Voltar</button></Link>
            
           {this.state.check == true ? (
            <div><button className="button is-fullwidth is-danger mt-3" onClick={this.deletePlan}>Deletar Plano</button></div>
          ):(
            <div></div>
          )}
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default ListPlanToDelete;