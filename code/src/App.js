import './App.css';
import useCounter from './useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

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
