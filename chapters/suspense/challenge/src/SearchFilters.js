import React, { useState } from 'react';

// TODO: Import the use hook from React
// import { use } from 'react';

// TODO: Implement this function to fetch categories and return a promise
function fetchCategories() {
  // Your implementation here
  // Should return a promise that resolves with an array of categories:
  // [
  //   { id: 'nature', name: 'Nature' },
  //   { id: 'architecture', name: 'Architecture' },
  //   ...etc
  // ]
}

// This component provides filtering options for the image gallery
function SearchFilters() {
  // TODO: Use the use hook with fetchCategories to get the category list
  // const categories = ...
  
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
          {/* TODO: Replace this with mapped categories from use hook */}
          <option value="loading">Loading categories...</option>
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