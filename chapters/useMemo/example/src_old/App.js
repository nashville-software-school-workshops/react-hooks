import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);

  // an expensive calculation
  const doCalculation = () => {
    console.log('Calculating result...');

    //generate an array
    const array = [];
    for (let i=0; i<100000; i++){
      array.push(i);
    }
    //reverse it a couple times
    array.sort((a, b) => a - b);
    array.sort((a, b) => a - b);
    
    //linear search to find the input value
    let output =0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == input) {
        output = i;
      }
    }
    return output
  }

  const expensiveValue = doCalculation();

  return (
    <div>
      <p>Input (int):</p>
      <input onChange={(e) => setInput(parseInt(e.target.value))}/>      <p>Count: {count}</p>
      <p>Output: {expensiveValue}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
    </div>
  );
}