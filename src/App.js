import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';
import History from './components/History.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentTotal: 0,
    }
  }

  addNumToCurrentTotal = (newTotal) => {
    
    this.setState({
      currentTotal: this.state.currentTotal + parseInt(newTotal.numberIn),
    })
    console.log('current total:', this.state.currentTotal);
    
  }

  addToHistoryList = (histoyNum) => {

  }

  

  
  render() {
    return (
      <div className="App">
        <Header />
        <EnterNumber addNumToCurrentTotal = {this.addNumToCurrentTotal} />
        <CurrentTotal currentTotal = {this.state.currentTotal} />
        <History sendCurrentTotal = {this.props.sendTotal} />
      </div>
    );
  }
}

export default App;
