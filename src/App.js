import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Api from './api/api.utils'
import 'bulma/css/bulma.css'
import Login from "./components/Login";
import Navbar from "./components/Navbar";


class App extends Component {

    render() {

    
    return (
      <div className="App">
        <Navbar/>        
        <Login/>
        
      </div>
    );
  }
}

export default App;
