import React, { useState, useEffect } from 'react';

// This component simulates a heavy component that takes time to load
// In a real app, this might be a complex chart, rich text editor, etc.
export default function HeavyComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Simulate loading some data after component mounts
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 5; i++) {
        newData.push({
          id: i,
          name: `Item ${i + 1}`,
          value: Math.floor(Math.random() * 100)
        });
      }
      setData(newData);
    };
    
    generateData();
  }, []);
  
  return (
    <div className="heavy-component">
      <h3>Heavy Component Loaded!</h3>
      <p>This component was loaded lazily with React.lazy() and Suspense.</p>
      
      <div className="data-table">
        <h4>Sample Data:</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="visualization">
        {data.map(item => (
          <div 
            key={item.id} 
            className="bar" 
            style={{ 
              width: `${item.value}%`,
              backgroundColor: `hsl(${item.value * 2}, 70%, 60%)`
            }}
          >
            {item.value}%
          </div>
        ))}
      </div>
    </div>
  );
}