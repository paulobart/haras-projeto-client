import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import SponsoredHorses from "./SponsoredHorses";


class ListSponsoredHorses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "6071bd1245e7b01c9dc7de92",
      sponsoredHorses: [],
      horse: "",
      check: false
    };
  }

  componentDidMount = () => {
    this.getSponsoredHorses();
  };

  getSponsoredHorses = async () => {
    try {
      const horseProfile = await apiUtils.getSponsoredHorses(this.state.id);
      const horseProfileTemp = horseProfile.refPlanHorse_id;
      this.setState({
        sponsoredHorses: horseProfileTemp,
      });

    } catch (error) {
      console.error(error);
    }
  };
  
  getSponsoredHorse = async (index) => {
    console.log(this.state.sponsoredHorses[index].horse_id)
    try {
      
      this.setState({
        horse: this.state.sponsoredHorses[index].horse_id,
        check: true
      });
      console.log(this.state.horse);
    } catch (error) {}
  };

  render() {
    return (
      
      <div className="box is-flex is-flex-direction-column is-align-content-flex-start">
      {this.state.sponsoredHorses.map((horse, index) => {
        return (
              
              <label key={horse.id} className="radio panel-block control">
                <input type="radio" name="horse" onChange={()=>this.getSponsoredHorse(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {horse.horse_id.name} </span>
              </label>
            );
          })}

          {this.state.check == true ? (
            <div><SponsoredHorses horse={this.state.horse}/></div>
            
          ):(
            <div></div>
          )}

          </div>
              
     );
    }
}

export default ListSponsoredHorses;
