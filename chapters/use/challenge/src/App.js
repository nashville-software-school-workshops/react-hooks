import React, { useState, createContext, Suspense, use } from 'react';
import './App.css';

// Create a theme context
const ThemeContext = createContext('light');

// Simulate a data fetching function that returns a Promise for user data
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
    }, 1000);
  });
}

// Simulate a data fetching function that returns a Promise for user posts
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Understanding the use Hook',
          content: 'The use hook is a powerful new addition to React that allows for more flexible resource consumption...'
        },
        {
          id: 2,
          title: 'Promises and React',
          content: 'Working with promises in React components has traditionally required useEffect and state...'
        },
        {
          id: 3,
          title: 'Conditional Hook Usage',
          content: 'Unlike traditional hooks, the use hook can be called conditionally, opening up new patterns...'
        }
      ]);
    }, 1500);
  });
}

// Header component with theme toggle
function Header() {
  // TODO: with use hook, instead get the current theme and toggle function from the context
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
  // TODO: With the use hook, get the current theme from context
  const theme = 'light';
  
  // TODO: Use the userPromise with the use hook to get the user data, instead of this hardcoded data
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

// Post List component that uses the posts promise
function PostList({ postsPromise }) {

  // TODO: with use hook, get the current theme from that context
  const theme = 'light'; // Replace with use hook
  
  // TODO: use the use hook and postsPromise then fetch and display posts, instead of this placeholder data
  const posts = [
    { id: 1, title: 'Loading...', content: 'Loading post content...' }
  ];
  
  return (
    <div className={`posts-container ${theme}`}>
      <h2>User Posts</h2>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const userPromise = fetchUserData();
const postsPromise = userPromise.then(userData => fetchUserPosts(userData.id));

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Create the theme context value
  const themeValue = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`app-container ${theme}`}>
        <Header />
        
        <div className="content-container">
          <Suspense fallback={<div className="loading">Loading user data...</div>}>
            <UserProfile userPromise={userPromise} />
          </Suspense>
          
          <Suspense fallback={<div className="loading">Loading posts...</div>}>
            <PostList postsPromise={postsPromise} />
          </Suspense>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}