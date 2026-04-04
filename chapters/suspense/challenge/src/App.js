
// TODO: Import Suspense and lazy from React
import PostCard from './PostCard';
import UserCard from './UserCard';
import './App.css';

// TODO: Import lazy-loaded components using React.lazy() instead of importing them above
// Example: const LazyComponent = lazy(() => import('./Component'));

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

        {/* TODO: replace these with lazy loaded versions and wrap with Suspense component and LoadingSpinner as the fallback */}
        <UserCard name="Alice" title="Developer" />
        <UserCard name="Bob" title="Designer" />
        <UserCard name="Carol" title="Manager" />
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

        {/* TODO: Use lazy loaded components and wrap them in Suspense */}
        <PostCard title="First Post" excerpt="This is the first post excerpt" />
        <PostCard title="Second Post" excerpt="This is the second post excerpt" />
      </div>
    </div>
  );
}
