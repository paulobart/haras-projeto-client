import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import UpdatePlan from "./UpdatePlan";

class ListUpdatePlanos extends Component {

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


   
  
  render() {
    return (
        <div>
        <div className="box ml-6 mt-6 mr-5 is-flex is-flex-direction-column is-align-content-flex-start">
        <p className="card-header-title is-size-4 has-text-info">
          Selecione um plano para editar 
          </p>
              {this.state.plans.map((plan, index) => {
        return (
              
              <label key={plan._id} className="radio panel-block control">
                <input type="radio" name="plan" onChange={()=>this.getPlanToEdit(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {plan.name} </span>
              </label>
            );
          })}
           {this.state.check == true ? (
            <div><UpdatePlan plan={this.state.plan} getListPlan={this.getListPlan} /></div>
            
          ):(
            <div></div>
          )}
        </div>

        </div>
    );
  }
}

export default ListUpdatePlanos;