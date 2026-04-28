import { Component } from 'react';

// Error Boundary component that catches errors in child components
class ErrorBoundary extends Component {

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  reset = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.reset);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;