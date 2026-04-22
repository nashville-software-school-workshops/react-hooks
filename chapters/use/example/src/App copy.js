import React, { useState, createContext, Suspense } from 'react';
import './App.css';

// TODO: Create a theme context
// const ThemeContext = ...

// Simulate a data fetching function that returns a Promise for user data
function fetchUserData() {
  // TODO: Implement this function to return a Promise that resolves with user data
  // The Promise should resolve with an object containing id, name, and email
}

// Simulate a data fetching function that returns a Promise for user posts
function fetchUserPosts(userId) {
  // TODO: Implement this function to return a Promise that resolves with an array of posts
  // The Promise should resolve with an array of post objects, each with id, title, and content
}

// Header component with theme toggle
function Header() {
  // TODO: Use the theme context to get the current theme and toggle function
  const theme = 'light'; // Replace with context usage
  const toggleTheme = () => {}; // Replace with context usage
  
  return (
    <header className={`header ${theme}`}>
      <h1>use Hook Challenge</h1>
      <button 
        onClick={toggleTheme}
        className={`theme-toggle ${theme}`}
      >
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

// User Profile component that uses the theme context and user data
function UserProfile({ userPromise }) {
  // TODO: Use the theme context to get the current theme
  const theme = 'light'; // Replace with use hook
  
  // TODO: Use the userPromise with the use hook to get the user data
  // const userData = ...
  
  // Placeholder data until you implement the use hook
  const userData = { name: 'Loading...', email: 'loading@example.com' };
  
  return (
    <div className={`profile-container ${theme}`}>
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}

// Post List component that conditionally uses the posts promise
function PostList({ userPromise, isLoggedIn }) {
  // TODO: Use the theme context to get the current theme
  const theme = 'light'; // Replace with use hook
  
  // TODO: Conditionally use the userPromise to get the user ID
  // and then fetch and display posts only if the user is logged in
  
  // Placeholder data until you implement the use hook
  const posts = [
    { id: 1, title: 'Loading...', content: 'Loading post content...' }
  ];
  
  return (
    <div className={`posts-container ${theme}`}>
      <h2>User Posts</h2>
      {isLoggedIn ? (
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Please log in to view posts</p>
      )}
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };
  
  // Create the user data promise
  const userPromise = fetchUserData();
  
  return (
    // TODO: Wrap the app with the ThemeContext.Provider
    <div className={`app-container ${theme}`}>
      <Header />
      
      <button 
        onClick={toggleLogin}
        className={`login-toggle ${theme}`}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      
      <div className="content-container">
        <Suspense fallback={<div className="loading">Loading user data...</div>}>
          <UserProfile userPromise={userPromise} />
        </Suspense>
        
        <Suspense fallback={<div className="loading">Loading posts...</div>}>
          <PostList userPromise={userPromise} isLoggedIn={isLoggedIn} />
        </Suspense>
      </div>
    </div>
  );
}