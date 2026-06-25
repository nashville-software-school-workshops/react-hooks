import { Component } from 'react';

// Error Boundary component that catches errors in child components
class ErrorBoundary extends Component {
  
  state = { hasError: false };

  // Update state so the next render will show the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  //if error caught, log it
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;