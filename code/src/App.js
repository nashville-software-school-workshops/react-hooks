import { Suspense } from 'react';
import './App.css';
import Joke from './Joke';

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <p>Loading...</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>Suspense with Data Fetching</h1>

      <div className="section">
        <h2>Random Joke</h2>
        <p>The joke below is fetched from an API. Notice how other content loads while waiting for the joke data.</p>

        <Suspense fallback={<LoadingSpinner />}>
          <Joke />
        </Suspense>
      </div>

      <div className="section">
        <h2>Other Page Content</h2>
        <p>This section loads immediately, not waiting for the joke API to respond.</p>
        <ul>
          <li>This renders without waiting</li>
          <li>Suspense only affects components inside the boundary</li>
          <li>Everything else loads normally</li>
        </ul>
      </div>

      <div className="section">
        <h2>Why Suspense with Data Fetching?</h2>
        <p>
          Suspense provides a cleaner way to handle async data. Instead of managing loading states in each component,
          you declare what should show while data loads, and Suspense handles the rest.
        </p>
      </div>
    </div>
  );
}
