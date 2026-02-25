import React, { useState } from "react";


function ExpensiveChild({ number }) {
  console.log("ExpensiveChild rendered");

  // Simulate expensive work
  const start = performance.now();
  while (performance.now() - start < 1000) {} // 50ms block

  return <div>Number: {number}</div>;
}



const ExpensiveChildMemoized = React.memo(function ExpensiveChild({ number }) {
  console.log("ExpensiveChild rendered");

  const start = performance.now();
  while (performance.now() - start < 1000) {}

  return <div>Number: {number}</div>;
});


export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Increment Number
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <ExpensiveChildMemoized number={count} />
    </div>
  );
}