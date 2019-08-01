import React, { Component } from 'react';
import GetWeather from './getWeather';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const mystyle = {
      color: "black",
      backgroundColor: "lightgreen",
      padding: "10px",
      fontFamily: "Arial",
      textAlign : "center"
      
    };
    return(
      <div>
        
       <h2 style={mystyle}><strong>WEATHER BUDDY</strong></h2>
        <GetWeather />
      </div>
    )
  }
}

export default App;