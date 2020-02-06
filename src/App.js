import React from 'react';
// import './App.css';

class Counter extends React.Component{
  state = { counter: 0 };
  increment = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    })
  }
  decrement = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter - 1
    })
  }
  render(){
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div>{ this.state.counter} </div>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter;
