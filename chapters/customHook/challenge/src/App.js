import { useState } from 'react';
import './App.css';

// TODO: Create a useCounter custom hook in a new file called useCounter.js
// It should manage the count state and return a reference to that state: count, and three functions to modify it: increment, decrement, and reset.
// Then update this component to import and use it instead of the logic below.
// Hint: most of what you're doing is cutting and pasting from this file into the new file.

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Custom Hook Counter</h1>
      </div>
      <div className="card">
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="btn-secondary" onClick={decrement}>−</button>
          <button className="btn-neutral" onClick={reset}>Reset</button>
          <button className="btn-primary" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
