import { Suspense, lazy } from 'react';
import './App.css';

// Lazy-load components for code splitting
const LazyUserCard = lazy(() => import('./UserCard'));
const LazyPostCard = lazy(() => import('./PostCard'));

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
      <h1>Suspense Exercise</h1>

      <div className="section">
        <h2>Lazy-Loaded Components</h2>
        <p>These components below are lazy-loaded. Look for the loading state while they're downloading.</p>

        <Suspense fallback={<LoadingSpinner />}>
          <LazyUserCard name="Alice" title="Developer" />
          <LazyUserCard name="Bob" title="Designer" />
          <LazyUserCard name="Carol" title="Manager" />
        </Suspense>
      </div>

      <div className="section">
        <h2>Content That Loads Immediately</h2>
        <p>This section loads right away, not affected by the Suspense boundary above.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div className="section">
        <h2>Another Suspense Boundary</h2>
        <p>You can have multiple Suspense boundaries for different parts of the page.</p>

        <Suspense fallback={<LoadingSpinner />}>
          <LazyPostCard title="First Post" excerpt="This is the first post excerpt" />
          <LazyPostCard title="Second Post" excerpt="This is the second post excerpt" />
        </Suspense>
      </div>
    </div>
  );
}
