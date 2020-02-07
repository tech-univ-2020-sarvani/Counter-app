/* eslint-disable react/prefer-stateless-function */
/*  eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */

import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Login</button>
    );
  }
}

export default Login;
