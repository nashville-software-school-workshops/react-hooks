import React, { useState, useEffect } from 'react';

// This component provides filtering options for the image gallery
// It will be lazy-loaded in the completed solution
function SearchFilters() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Simulate fetching categories from an API
    const timer = setTimeout(() => {
      setCategories([
        { id: 'nature', name: 'Nature' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'travel', name: 'Travel' },
        { id: 'animals', name: 'Animals' },
        { id: 'people', name: 'People' },
        { id: 'food', name: 'Food & Drink' }
      ]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
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
        {loading ? (
          <div className="loading-categories">Loading categories...</div>
        ) : (
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
        )}
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