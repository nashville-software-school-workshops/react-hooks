import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  console.log('App rendered');

  const [name, setName] = useState("");
  const [previousName, setPreviousName] = useState("");  
  const inputElement = useRef(null);  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); 

  useEffect(() => {
    console.log('  📝 useEffect: updating previousName to', name);
    setPreviousName(name);  // Triggers re-render!
  }, [name]);

  useEffect(() => {
    if (inputElement.current) {
      console.log('  📐 useEffect: measuring dimensions');
      setDimensions({
        width: inputElement.current.offsetWidth,
        height: inputElement.current.offsetHeight
      });  // Triggers re-render!
    }
  }, []);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div className="App">
      <h2>Using State (causes unnecessary re-renders)</h2>
      <input
        value={name}
        onChange={e => {
          console.log('Input changed to:', e.target.value);
          setName(e.target.value);
        }}
        ref={inputElement}
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
      <div>
        Current Value:
        <br />
        <b>{name}</b>
      </div>
      <div>
        Previous Value:
        <br />
        <b>{previousName}</b>
      </div>
      <div>
        Dimensions:
        <br />
        <b>Width: {dimensions.width}px, Height: {dimensions.height}px</b>
      </div>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Open DevTools Console to see re-render logs. Notice extra renders when previousName and dimensions update.
      </p>
    </div>
  );
}

export default App;
