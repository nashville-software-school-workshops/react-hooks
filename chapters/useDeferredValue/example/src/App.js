import { useState, useDeferredValue, useMemo } from 'react';

export default function App({ data }) {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  // Simulate a slow list by blocking the thread during filtering
  const slowList = useMemo(() => {
    const filteredData = data.filter(item => item.includes(deferredText));

    // Artificially slow down rendering to make the deferral visible
    let i = 0;
    while (i < 200_000_000) i++;

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
      <div style={{ opacity: text !== deferredText ? 0.4 : 1, transition: 'opacity 0.2s' }}>
        {slowList}
      </div>
    </>
  );
}