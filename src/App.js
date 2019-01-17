import React, { Component } from 'react';
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
      histoyNumber: [{value: 5}, {value: 56}]
    }

  }

  addNumToCurrentTotal = (newTotal) => {
    this.setState({
      currentTotal: this.state.currentTotal + parseInt(newTotal.numberIn),
    })
  }

  addToHistoryList = (histoyNum) => {
    this.setState({
      histoyNumber: [...this.state.histoyNumber, histoyNum]
    });
      console.log('numb to add to history is: ', histoyNum);
    }
    
    
  

  render() {
    return (
      <div className="App">
        <Header />
        <EnterNumber addNumToCurrentTotal = {this.addNumToCurrentTotal} />
        <CurrentTotal currentTotal = {this.state.currentTotal} addToHistory= {this.addToHistoryList}/>
        <History addToHistoryList = {this.state.histoyNumber} />
      </div>
    );
  }
}

export default App;
