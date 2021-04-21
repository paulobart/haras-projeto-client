import React, { Component } from "react";
import apiUtils from "../api/api.utils";
import sponsorImg from "../assets/sponsor.jpg";
import adminImg from "../assets/admin.jpg";

class Mensagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "606fb9144356bf0877c1ff74",
      message: [],
      bodyMessage:""
    };
  }
  getInfo = async () => {
    try {
      const messageProfile = await apiUtils.getMessage(this.state.id);
      const copyMessageProfile = messageProfile.message_id;
      this.setState({
        message: copyMessageProfile,
      });
      console.log(this.state.message);
    } catch (error) {
      console.error(error);
    }
  };
  handleSubimitMessage = async () =>{
    try {
      const payload ={
        bodyMessage: this.state.bodyMessage,
        author: "sponsor"
      }
      
      const messageSponsorTo = await apiUtils.sendMessage(this.state.id,payload);
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
      <div>
        {this.state.message.map(function (message) {
          return (
            <div className="column is-4">
              {message.author == "sponsor" ? (
                <div>
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src={sponsorImg} />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{message.author}</strong>
                        <br /> {message.bodyMessage}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src={adminImg} />
                    </p>
                  </figure>
                  <div className="media">
                    <div className="content">
                      <p>
                        <strong>{message.author}</strong>
                        <br /> {message.bodyMessage}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="field">
              <p className="control">
                <textarea
                  className="textArea" value={this.state.bodyMessage} name ="bodyMessage"
                  placeholder="Add a comment..." onChange={this.handleInput}
                ></textarea>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button  onClick={this.handleSubimitMessage}>Post comment</button>
              </p>
            </div>
          </div>
        </article>
        <button onClick={this.getInfo}>Info Profile </button>
      </div>
    );
  }
}
export default Mensagem;
