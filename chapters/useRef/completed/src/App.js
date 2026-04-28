import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const previousName = useRef("");
  const inputElement = useRef(null);
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  useEffect(() => {
    if (inputElement.current) {
      dimensions.current = {
        width: inputElement.current.offsetWidth,
        height: inputElement.current.offsetHeight
      };
    }
  }, []);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div className="App">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputElement}
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
        <b>{previousName.current}</b>
      </div>
      <div>
        Dimensions:
        <br />
        <b>Width: {dimensions.current.width}px, Height: {dimensions.current.height}px</b>
      </div>
    </div>
  );
}

export default App;
