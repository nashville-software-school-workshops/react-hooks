import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';




// Component that throws an error
function BrokenComponent() {
  throw new Error('This component has an error!');
}

// Component that works fine
function WorkingComponent() {
  return (
    <div className="component-box">
      <h3>Working Component</h3>
      <p>This component renders without errors.</p>
    </div>
  );
}



export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback/>}>
      <div className="app">

        <h1>Error Boundary Example</h1>

        <div className="section">
          <h2>Working Component (No Error Boundary)</h2>
          <WorkingComponent />
        </div>

        <div className="section">
          <h2>Broken Component (With Error Boundary)</h2>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <BrokenComponent />
          </ErrorBoundary>
        </div>

        <div className="section">
          <ErrorBoundary fallback={<ErrorFallback />}>
            <h2>Another Working Component</h2>
            <WorkingComponent />
          </ErrorBoundary>
        </div>

      </div>
    </ErrorBoundary>
  );
}
