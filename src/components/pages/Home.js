import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

class Home extends Component {
  state = {
    loading: true,
    hasError: true,
  };
  render() {
    const spinner = this.state.loading ? <Spinner /> : null;
    const isError = this.state.hasError ? <ErrorIndicator /> : null;
    return (
      <div>
        <h2>Home</h2>
        {spinner}
        {isError}
      </div>
    );
  }
}

export default Home;
