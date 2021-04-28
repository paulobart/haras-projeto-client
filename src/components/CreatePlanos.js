import React, { Component } from "react";
import apiUtils from "../api/api.utils";

class CreatePlanos extends Component {

    state = {
        planos:"",
        descricao:"",
        price:"",
        dayUse:"",
        foto:"",
        video:"",
       
    }
handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleInputRadio = (event) => {
    
    const { name, defaultValue } = event.target;
    this.setState({
      [name]: defaultValue,
    });
  };
   handleInputSelect = (event) => {
    console.log(event.target.value)
    
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

    handleSubmit = async (event) => {
    event.preventDefault();
    try {
       const payload = {
            name: this.state.planos,
            descricao:this.state.descricao,
            price: this.state.price,
            foto: this.state.foto,
            video: this.state.video,
            dayUse: this.state.dayUse
        }
      await apiUtils.createPlan(payload)
 
    } catch (error) {
     console.log(error)
    }
  }
  render() {
    return (
      <div className=" box container columns is-fluid is-flex ml-6 mt-6" style={{width: "95%"}}>
            <div className=" column is-7 card mr-1 ml-1" style= {{marginTop: 35}}>
                <div className="is-flex">
                    <span className="mt-1 has-text-info has-text-weight-semibold">Tipo de Plano:</span>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos" value="Mensal" onChange={this.handleInputRadio}/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Mensal </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos" value="Bimestral" onChange={this.handleInputRadio}/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Bimestral </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos" value="Semestral" onChange={this.handleInputRadio}/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Semestral </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos" value="Anual" onChange={this.handleInputRadio}/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Anual </span>
                    </label>
                </div>
                <div className="mt-3 is-flex">
                         <span className="mt-2 has-text-info has-text-weight-semibold">Tipo de Plano:</span>
                        <label className="radio panel-block control">
                             <input type="radio" name="planos"/>
                            <span className="has-text-info has-text-weight-semibold ml-3"> Personalizado: </span>
                            <input className="ml-3" type="text" placeholder="EX: semanal" name="planos" value={this.state.planos} onChange={this.handleInput}/>
                        </label>
                </div>
                <div className="mt-3 is-flex">
                        <textarea
                            className=" mt-4 textarea is-link has-fixed-size " rows="3"  name ="descricao" placeholder="Descrição" value={this.state.descricao} onChange={this.handleInput}>
                        </textarea>
                </div>
                <div className="mt-3 is-flex">
                <span className="has-text-info has-text-weight-semibold "> Valor: </span>
                        <input className=" ml-3" type="text" placeholder="R$25,00" name="price" value={this.state.price} onChange={this.handleInput}/>
                </div>
                <div className="mt-3 is-flex">
                         <span className="mt-1 has-text-info has-text-weight-semibold ">Beneficios</span>
                </div>
                <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold  "> Day Use Mensal: </span>
                            <div className="select is-info ml-2" >
                                <select name="dayUse" value={this.state.dayUse} onChange={this.handleInputSelect}> 
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    
                                </select>
                            </div>
                               <span className="ml-2">Dias</span>
                </div>
                <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold  "> Foto: </span>
                            <div className="select is-info ml-2">
                                <select class="select is-info ml-2" name="foto" value={this.state.foto} onChange={this.handleInputSelect}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                            </div>
                               <span className="ml-2">Foto</span>
                </div>
                <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold "> Video: </span>
                            <div className="select is-info ml-2">
                                <select className="has-text-info has-text-weight-semibold" name="video" value={this.state.video} onChange={this.handleInputSelect}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                            </div>
                               <span className="ml-2">Video</span>
                </div>
                
                   <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold  "> Personalizado: </span>
                            <span className="has-text-info has-text-weight-semibold  ml-2" > Dia: </span>
                            <input className="ml-3" type="text" placeholder="EX: semanal" name="dayUse" value={this.state.dayUse} onChange={this.handleInput}/>
                            <span className="has-text-info has-text-weight-semibold ml-2 "> Foto: </span>
                            <input className="ml-3" type="text" placeholder="EX: semanal" name="foto" value={this.state.foto} onChange={this.handleInput}/>
                             <span className="has-text-info has-text-weight-semibold ml-2 "> Video: </span>
                            <input className="ml-3" type="text" placeholder="EX: semanal" name="video" value={this.state.video} onChange={this.handleInput}/>
                </div> 
                <button className="button is-fullwidth is-info mt-3" onClick={this.handleSubmit} >Criar Planos</button>
                 
            </div>

            <div className="mt-5 mr-6 ml-6 column is-4">
            <div className=" is-flex is-justify-content-space-around">
                <div className="column  card">
                <header className="card-header has-background-info">
                    <p className="card-header-title has-text-white">{this.state.planos}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                    {this.state.descricao}
                    <br/>
                    <br/>
                    <strong className="has-text-info">Valor</strong>
                    <p>R$ {this.state.valor} </p>
                    <strong className="has-text-info">Benefícios</strong>
                    <div><span className="has-text-info">✔</span> {this.state.dayUse} day use por mês</div>
                    <div><span className="has-text-info">✔</span> {this.state.foto} Foto diária</div>
                    <div><span className="has-text-info">✔</span> {this.state.video} Vídeo semanal</div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item has-text-info">
                    Comprar Agora!
                    </a>
                </footer>
                </div>
            </div>
            </div>

        </div>
    
    );
  }
}

export default CreatePlanos;