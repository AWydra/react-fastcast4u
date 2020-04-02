import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: {}, error: {} };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, info, error });
  }

  render() {
    const { hasError, info, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{error.message}</p>
          <p>{info.componentStack}</p>
        </>
      );
    }
    return children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorHandler;
