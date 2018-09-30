import React, { Component } from 'react';
import Carousel from '../carousel/carsouel';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";

const RootRouter = ()=>{
  return(
    <Router>
      <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}>
       <Route path="/" exact component={Carousel}/>
       <Route path="/home" component={Carousel}/>
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
