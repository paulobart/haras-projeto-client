import React, { Component } from "react";
import apiUtils from '../api/api.utils';



class Planos extends Component {
  state = {
    plans:[],
    horse_id:this.props.match.params.id,
    message:""
    
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

  handleApadrinhar = async (idPlan) =>{
    try {
      console.log(this.props.user.id)
      const payload={
        horse_id: this.state.horse_id,
        plans_id: idPlan ,
        sponsor_id:this.props.user.id
      }
      console.log(payload)
     const tosponsor = await apiUtils.apadrinhar(payload);
     this.setState({
      message: "Cavalo Apadrinhado com sucesso.",
    });
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
                
                <button className="card-footer-item has-text-white button is-info" onClick={ ()=> this.handleApadrinhar(plan._id)} style={{width: "100%"}}> 
                Comprar Agora!
          </button>
              </footer>
              </div>
            );
          })}
            </div>
          <p className="has-text-info">{this.state.message}</p>
          </div>
      </div>
    );
  }
}

export default Planos;