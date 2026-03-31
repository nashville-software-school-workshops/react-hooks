import { useRef, useEffect,  } from 'react';

export default function App() {
  const intervalId = useRef(0);
  const inputElement1 = useRef(null);
  const inputElement2 = useRef(null);
  const whichElement = useRef(1);

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      if (whichElement.current === 1) {
        inputElement2.current.focus();
        whichElement.current = 2;
      } else {
        inputElement1.current.focus();
        whichElement.current = 1;
      }
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    startInterval();
    return () => { stopInterval(); };
  }, []);

  return (
    <>
      <input type="text" ref={inputElement1} /> 
      <input type="text" ref={inputElement2} />
    </>
  );
}
