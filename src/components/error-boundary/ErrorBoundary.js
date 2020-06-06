import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/ErrorIndicator';

class ErrorBoundary extends Component {
  state = {
    hasError: true,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
