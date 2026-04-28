import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleChangeWithoutTransition = (e) => {
    const value = e.target.value;
    setInput(value);
    
    const arrayOfData = [];
    for (let i=0; i<20000; i++){
      arrayOfData.push(value);
    }
    setOutput(arrayOfData);
  };

  return (
    <>
      <h2>Without Transition</h2>
      <input value={input} onChange={handleChangeWithoutTransition} />
      
        <p>{output.map((o,i) => <span key={o+i}> {o} </span>)}</p>
    </>);
}