import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import sponsorImg from "../assets/sponsor.jpg";
import adminImg from "../assets/admin.jpg";
import {Events, animateScroll as scroll} from 'react-scroll'

class AdminConversation extends Component {

  constructor(props) {
    super(props);
     this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      sponsors: [], 
      sponsor:"",
      check:false,
      id: "606fb9144356bf0877c1ff74",
      message: [],
      bodyMessage:""
    };
  }

  componentDidMount = () => {
    this.getSponsor();
    this.getInfo();
  }

  getSponsor = async () => {
    try {
        console.log("getsponsor")
      const sponsorDB = await apiUtils.listSponsor();
      console.log(sponsorDB)
      this.setState({
        sponsors: sponsorDB
      })
      
    } catch (error) {
      console.error(error)
    }
  }
  getSponsorEdit = (index) => {
       this.setState({
       sponsor: this.state.sponsors[index],
       check: true,
       id:this.state.sponsors[index]._id
    })
    
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
 
  getInfo = async () => {
    try {
      const message = await apiUtils.getMessage(this.state.id);
      const copyMessage = message.message_id;
      this.setState({
        message: copyMessage,
      });
    
    } catch (error) {
      console.error(error);
    }
  };
  handleSubimitMessage = async () =>{
    try {
      const payload ={
        bodyMessage: this.state.bodyMessage,
        author: "sponsor",
        sponsor_id: this.state.id
      }
      console.log(this.state.message)
       await apiUtils.sendMessage(payload);
      this.getInfo();
    } catch (error) {
      console.error(error);
    }
  }
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }; 

 


  render() {
    return (
       <div className="geral container is-fullhd ">
             <div className="box info-admin is-flex " >
                <div> 
                    <div className="foto-admin ">
                        <div className="imagem-header">
                            <figure className="image is-128x128">
                                <img src={adminImg} />
                            </figure>
                        </div>
                    </div>
                    <div className="dados-admin"></div>
                        <p className="card-header card-header-title is-size-4 has-text-info"></p>
                        <p className="card-header card-header-title is-size-6 has-text-info"> E-mail:</p>
                        <p className="card-header card-header-title is-size-6 has-text-info"> Telefone:</p>
                    </div>
                    <div style={{marginLeft: "50%"}}>
                        <div className="box is-flex is-flex-direction-column is-align-content-flex-start">
                            <div>
                                <p className="card-header-title is-size-12 has-text-info">Enviar Mensagem</p>
                            </div>
      
                            {this.state.sponsors.map((sponsor, index)=> {
                                return (
                                <label key={sponsor._id} className="radio panel-block control">
                                    <input type="radio" name="sposnor" onChange={()=>this.getSponsorEdit(index)}/>
                                    <span className="has-text-info has-text-weight-semibold ml-3"> {sponsor.name} </span>
                                </label>
                                );
                            })}
                        </div>
                    </div> 
                <div className="box " >
            <div className=" is-flex is-flex-direction-column" style={{width: "100%", height: "120vh", overflow: "auto"}}>
            {this.state.message.map(function (message) {
          return (
            <div className="">
              {message.author == "sponsor" ? (
                <div>
                  <figure className="media-left is-pulled-right">
                    <p className="image is-64x64 ">
                      <img src={sponsorImg} />
                    </p>
                  </figure>
                  <div className="media-content ">
                    <div className="content">
                      <p>
                      <br/>
                      <br/>
                      <br/>
                        <strong className=" is-pulled-right">{message.author}</strong>
                          <br/>
                       <div className="is-12 is-pulled-right is-family-sans-serif " > {message.bodyMessage}</div>
                        <br/>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <figure className="media-left ">
                    <p className="image is-64x64">
                      <img src={adminImg} />
                    </p>
                  </figure>
                  <div className="media">
                    <div className="content">
                      <p>
                        <strong className=" is-pulled-left">{message.author}</strong>
                        <br /> 
                        <div className=" is-pulled-left is-family-sans-serif">{message.bodyMessage}</div>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
            })}
         </div>
         <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={sponsorImg} />
            </p>
          </figure>
         
          <div className="media-content">
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea is-link has-fixed-size " rows="6" value={this.state.bodyMessage} name ="bodyMessage"
                  placeholder="Add a comment..." onChange={this.handleInput}
                ></textarea>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button  onClick={this.handleSubimitMessage}>Post comment</button>
              </p>
              <a onClick={this.scrollToTop}>To the top!</a>
            </div>
          </div>
         </article>
            </div>
                </div> 
            </div>
        );
    }
}

export default AdminConversation;