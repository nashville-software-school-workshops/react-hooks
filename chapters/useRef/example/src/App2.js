import { useRef, useEffect } from 'react';

export default function App() {
  const inputElement = useRef(null);

  useEffect(() => {
    // Focus the input element on mount
    inputElement.current.focus();
  }, []);

  return (
    <input type="text" ref={inputElement} />
  );
}