import React, { Component } from "react";
import apiUtils from "../api/api.utils";


class UploadMidia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            horses: [],
            horse: {},
            check: false,
            newImage:"",
            imagemFile: "",
            imagem:""
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

getHorseToSendMidia = (index) => {
       this.setState({
       horse: this.state.horses[index],
       check: true
    })
 
}

handleMidia = async (event) => {
    event.preventDefault()
    try {
        const midiaType = this.state.imagemFile.type.split('/')[0]
        console.log(midiaType)
        if (midiaType == "video"){
            
            await apiUtils.sendVideo(this.state.horse._id, this.state.imagemFile)
            
        }else { 
            await apiUtils.sendImg(this.state.horse._id, this.state.imagemFile)

        }
        this.loadHorseList();
        
    } catch (error) {
        console.error(error)
    }
};


handleChangeFile = (event) => {
    console.log(event.target.files[0])
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
      <div className="box container is-fullhd ml-6 mt-6">
        <div className="2 paineis columns" >
          <div className="painel inf-admin column mt-4 " >
          <div className="box info-admin column" style={{marginTop: -12}}>
              <div className="foto-admin">
                <div className="imagem-header">
                  <figure className="image is-128x128">
                  <img src= {this.props.user.imageUrl} alt="Image"/>
                  </figure>
                </div>
              </div>
              <div className="dados-admin"></div>
              <p className="card-header card-header-title is-size-4 has-text-info"> Name: {this.props.user.name}
              </p>
              <p className="card-header card-header-title is-size-6 has-text-info"> E-mail: {this.props.user.email}
              </p>
              <p className="card-header card-header-title is-size-6 has-text-info"> Telefone: {this.props.user.phone}
              </p>
            </div>
          </div>
          <div className="painel upload column is-8">
          <div className="lista de sponsor" >
            <div className="box mt-1 mr-5 is-flex is-flex-direction-column is-align-content-flex-start">
                <div>
        <p className="card-header-title is-size-4 has-text-info">
          Selecione o Cavalo para enviar a mídia 
          </p>
      </div>
      {this.state.horses.map((horse, index) => {
        return (
              
              <label key={horse._id} className="radio panel-block control ml-1">
                <input type="radio" name="horse" onChange={()=>this.getHorseToSendMidia(index)}/>
                <span className="has-text-info has-text-weight-semibold ml-3"> {horse.name} </span>
              </label>
            );
          })}

          {this.state.check == true ? (
            <div></div>
            
          ):(
            <div></div>
          )}

          </div>
            </div>
            <div className="painel botoes is-flex mt-5 notification" style={{marginRight:"3%"}} >
            <div className="column is-4 imagem-perfil" style={{marginLeft:"35%"}}>
            <div className="notification is-fluid" style={{paddingRight:"10%"}} >
              <div className="file is-info is-boxed has-name">
                <label className="file-label">
                  <input className="file-input" type="file" name="imagem" onChange={this.handleChangeFile}/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label ">Imagem para perfil</span>
                  </span>
                  <span className="file-name">{this.state.imagemFile.name}</span>
                </label>
              </div>
            </div>
          </div>
           </div>
              <button className="button is-fullwidth is-info" onClick={this.handleMidia} style={{width: "97%"}}>
            <p>Enviar Mídia</p>
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadMidia;
