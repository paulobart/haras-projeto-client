import React, { Component } from "react";
import apiUtils from "../api/api.utils";




class HorseList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      horses: []
    };
  }

  componentDidMount = () => {
    this.getHorse();
  }

  getHorse = async () => {
    try {
      const horseProfile = await apiUtils.getHorse();
      this.setState({
        horses: horseProfile
      })
      
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        {this.state.horses.map(function (horse) {
          return (
      <div className="mt-6 columns" style={{ width: "100%" }}>
        <form className="box column is-10 is-offset-1">
          <article className="media">
            <div className="media-left mt-2">
              <figure className="image is-128x128">
                <img src={horse.imageUrl}/>
              </figure>
            </div>
            <div className="column is-10">
              <p className="card-header card-header-title is-size-4 has-text-info"> Nome: {horse.name} </p>
              <p className="card-header card-header-title"> Idade: {horse.age} </p>
              <p className="card-header card-header-title"> Raça: {horse.breed} </p>
              <p className="card-header card-header-title"> Cor: {horse.color} </p>
              <p className="card-header card-header-title"> Filiação: {horse.affiliation} </p>
              <p className="card-header card-header-title"> Comportamento: {horse.behavior} </p>
              </div>
          </article>
        </form>
      </div>
          )
        })}
      </div>
    );
  }
}

export default HorseList;