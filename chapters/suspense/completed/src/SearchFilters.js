import React, { useState } from 'react';

// Suspense-compatible data fetching utility (same as in App.js)
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

// Create a resource for fetching categories
const categoriesResource = wrapPromise(
  new Promise((resolve) => {
    // Simulate API call to fetch categories
    setTimeout(() => {
      resolve([
        { id: 'nature', name: 'Nature' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'travel', name: 'Travel' },
        { id: 'animals', name: 'Animals' },
        { id: 'people', name: 'People' },
        { id: 'food', name: 'Food & Drink' }
      ]);
    }, 1500);
  })
);

// This component provides filtering options for the image gallery
// It uses Suspense for data fetching
function SearchFilters() {
  // Read from the categories resource
  const categories = categoriesResource.read();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="search-filters">
      <h2>Filter Images</h2>
      
      <div className="filter-section">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Search by title or photographer"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-section">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h3>Additional Filters</h3>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> High Resolution Only
          </label>
          <label>
            <input type="checkbox" /> Free to Use
          </label>
          <label>
            <input type="checkbox" /> Portrait Orientation
          </label>
        </div>
      </div>
      
      <button className="apply-filters">Apply Filters</button>
    </div>
  );
}

export default SearchFilters;