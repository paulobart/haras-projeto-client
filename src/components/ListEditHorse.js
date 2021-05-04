import React, { Component } from 'react'
import apiUtils from "../api/api.utils";
import EditHorse from './EditHorse';



class ListEditHorse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: [],
            horse: {},
            check: false,
            newImage:"",
            imagemFile: ""
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

getHorseToEdit = (index) => {
       this.setState({
       horse: this.state.horses[index],
       check: true
    })
 
}

handleEditHorse = async (event) => {
    event.preventDefault()
    try {
        //const {name, age, affiliation, color, breed, behavior} = this.state;
        
        await this.handleUpload()
        const { imagem } = this.state;
        const editedHorseTemp = {...this.state.horse}
        editedHorseTemp.imageUrl = imagem
        await apiUtils.editHorse(this.state.horse._id, editedHorseTemp);
        this.loadHorseList();
        
    } catch (error) {
        console.error(error)
    }
};


handleChangeFile = (event) => {
    this.setState({
        imagemFile: event.target.files[0]
    })
};

handleUpload = async (event) => {
    try {
        const imageUrl = await apiUtils.upload(this.state.imagemFile)
        this.setState({
            imagem: imageUrl
        })
        
    } catch (error) {
        console.error(error)            
    }
}


handleInput = (event) => {
    const { name, value } = event.target;
    const newHorseTemp = { ...this.state.horse }
    newHorseTemp[name] = value
    this.setState({
        horse: newHorseTemp,
    });
};




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
            <div className="box ml-5 mr-5 is-flex is-flex-direction-column is-align-content-flex-start">
                <div>
        <p className="card-header-title is-size-4 has-text-info">
          Selecione o Cavalo para editar 
          </p>
      </div>
      {this.state.horses.map((horse, index) => {
        return (
              
              <label key={horse._id} className="radio panel-block control ml-1">
                <input type="radio" name="horse" onChange={()=>this.getHorseToEdit(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {horse.name} </span>
              </label>
            );
          })}
          
          

          </div>
          </div>
          </div>
            <div>
          {this.state.check == true ? (
            <div><EditHorse horse={this.state.horse} editHorse={this.handleEditHorse} handleInput={this.handleInput} handleChangeFile={this.handleChangeFile} imagemFile={this.state.imagemFile}/></div>
            ):(
                <div></div>
                )}
                </div>
                </div>
        );
    }
}

export default ListEditHorse
