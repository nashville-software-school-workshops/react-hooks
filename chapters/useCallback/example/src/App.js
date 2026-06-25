import { useCallback, useState, memo } from 'react';

// Child component wrapped with React.memo
const Button = memo(function Button({ onClick, label }) {
  console.log(`${label} button rendered`);
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Memoize the increment function with useCallback
  const increment = () => {
    setCount(c => c + 1);
  }; // The function never changes because it has no dependencies

  // This function will be recreated on every render
  const updateOtherState = () => {
    setOtherState(s => s + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Other State: {otherState}</p>
      
      {/* This button will only re-render when increment changes */}
      <Button onClick={increment} label="Increment" />
      
      {/* This button will re-render on every parent render */}
      <Button onClick={updateOtherState} label="Update Other" />
    </div>
  );
}