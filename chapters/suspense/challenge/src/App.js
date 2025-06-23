import React, { useState } from 'react';
import './App.css';

// TODO: Import React.lazy and Suspense
// import { Suspense, lazy } from 'react';

// TODO: Use React.lazy to import these components
import ImageDetails from './ImageDetails';
import SearchFilters from './SearchFilters';

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

// TODO: Create a suspense-compatible image loader
// This function should wrap a promise and return an object with a read() method
function wrapPromise(promise) {
  // Your implementation here
}

// TODO: Create an image resource that uses the wrapPromise pattern
// const createImageResource = (imageUrl) => {
//   const promise = new Promise((resolve) => {
//     const img = new Image();
//     img.src = imageUrl;
//     img.onload = () => {
//       setTimeout(() => {
//         resolve(imageUrl);
//       }, 1000 * Math.random()); // Random delay to simulate network variability
//     };
//   });
//
//   return wrapPromise(promise);
// };

// Image component that doesn't use Suspense yet
function Image({ image }) {
  return (
    <div className="image-card" onClick={() => {}}>
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
      <p>By {image.photographer}</p>
    </div>
  );
}

// TODO: Create a SuspenseImage component that uses the image resource
// function SuspenseImage({ image }) {
//   const imageResource = createImageResource(image.url);
//   const src = imageResource.read();
//
//   return (
//     <div className="image-card" onClick={() => {}}>
//       <img src={src} alt={image.title} />
//       <h3>{image.title}</h3>
//       <p>By {image.photographer}</p>
//     </div>
//   );
// }

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
      
      {/* TODO: Wrap with Suspense */}
      {showFilters && <SearchFilters />}
      
      <main>
        {/* TODO: Implement nested Suspense boundaries for the gallery */}
        <div className="image-gallery">
          {images.map(image => (
            <div key={image.id} onClick={() => handleImageClick(image)}>
              {/* TODO: Replace with SuspenseImage */}
              <Image image={image} />
            </div>
          ))}
        </div>
        
        {/* TODO: Wrap with Suspense */}
        {selectedImage && <ImageDetails image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </main>
    </div>
  );
}

export default App;