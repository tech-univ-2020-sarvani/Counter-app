/* eslint-disable react/prefer-stateless-function */
/*  eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */

import React from 'react';
import './index.css';

class Counter extends React.Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div>
        {counter === 10 && <p>Yaayy party!</p>}
        <div className="counter">
          <button className="button" onClick={increment}>+</button>
          <div>
            {counter}
          </div>
          <button className="button" onClick={decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
