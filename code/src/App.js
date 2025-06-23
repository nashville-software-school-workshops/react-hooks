import React, { useState, createContext, use } from 'react';
import './App.css';

// Create a context with a default value
const UserContext = createContext({ username: 'Guest' });

// Simulate a data fetching function that returns a Promise
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
    }, 1000);
  });
}

// Component that uses Context with the use hook
function UserGreeting() {
  // Use the Context directly with the use hook
  const { username } = use(UserContext);
  
  return (
    <div className="greeting-container">
      <h2>Hello, {username}!</h2>
      <p>Welcome to the use hook example.</p>
    </div>
  );
}

// Component that uses a Promise with the use hook
function UserProfile({ userPromise }) {
  // Use the Promise directly with the use hook
  // This will suspend the component until the Promise resolves
  const userData = use(userPromise);
  
  return (
    <div className="profile-container">
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

// Wrapper component that provides Suspense for the Promise-based component
function UserProfileWrapper() {
  // Create a Promise that will be used by the UserProfile component
  const userPromise = fetchUserData();
  
  return (
    <div className="profile-wrapper">
      {/* Suspense handles the loading state while the Promise resolves */}
      <React.Suspense fallback={<div>Loading user data...</div>}>
        <UserProfile userPromise={userPromise} />
      </React.Suspense>
    </div>
  );
}

export default function App() {
  const [username, setUsername] = useState('Alice');
  
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  
  return (
    <div className="app-container">
      <h1>React use Hook Example</h1>
      
      {/* Provide the context value */}
      <UserContext.Provider value={{ username }}>
        <div className="input-container">
          <label>
            Change username:
            <input 
              type="text" 
              value={username} 
              onChange={handleNameChange} 
            />
          </label>
        </div>
        
        {/* Example 1: Using Context with use hook */}
        <section className="example-section">
          <h2>Example 1: Using Context</h2>
          <UserGreeting />
        </section>
        
        {/* Example 2: Using Promise with use hook */}
        <section className="example-section">
          <h2>Example 2: Using Promise</h2>
          <UserProfileWrapper />
        </section>
      </UserContext.Provider>
    </div>
  );
}