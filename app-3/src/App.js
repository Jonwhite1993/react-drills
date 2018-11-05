import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      food: ['rice','beans','pizza','burger','sushi'],
      filteredFood: '',
    }
  }  
  handleEvent(value){
    this.setState({
      filteredFood: value
    })
  }
  render() {
    let mappedFood = this.state.food.filter((e,i) => {
      return e.includes(this.state.filteredFood)
    }).map((e,i) => {
      return (
        <div key={i}><h2>{e}</h2></div>
      )
    })
    return (
      <div className="App">
      <input onChange={(e) => this.handleEvent(e.target.value)} type='text'/>
      {mappedFood}
      </div>
    );
  }
}

export default App;
