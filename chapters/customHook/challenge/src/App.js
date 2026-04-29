import { useState } from 'react';
import './App.css';

// TODO: Create a useCounter custom hook in a new file called useCounter.js
// It should manage the count state and return count, increment, decrement, and reset.
// Then update this component to use it instead of the logic below.

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
