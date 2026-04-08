import React, { Suspense, lazy, useState, use } from 'react';
import './App.css';

// Use React.lazy to lazy-load components
const ImageDetails = lazy(() => import('./ImageDetails'));
const SearchFilters = lazy(() => import('./SearchFilters'));

// Image data
const images = [
  {
    id: 1,
    title: 'Mountain Landscape',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format',
    photographer: 'John Smith',
    description: 'Beautiful mountain landscape with snow-capped peaks.'
  },
  {
    id: 2,
    title: 'Beach Sunset',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format',
    photographer: 'Sarah Johnson',
    description: 'Stunning sunset view at a tropical beach.'
  },
  {
    id: 3,
    title: 'City Skyline',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format',
    photographer: 'Michael Brown',
    description: 'Modern city skyline with tall skyscrapers at night.'
  },
  {
    id: 4,
    title: 'Forest Path',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format',
    photographer: 'Emily Davis',
    description: 'Serene path through a dense forest with sunlight filtering through the trees.'
  },
  {
    id: 5,
    title: 'Desert Dunes',
    url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&auto=format',
    photographer: 'David Wilson',
    description: 'Golden sand dunes in a vast desert landscape.'
  },
  {
    id: 6,
    title: 'Waterfall',
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format',
    photographer: 'Jessica Martinez',
    description: 'Powerful waterfall cascading down rocky cliffs.'
  }
];

// Simple function to load an image and return a promise
function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Add a small delay to demonstrate loading state
      setTimeout(() => resolve(src), 1000);
    };
  });
}

// Image component that uses Suspense
function SuspenseImage({ image, onClick }) {
  // The use hook will suspend while the promise is pending
  const src = use(loadImage(image.url));

  return (
    <div className="image-card" onClick={onClick}>
      <img src={src} alt={image.title} />
      <h3>{image.title}</h3>
      <p>By {image.photographer}</p>
    </div>
  );
}

// Fallback UI for image loading
function ImageSkeleton() {
  return (
    <div className="image-skeleton">
      <div className="image-skeleton-img"></div>
      <div className="image-skeleton-title"></div>
      <div className="image-skeleton-text"></div>
    </div>
  );
}

// Fallback UI for filters loading
function FiltersSkeleton() {
  return (
    <div className="loading-fallback">
      <div className="loading-spinner"></div>
      <h3>Loading Filters</h3>
      <p>Please wait while we load the search filters...</p>
    </div>
  );
}

// Fallback UI for image details loading
function DetailsSkeleton() {
  return (
    <div className="image-details-overlay">
      <div className="image-details">
        <div className="loading-fallback">
          <div className="loading-spinner"></div>
          <h3>Loading Image Details</h3>
          <p>Please wait while we load the detailed information...</p>
        </div>
      </div>
    </div>
  );
}

// Main App component
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  return (
    <div className="app">
      <header>
        <h1>Image Gallery</h1>
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </header>
      
      {/* Wrap SearchFilters with Suspense */}
      {showFilters && (
        <Suspense fallback={<FiltersSkeleton />}>
          <SearchFilters />
        </Suspense>
      )}
      
      <main>
        {/* Outer Suspense for the entire gallery */}
        <Suspense fallback={
          <div className="image-gallery">
            {Array(6).fill().map((_, index) => (
              <ImageSkeleton key={index} />
            ))}
          </div>
        }>
          <div className="image-gallery">
            {images.map(image => (
              /* Inner Suspense for individual images */
              <Suspense key={image.id} fallback={<ImageSkeleton />}>
                <SuspenseImage 
                  image={image} 
                  onClick={() => handleImageClick(image)} 
                />
              </Suspense>
            ))}
          </div>
        </Suspense>
        
        {/* Wrap ImageDetails with Suspense */}
        {selectedImage && (
          <Suspense fallback={<DetailsSkeleton />}>
            <ImageDetails 
              image={selectedImage} 
              onClose={() => setSelectedImage(null)} 
            />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default App;