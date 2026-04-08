import React, { Component, useState } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Used to render a fallback UI after an error
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // Used to log error information
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <p>The error has been logged and we're working on it!</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

// Component that will throw an error
function BuggyCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    // Simulate a JavaScript error
    throw new Error('I crashed when count exceeded 5!');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Main App component
export default function App() {
  return (
    <div className="app">
      <h1>Error Boundary Example</h1>
      
      <div className="safe-component">
        <h2>This component is outside the Error Boundary</h2>
        <p>It will continue to work even if other components crash</p>
      </div>

      <ErrorBoundary>
        <div className="buggy-component">
          <h2>This component is inside an Error Boundary</h2>
          <p>Try clicking the button until count exceeds 5</p>
          <BuggyCounter />
        </div>
      </ErrorBoundary>
    </div>
  );
}