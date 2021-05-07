import React, { Component } from "react";
import headerImg from "../assets/header.jpg";



class ImageHeader extends Component {

uploadImage = async () => {
    try {
        
    } catch (error) {
        
    }
}



    render() {
    return (
      <div>
        <div className="imagem-header">
          <figure className="image is-3by1">
            <img src={headerImg} alt="header" />
          </figure>
        </div>
      </div>
    );
  }
}

export default ImageHeader;
