import React, { Component } from "react";

class CreatePlanos extends Component {
  render() {
    return (
      <div className=" box container columns  is-flex ml-6 mt-6">
            <div className=" column is-7 card  mt-6 mr-1 ml-1">
                <div className="is-flex">
                    <span className="mt-1 has-text-info has-text-weight-semibold">Tipo de Plano:</span>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos"/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Mensal </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos"/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Bimestral </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos"/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Semestral </span>
                    </label>
                    <label className="radio panel-block control">
                        <input type="radio" name="planos"/>
                        <span className="has-text-info has-text-weight-semibold ml-3"> Anual </span>
                    </label>
                </div>
                <div className="mt-3 is-flex">
                         <span className="mt-2 has-text-info has-text-weight-semibold">Tipo de Plano:</span>
                        <label className="radio panel-block control">
                            <input type="radio" name="personalizado"/>
                            <span className="has-text-info has-text-weight-semibold ml-3"> Personalizado: </span>
                            <input className="ml-3" type="text" name="personalizado"placeholder="EX: semanal"/>
                        </label>
                </div>
                <div className="mt-3 is-flex">
                        <textarea
                            className=" mt-4 textarea is-link has-fixed-size " rows="6"  name ="descricao" placeholder="Descrição">
                        </textarea>
                </div>
                <div className="mt-3 is-flex">
                        <input className=" " type="text" name="valor"placeholder="R$25,00"/>
                </div>
                <div className="mt-3 is-flex">
                         <span className="mt-1 has-text-info has-text-weight-semibold ">Beneficios</span>
                </div>
                <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold  "> Day Use Mensal: </span>
                            <div class="select is-info ml-2">
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                               <span className="ml-2">Dias</span>
                </div>
                <div className="mt-3 is-flex">
                         <span className="has-text-info has-text-weight-semibold  "> Foto: </span>
                            <div class="select is-info ml-2">
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                               <span className="ml-2">Foto</span>
                </div>
                
                <div className="mt-3 is-flex">
                         <br/>
                         <span className="has-text-info has-text-weight-semibold  "> Video: </span>
                          <input className="ml-3" type="text" name="video" placeholder="EX: video.mp4"/> <span className="ml-2">Video</span>
                </div>

                 <div className="mt-3 is-flex">
                         <br/>
                         <span className="has-text-info has-text-weight-semibold  "> Personalizado: </span>
                         <input className="ml-3" type="text" name="dayUse"placeholder="EX: 3"/> <span className="ml-2">Dias</span>
                          <input className="ml-3" type="text" name="foto"placeholder="EX: foto.jpg"/> <span className="ml-2">Fotos</span>
                         <input className="ml-3" type="text" name="video" placeholder="EX: video.mp4"/> <span className="ml-2">Video</span>
                </div>
            </div>

            <div className="mt-6 mr-6 ml-6 column is-4">
            <div className=" is-flex is-justify-content-space-around">
                <div className="column  card">
                <header className="card-header has-background-info">
                    <p className="card-header-title has-text-white">Mensal</p>
                </header>
                <div className="card-content">
                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <br/>
                    <br/>
                    <strong className="has-text-info">Valor</strong>
                    <p>R$250,00</p>
                    <strong className="has-text-info">Benefícios</strong>
                    <div><span className="has-text-info">✔</span> 1 day use por mês</div>
                    <div><span className="has-text-info">✔</span> 1 Foto diária</div>
                    <div><span className="has-text-info">✔</span> 1 Vídeo semanal</div>
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