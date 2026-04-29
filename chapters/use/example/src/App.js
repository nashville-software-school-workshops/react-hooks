import React, { useState, createContext, use } from 'react';

// Simulate a data fetching function that returns a Promise
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
    }, 2000);
  });
}


// Create a context with a default value
const UserContext = createContext();

function UserContextProvider({ children }) {
  const [username, setUsername] = useState('Alice');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

function SuspenseFallback() {
  return (
    <div className="profile-container">Loading user data...</div>
  );
}

// Component that uses Context with the use hook
function UserGreeting() {

  const { username, setUsername } = use(UserContext);
  
  return (
    <>
      <section className="input-container">
        <label>Change username:</label>
        <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
      </section>

      <div className="greeting-container">
        <h2>Example 1: Using Context</h2>
        <p>Hello, {username}!</p>
      </div>
    </>
  );
}



// Component that uses a Promise with the use hook
function UserProfile({ userPromise }) {
  // Use the Promise directly with the use hook. This will suspend the component until the Promise resolves
  const userData = use(userPromise);
  
  return (
    <div className="profile-container">
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default function App() {

  //this re-runs on render, which re-triggers the load state
  const userPromise = fetchUserData();

  return (
    <UserContextProvider>
      <div className="app-container">
        <h1>React use Hook Example</h1>

          <UserGreeting />

          {/* Suspense handles the loading state while the Promise resolves */}
          <React.Suspense fallback={<SuspenseFallback/>}>
            <UserProfile userPromise={userPromise} />
          </React.Suspense>

      </div>
    </UserContextProvider>
  );
}