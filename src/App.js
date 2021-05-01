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
import CreatePlanos from "./components/CreatePlanos";
import AdminPanel from "./components/AdminPanel";
import HorseRegister from "./components/HorseRegister";
import ListEditHorse from "./components/ListEditHorse";
import AdminLogin from "./components/AdminLogin";
import CreateAdmin from "./components/CreateAdmin";
import ListUpdatePlanos from "./components/ListUpdatePlanos";
import EditHaras from "./components/EditHaras";
import UploadMidia from "./components/UploadMidia";

class App extends Component {

  state = {
    user: "",
    userAdm: ""
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

  handleUserAdm = async (admLogado) => {
    try {
      this.setState({
        userAdm: admLogado
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
          <Route path='/planos/' component= {Planos}/>
          <Route exact path='/cavalos' component= {HorseList}/>
          <Route exact path='/listacavalosapadrinhados' component= {ListSponsoredHorses}/>
          <Route exact path='/admin' render= {(props) => <AdminLogin {...props} userAdm ={this.handleUserAdm}/>}/>
          <Route exact path='/adminpainel' render = {(props) => <AdminPanel {...props} user = {this.state.userAdm}/>}/>
          <Route exact path='/admin/newhorse' component= {HorseRegister}/>
          <Route exact path='/admin/edithorse' component= {ListEditHorse}/>
          <Route exact path='/admin/criarplanos' component= {CreatePlanos}/>
          <Route exact path='/admin/editarplanos' component= {ListUpdatePlanos}/>
          <Route exact path='/admin/updateharas' render = {(props) => <EditHaras {...props} user = {this.state.userAdm}/>}/>
          <Route exact path='/admin/createAdmin' component= {CreateAdmin}/>
          <Route exact path='/admin/uploadmidia' render = {(props) => <UploadMidia {...props} user = {this.state.userAdm}/>}/>


        </Switch>
        
      </div>
    );
  }
}

export default App;
