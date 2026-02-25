import { useState, useTransition } from 'react';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleChangeWithTransition = (e) => {
    const value = e.target.value;
    setInput(value);
    startTransition( () => {
      // simulate a slow rendering process
      const arrayOfData = [];
      for (let i=0; i<20000; i++){
        arrayOfData.push(value);
      }
      setOutput(arrayOfData);
    });
  };


  return (
    <>
      <h2>With Transition</h2>
      <input value={input} onChange={handleChangeWithTransition} />
      {isPending ? 
        <p>'Loading...'</p> 
      : 
        <p>{output.map(o => <span>{o} </span>)}</p>}
    </>
  );
}