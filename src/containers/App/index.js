/* eslint-disable react/prefer-stateless-function */
/*  eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from '../../components/Login';
import Counter from '../../components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isLoggedIn: false,
    };
  }

  increment = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1,
    });
  }

  decrement = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter - 1,
    });
  }

  logIn = () => {
    this.setState({
      ...this.state,
      isLoggedIn: true,
    });
  }

  render() {
    return (
      this.state.isLoggedIn === true
        ? <Counter increment={this.increment} decrement={this.decrement} counter={this.state.counter} />
        : <Login onClick={this.logIn} />
    );
  }
}

export default App;
