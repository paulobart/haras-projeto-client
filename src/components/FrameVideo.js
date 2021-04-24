import React, { Component } from 'react';
import apiUtils from '../api/api.utils';

class FrameVideo extends Component {
    render(){
        return (
            <div>
            <figure className="image is-16by9">
                <iframe className="has-ratio" width="640" height="360" src={this.props.url} frameborder="0" allowfullscreen></iframe>
            </figure>
            </div>
        )
    }
}
export default FrameVideo
