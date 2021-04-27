import React, { Component } from 'react'
import apiUtils from "../api/api.utils";
import EditHorse from './EditHorse';



class ListEditHorse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: [],
            horse: "",
            check: false
        };
      }

    componentDidMount = () => {
        this.loadHorseList();
    };  

loadHorseList = async () => {
    try {
        const horseList = await apiUtils.getHorse();
        console.log(horseList)
        this.setState({
            horses: horseList
        })
    } catch (error) {
        console.error(error)
    }
};

getHorseToEdit = async (index) => {
    
    try {
        this.setState({
            horse: this.state.horses[index],
            check: true
        })
        this.props.load();
        

    } catch (error) {
        console.error(error)
    }
}

    render() {
        return (
            <div className="box is-flex is-flex-direction-column is-align-content-flex-start">
      {this.state.horses.map((horse, index) => {
        return (
              
              <label key={horse._id} className="radio panel-block control">
                <input type="radio" name="horse" onChange={()=>this.getHorseToEdit(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {horse.name} </span>
              </label>
            );
          })}

          {this.state.check == true ? (
            <div><EditHorse horse={this.state.horse}/></div>
            
          ):(
            <div></div>
          )}

          </div>
        );
    }
}

export default ListEditHorse
