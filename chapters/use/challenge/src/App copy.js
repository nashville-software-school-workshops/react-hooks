import { useState, createContext, Suspense, use } from 'react';
import './App.css';


////////// Simulate a data fetching functions that returns a Promise for each
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


/////// Create a theme context and provider
const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({ color: 'light' });

  const toggleTheme = () => {
    setTheme(prevTheme => ({ color: prevTheme.color === 'light' ? 'dark' : 'light' }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


///////// Child components that employ the use hook for context and a promise
function Header() {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <header className={`header ${theme.color}`}>
      <h1>use Hook Challenge</h1>
      <button
        onClick={toggleTheme}
        className={`theme-toggle ${theme.color}`}
      >
        Switch to {theme.color === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

function UserProfile({ userPromise }) {
  const { theme } = use(ThemeContext);
  const userData = use(userPromise);

  return (
    <div className={`profile-container ${theme.color}`}>
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
    </div>
  );
}

function PostList({ postsPromise }) {
  const { theme } = use(ThemeContext);
  const posts = use(postsPromise);

  return (
    <div className={`posts-container ${theme.color}`}>
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

//fetch data and create promises for the App to pass to children
const userPromise = fetchUserData();
const postsPromise = userPromise.then(userData => fetchUserPosts(userData.id));

export default function App() {
  return (
    <ThemeContextProvider>
      <div className={`app-container`}>
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
    </ThemeContextProvider>
  );
}
