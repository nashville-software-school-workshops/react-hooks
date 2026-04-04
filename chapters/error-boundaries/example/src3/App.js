import { useState } from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

// Component that always throws an error
function BrokenComponent({isBroken}) {
  if (!isBroken){
    return (
      <div className="component-box">
        <h3>Broken Component ...working</h3>
        <p>This component sometimes breaks.</p>
      </div>
    )
  }
  else throw new Error('This component has an error!');
}

export default function App() {
  const [isBroken, setIsBroken] = useState(true);

  return (
    <div className="app">
      <h1>Error Boundary Example</h1>

      <div className="section">
        <h2>Broken Component (With Error Boundary)</h2>
        <ErrorBoundary
          FallbackComponent={ErrorFallback} // This is the UI to display when an error is caught. It will receive props: error and resetErrorBoundary
          resetKeys={[isBroken]} // Array of values that trigger a reset when they change
          onReset={() => setIsBroken(false)} //Callback function called when user clicks retry
        >
          {<BrokenComponent isBroken={isBroken} />} 
        </ErrorBoundary>
      </div>
    </div>
  );
}
