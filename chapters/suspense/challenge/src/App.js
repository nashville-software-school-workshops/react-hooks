import './App.css';

// TODO: Import Suspense and lazy from React

// TODO: Create lazy-loaded components using React.lazy()
// Example: const LazyUserCard = lazy(() => import('./UserCard'));

// TODO: Create a LoadingSpinner component
// Show a simple loading message while components are being loaded

export default function App() {
  return (
    <div className="app">
      <h1>Suspense Exercise</h1>

      <div className="section">
        <h2>Lazy-Loaded Components</h2>
        <p>These components below are lazy-loaded. Look for the loading state while they're downloading.</p>

        {/* TODO: Wrap lazy components with Suspense boundary and fallback */}
        {/*
        <Suspense fallback={<LoadingSpinner />}>
          <LazyUserCard name="Alice" title="Developer" />
          <LazyUserCard name="Bob" title="Designer" />
          <LazyUserCard name="Carol" title="Manager" />
        </Suspense>
        */}
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

        {/* TODO: Add another Suspense boundary with different components */}
        {/*
        <Suspense fallback={<LoadingSpinner />}>
          <LazyPostCard title="First Post" />
        </Suspense>
        */}
      </div>
    </div>
  );
}
