import React, { Component } from 'react';
import OrderOperations from './containers/order_operations';
import {getOrderService} from './services/order_service';
import Rate from './containers/rate';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.makeBuyOrder = this.makeBuyOrder.bind(this);
    this.service = getOrderService("localhost:5000");
    this.state = {
      rate: 7
    }
  }

  makeBuyOrder({count, price}) {
    this.service.sendBuyOrder({count, price}).then(()=>{
      alert('Great!')
    }, (err)=>{
      alert(err);
    })
  }
  makeSellOrder({count, price}) {
    this.service.sendSellOrder({count, price});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          <OrderOperations buyOrder={this.makeBuyOrder}/>
        </p>
        <div>
          <Rate rate={this.state.rate}/>
        </div>
      </div>
    );
  }
}

export default App;
