import './App.css';
import ItemList from './ItemList';
import {ErrorBoundary} from "react-error-boundary";
import { useState } from 'react';
import { brokenItems, workingItems } from './itemData.js';
import ErrorFallback from './ErrorFallback';

export default function App() {

  const [items, setItems] = useState(brokenItems)

  return (
    <div className="app">

      <div className="header">
          <h1>Error Boundary Exercise</h1>
      </div>

      <div className="section">
        <h2>Items:</h2>

        {/* 
        TODO: Wrap this component in an ErrorBoundary component with 3 props:
          FallbackComponent: the ErrorFallback that we import
          resetKeys: an array containing just items
          onReset: an anonymous function to set items to workingItems
        */}
          <ItemList items={items} />

          
      </div>

      <div className="section">
        <h2>Footer</h2>
        <p>This section is unaffected by the error above</p>
      </div>

    </div>
  );
}
