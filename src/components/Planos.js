import React, { Component } from "react";
import apiUtils from '../api/api.utils';


class Planos extends Component {
  state = {
    plans:[],
    
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
  render() {
    return (
      <div>
        <div className="">
          <div className="box is-flex is-justify-content-space-around ">
        {this.state.plans.map((plan) => {
        return (
            <div className="mt-6 mr-1 ml-1 is-2 card">
              <header className="card-header has-background-info">
                <p className="card-header-title has-text-white">{plan.name}</p>
              </header>
              <div className="card-content">
                <div className="content is-2">
                  {plan.description}
                  <br/>
                  <br/>
                  <strong className="has-text-info">Valor</strong>
                  <p>{plan.price}</p>
                  <strong className="has-text-info">Benefícios</strong>
                  <div><span className="has-text-info">✔</span> {plan.dayUse} day use por mês</div>
                  <div><span className="has-text-info">✔</span> {plan.foto} Foto diária</div>
                  <div><span className="has-text-info">✔</span> {plan.video} Vídeo semanal</div>
                </div>
              </div>
              <footer className="card-footer is-1">
                <a href="#" className="card-footer-item has-text-info">
                  Comprar Agora!
                </a>
              </footer>
              </div>
            );
          })}
            </div>
          </div>
      </div>
    );
  }
}

export default Planos;