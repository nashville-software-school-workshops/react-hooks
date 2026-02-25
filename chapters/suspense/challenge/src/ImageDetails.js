import React from 'react';

// TODO: Import the use hook from React
// import { use } from 'react';

// TODO: Implement this function to fetch image stats and return a promise
function fetchImageStats() {
  // Your implementation here
  // Should return a promise that resolves with an object containing:
  // - views (random number between 0 and 10000)
  // - downloads (random number between 0 and 1000)
  // - likes (random number between 0 and 500)
  // - resolution (string)
  // - format (string)
  // - size (string)
}

// This component shows detailed information about an image
function ImageDetails({ image, onClose }) {
  // TODO: Use the use hook with fetchImageStats to get image statistics
  // const imageStats = ...
  
  return (
    <div className="image-details-overlay">
      <div className="image-details">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="image-details-content">
          <div className="image-preview">
            <img src={image.url} alt={image.title} />
          </div>
          
          <div className="image-info">
            <h2>{image.title}</h2>
            <p className="photographer">By {image.photographer}</p>
            <p className="description">{image.description}</p>
            
            {/* TODO: Replace this placeholder with real stats from use hook */}
            <div className="image-stats">
              <h3>Image Stats</h3>
              <ul>
                <li><span>Views:</span> Loading...</li>
                <li><span>Downloads:</span> Loading...</li>
                <li><span>Likes:</span> Loading...</li>
                <li><span>Resolution:</span> Loading...</li>
                <li><span>Format:</span> Loading...</li>
                <li><span>File Size:</span> Loading...</li>
              </ul>
            </div>
            
            <div className="actions">
              <button className="action-button primary">Download</button>
              <button className="action-button">Like</button>
              <button className="action-button">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;