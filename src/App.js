import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './page/login/login';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Home from "./page/home/index.jsx"

const RootRouter = ()=>{
  return(
    <Router>
      <div style={{height:"100%"}}>
       <Route path="/" exact component={Login}/>
       <Route path="/home" component={Home}/>
      </div>

  </Router>
  )

}

class App extends Component {
  render() {
    return (
      <RootRouter/>
    );
  }
}

export default App;
