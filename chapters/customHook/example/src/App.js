import './App.css';
import { useToggle } from './useToggle';

export default function App() {
  const [isVisible, toggleVisible] = useToggle();
  const [isDarkMode, toggleDarkMode] = useToggle();

  const theme = isDarkMode ? 'dark' : 'light';
  return (
    <div className={`app-container ${theme}`}>
      <div className={`header ${theme}`}>
        <h1>Custom Hook Toggle</h1>
        <button className={`theme-toggle ${theme}`} onClick={toggleDarkMode}>
          Switch to {theme} mode
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
