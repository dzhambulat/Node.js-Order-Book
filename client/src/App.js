import React, { Component } from 'react';
import OrderOperations from './containers/order_operations';
import Rate from './containers/rate';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      rate: 7
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          <OrderOperations/>
        </p>
        <div>
          <Rate rate={this.state.rate}/>
        </div>
      </div>
    );
  }
}

export default App;
