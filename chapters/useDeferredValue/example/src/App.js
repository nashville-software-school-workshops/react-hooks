import { useState, useDeferredValue, useMemo } from 'react';

export default function App({ data }) {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  // Simulate a slow list
  const slowList = useMemo(() => {
    const filteredData = data.filter(item => item.includes(deferredText));
    return (
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }, [data, deferredText]);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {slowList}
    </>
  );
}