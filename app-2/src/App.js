import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      names:['bob','jack','kevin','dankboi','steve'],
    }
  }
  render() {
    let mappedNames = this.state.names.map((e,i) => {
      return <div key={i}><h2>{e}</h2></div> 
    })
    return (
      <div className="App">
      {mappedNames}
      </div>
    );
  }
}

export default App;
