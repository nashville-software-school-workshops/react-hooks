import React, { useState, useEffect } from 'react';

// This component shows detailed information about an image
// It will be lazy-loaded in the completed solution
function ImageDetails({ image, onClose }) {
  const [imageStats, setImageStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching additional image metadata
    const timer = setTimeout(() => {
      setImageStats({
        views: Math.floor(Math.random() * 10000),
        downloads: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 500),
        resolution: '2400 x 1600',
        format: 'JPEG',
        size: `${(Math.random() * 10).toFixed(1)} MB`
      });
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
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
            
            {loading ? (
              <div className="stats-loading">Loading image stats...</div>
            ) : (
              <div className="image-stats">
                <h3>Image Stats</h3>
                <ul>
                  <li><span>Views:</span> {imageStats.views.toLocaleString()}</li>
                  <li><span>Downloads:</span> {imageStats.downloads.toLocaleString()}</li>
                  <li><span>Likes:</span> {imageStats.likes.toLocaleString()}</li>
                  <li><span>Resolution:</span> {imageStats.resolution}</li>
                  <li><span>Format:</span> {imageStats.format}</li>
                  <li><span>File Size:</span> {imageStats.size}</li>
                </ul>
              </div>
            )}
            
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