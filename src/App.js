import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Api from './api/api.utils'
import 'bulma/css/bulma.css'
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./components/Home";


class App extends Component {

    render() {

    
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component= {Home}/>      
          <Route exact path='/profile' component= {Profile}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
