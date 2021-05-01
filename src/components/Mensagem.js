import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import sponsorImg from "../assets/sponsor.jpg";
import adminImg from "../assets/admin.jpg";
import {Events, animateScroll as scroll} from 'react-scroll'

class Mensagem extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      id: props.user.id,
      message: [],
      bodyMessage:"",
      name: props.user.name
    };
  }
  componentDidMount = () =>{
    this.getInfo();

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
      const messageProfile = await apiUtils.getMessage(this.state.id);
      const copyMessageProfile = messageProfile.message_id;
      this.setState({
        message: copyMessageProfile,
      });
    
    } catch (error) {
      console.error(error);
    }
  };
  handleSubimitMessage = async () =>{
    try {
      const payload ={
        bodyMessage: this.state.bodyMessage,
        author: 'sponsor',
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
      <div className="box " >
      <div className=" is-flex is-flex-direction-column" style={{width: "100%", height: "70vh", overflow: "auto"}}>
        {this.state.message.map((message) => {
          return (
            <div className="">
              {message.author === 'sponsor' ? (
                <div>
                  <figure className="media-left is-pulled-right">
                    <p className="image is-64x64 ">
                      <img src={this.props.user.imageUrl} />
                    </p>
                  </figure>
                  <div className="media-content ">
                    <div className="content">
                      <p>
                      <br/>
                      <br/>
                      <br/>
                        <strong className=" is-pulled-right">{this.props.user.name}</strong>
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
                        <strong className=" is-pulled-left">Haras</strong>
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
    );
  }
}
export default Mensagem;
