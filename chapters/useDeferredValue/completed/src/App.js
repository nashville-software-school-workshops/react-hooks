import { useState, useDeferredValue, useMemo } from 'react'

// Simulated slow component to show the benefit of useDeferredValue
function SlowList({ searchQuery }) {
  // Create a large array of items for demonstration
  const items = useMemo(() => {
    const result = []
    for (let i = 0; i < 10000; i++) {
      result.push(`Item ${i + 1}`)
    }
    return result
  }, [])

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    // Artificial delay to simulate slow rendering
    const startTime = performance.now()
    while (performance.now() - startTime < 100) {
      // Simulate heavy computation
    }

    return items.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [items, searchQuery])

  return (
    <ul style={{ 
      height: '400px', 
      overflowY: 'auto',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '4px'
    }}>
      {filteredItems.map(item => (
        <li 
          key={item}
          style={{
            padding: '8px',
            borderBottom: '1px solid #eee',
            backgroundColor: item.toLowerCase().includes(searchQuery.toLowerCase()) 
              ? '#e6f3ff' 
              : 'transparent'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showDeferred, setShowDeferred] = useState(true)
  
  // Create deferred value for search query
  const deferredQuery = useDeferredValue(searchQuery)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const toggleMode = () => {
    setShowDeferred(prev => !prev)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>useDeferredValue Demo</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Understanding useDeferredValue in this example:</h3>
        <ul>
          <li>Type in the search box and notice the difference between modes</li>
          <li>Deferred mode keeps the UI responsive during heavy filtering</li>
          <li>Non-deferred mode might feel sluggish during typing</li>
          <li>The list updates are deferred to avoid blocking the input</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={toggleMode}
          style={{
            padding: '8px 16px',
            backgroundColor: showDeferred ? '#28a745' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showDeferred ? 'Using Deferred Value' : 'Not Using Deferred Value'}
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items..."
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          Search query: {searchQuery}
          {showDeferred && (
            <>
              <br />
              Deferred query: {deferredQuery}
              {deferredQuery !== searchQuery && ' (updating...)'}
            </>
          )}
        </p>
      </div>

      <SlowList searchQuery={showDeferred ? deferredQuery : searchQuery} />

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontStyle: 'italic' }}>
          Note: This example includes artificial delays to simulate heavy computations.
          Try typing quickly to see the difference between deferred and non-deferred modes.
        </p>
      </div>
    </div>
  )
}

export default App
