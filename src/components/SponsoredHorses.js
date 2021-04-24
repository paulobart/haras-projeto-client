import React, { Component } from 'react'

class SponsoredHorses extends Component {

    render() {
        return (
            <div>
              <div className="mt-6 columns" style={{ width: "100%" }}>
                <form className="box column is-10 is-offset-1">
                <article className="media">
                    <div className="media-left mt-2">
                    <figure className="image is-128x128">
                        <img src={this.props.horse.imageUrl}/>
                    </figure>
                    </div>
                    <div className="column is-10">
                    <p className="card-header card-header-title is-size-4 has-text-info"> Nome: {this.props.horse.name} </p>
                    <p className="card-header card-header-title"> Idade: {this.props.horse.age} </p>
                    <p className="card-header card-header-title"> Raça: {this.props.horse.breed} </p>
                    <p className="card-header card-header-title"> Cor: {this.props.horse.color} </p>
                    <p className="card-header card-header-title"> Filiação: {this.props.horse.affiliation} </p>
                    <p className="card-header card-header-title"> Comportamento: {this.props.horse.behavior} </p>
                    <button name="Reserva" onClick={this.props.namePage} className=" button is-link mt-2 " style={{width: "100%"}}>
                    Reserva
                    </button>
                    </div>
          </article>
        </form>
      </div>
    </div>
        )
    }
}

export default SponsoredHorses
