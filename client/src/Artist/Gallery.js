import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageOff } from 'lucide-react'; // Icon for no artworks
import './Gallery.css'; // Your custom styles

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null); // For full-screen modal

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/art');
        setArtworks(response.data);
      } catch (err) {
        setError('Failed to fetch artworks');
        console.error('Error fetching artworks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const handleArtworkClick = (art) => {
    setSelectedArtwork(art);
  };

  const closeFullScreen = () => {
    setSelectedArtwork(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div> {/* Your loading spinner */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="gallery-body">
      <h1 className="virtual-tour-title">Art Gallery</h1>
      
      <div className="gallery-container">
        {artworks.length === 0 ? (
          <div className="no-artworks">
            <ImageOff className="no-artworks-icon" />
            <p>No artworks found</p>
          </div>
        ) : (
          artworks.map((art) => (
            <div
              key={art.id}
              className="swiper-slide"
              onClick={() => handleArtworkClick(art)}
            >
              <div className="artwork-image-container">
                <img
                  src={`http://localhost:8081/api/art/image/${art.fileName}`}
                  alt={art.artistName}
                  className="artwork-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/path/to/placeholder-image.jpg'; // Fallback image
                  }}
                />
              </div>
              <div className="artwork-details">
                <h3 className="artwork-title">{art.artistName}</h3>
                {art.year && (
                  <p className="artwork-year">Year: {art.year}</p>
                )}
                {art.description && (
                  <p className="artwork-description">{art.description}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {selectedArtwork && (
        <div className="full-screen-container">
          <button className="close-button" onClick={closeFullScreen}>
            &times;
          </button>
          <div className="full-screen-left">
            <img
              src={`http://localhost:8081/api/art/image/${selectedArtwork.fileName}`}
              alt={selectedArtwork.artistName}
              className="full-screen-image"
            />
          </div>
          <div className="full-screen-right">
            <h2>{selectedArtwork.artistName}</h2>
            {selectedArtwork.year && (
              <p><strong>Year:</strong> {selectedArtwork.year}</p>
            )}
            {selectedArtwork.description && (
              <p><strong>Description:</strong> {selectedArtwork.description}</p>
            )}
            <a href="#" className="animated-button">Learn More</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
