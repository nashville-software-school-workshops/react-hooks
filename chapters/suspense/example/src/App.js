import React, { Suspense, lazy, useState } from 'react';
import './App.css';

// Lazy-loaded component (code splitting example)
const HeavyComponent = lazy(() => {
  // Simulate a delay to show loading state
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./HeavyComponent'));
    }, 2000);
  });
});

// Suspense-compatible data fetching
// This is a simple implementation for demonstration purposes
function fetchData(url) {
  const cache = fetchData.cache || (fetchData.cache = new Map());
  
  if (cache.has(url)) {
    const result = cache.get(url);
    if (result.status === 'error') throw result.error;
    if (result.status === 'success') return result.data;
    throw result.promise;
  }
  
  const result = {
    status: 'pending',
    promise: new Promise((resolve, reject) => {
      // Simulate API call with delay
      setTimeout(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            result.status = 'success';
            result.data = data;
            resolve(data);
          })
          .catch(error => {
            result.status = 'error';
            result.error = error;
            reject(error);
          });
      }, 1500);
    })
  };
  
  cache.set(url, result);
  throw result.promise;
}

// Resource that uses the suspense-compatible fetcher
const userResource = {
  read() {
    return fetchData('https://jsonplaceholder.typicode.com/users/1');
  }
};

// Component that suspends while fetching data
function UserProfile() {
  const user = userResource.read();
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

// Loading fallback for data fetching
function ProfileSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-header"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
}

// Main App component
export default function App() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  
  return (
    <div className="app">
      <h1>React Suspense Examples</h1>
      
      <section className="example-section">
        <h2>Example 1: Code Splitting with Suspense</h2>
        <p>
          Click the button below to load a heavy component. 
          Suspense will show a loading spinner while it loads.
        </p>
        
        <button 
          onClick={() => setShowHeavyComponent(true)}
          disabled={showHeavyComponent}
        >
          Load Heavy Component
        </button>
        
        {showHeavyComponent && (
          <Suspense fallback={<div className="loading">Loading heavy component...</div>}>
            <HeavyComponent />
          </Suspense>
        )}
      </section>
      
      <section className="example-section">
        <h2>Example 2: Data Fetching with Suspense</h2>
        <p>
          Click the button to load user data. 
          Suspense will show a skeleton UI while data is loading.
        </p>
        
        <button 
          onClick={() => setShowUserProfile(true)}
          disabled={showUserProfile}
        >
          Load User Profile
        </button>
        
        {showUserProfile && (
          <Suspense fallback={<ProfileSkeleton />}>
            <UserProfile />
          </Suspense>
        )}
      </section>
      
      <div className="note">
        <h3>Note:</h3>
        <p>
          The data fetching approach shown here is for demonstration purposes.
          In real applications, you would use a library like React Query, SWR, 
          or the upcoming React Server Components that support Suspense for data fetching.
        </p>
      </div>
    </div>
  );
}