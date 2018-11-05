import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: '',
    }
  }
  handleEvent(value){
    this.setState({
      message: value
    })
  }
  render() {
    return (
      <div className="App">
      <input onChange={(e) => this.handleEvent(e.target.value)} type='text'/>
      <h2>{this.state.message}</h2>
      </div> 
    );
  }
}

export default App;
