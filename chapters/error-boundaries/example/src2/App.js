import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';



// Component that throws an error... sometimes
function SporadicComponent() {
  const works = Math.random()>.7;
  
  if (works) return (
    <div className="component-box">
      <h3>Broken Component ...working</h3>
      <p>This component sometimes breaks.</p>
    </div>
  )
  else throw new Error('This component has an error!');
}


export default function App() {
  return (
      <div className="app">

        <h1>Error Boundary Example</h1>

        <div className="section">
          <h2>Broken Component (With Error Boundary)</h2>
          <ErrorBoundary fallback={(reset) => <ErrorFallback reset={reset} />}>
            <SporadicComponent />
          </ErrorBoundary>
        </div>

      </div>
  );
}
