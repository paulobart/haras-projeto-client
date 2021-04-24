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
import HorseList from "./components/HorseList";
import ListSponsoredHorses from "./components/ListSponsoredHorses";
import AdminPanel from "./components/AdminPanel";



class App extends Component {

  state = {
    user: "",
  }

  handleUser = async (userLogado) => {
    try {
      this.setState({
        user: userLogado
      })
    } catch (error) {
      console.error(error)
    }
    
  }

    render() {

    
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/login' render= {(props) => <Login {...props} user={this.handleUser}/>}/>
          <Route exact path='/signup' component= {Signup}/>      
          <Route exact path='/profile' render = {(props) => <Profile {...props} user = {this.state.user}/>}/>
          <Route exact path='/getMessage' component= {Mensagem}/>
          <Route exact path='/planos' component= {Planos}/>
          <Route exact path='/cavalos' component= {HorseList}/>
          <Route exact path='/listacavalosapadrinhados' component= {ListSponsoredHorses}/>
          <Route exact path='/admin' component= {AdminPanel}/>

        </Switch>
        
      </div>
    );
  }
}

export default App;
