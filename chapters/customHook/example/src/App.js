import { useState } from 'react';
import './App.css';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

export default function App() {
  const [isVisible, toggleVisible] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className={`app-container ${theme}`}>
      <div className={`header ${theme}`}>
        <h1>Custom Hook Toggle</h1>
        <button className={`theme-toggle ${theme}`} onClick={toggleDarkMode}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className={`card ${theme}`}>
        <div className="toggle-section">
          <button className="btn-primary" onClick={toggleVisible}>
            {isVisible ? 'Hide' : 'Show'} Message
          </button>
          {isVisible && <p className="message">Hello! I'm visible now.</p>}
        </div>
      </div>
    </div>
  );
}
