import React, { Component } from 'react'
import apiUtils from "../api/api.utils";

const initialState = {
    name: "",
    age: "",
    affiliation: "",
    color: "",
    breed: "",
    behavior: "",
    imageUrl: "",
    register: ""
};

class HorseRegister extends Component {
    state = initialState

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default HorseRegister
