import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Api from './api/api.utils'
import 'bulma/css/bulma.css'
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Mensagem from "./components/Mensagem";
import Planos from "./components/Planos";


class App extends Component {

    render() {

    
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/login' component= {Login}/>
          <Route exact path='/signup' component= {Signup}/>      
          <Route exact path='/profile' component= {Profile}/>
          <Route exact path='/getMessage' component= {Mensagem}/>
          <Route exact path='/planos' component= {Planos}/>
        
        </Switch>
        
      </div>
    );
  }
}

export default App;
