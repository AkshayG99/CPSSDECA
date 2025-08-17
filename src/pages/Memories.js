import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/info';
import './Memories.css';

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // Get all images from memories-photos folder - only web-compatible formats (JPG, JPEG)
    const imageFilenames = [
      'club.JPG',
      'club1.JPG',
      'club3.JPG',
      'club4.jpg',
      'IMG_2079.jpeg',
      'IMG_3635 2.jpeg',
      'IMG_5155.jpeg',
      'IMG_5174.JPG',
      'IMG_5177.JPG',
      'IMG_5180.JPG',
      'IMG_5181.JPG',
      'IMG_7483.jpeg'
    ];

    const memoriesData = imageFilenames.map((filename, index) => ({
      title: `DECA Memory ${index + 1}`,
      image: `${process.env.PUBLIC_URL}/memories-photos/${filename}`,
      description: "CPSS DECA memories"
    }));

    setMemories(memoriesData);
  }, []);

  const openLightbox = (memory) => {
    setSelectedImage(memory);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="memories-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Our Memories</h1>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery-section section-padding">
        <div className="container">
          
          <div className="photo-gallery">
            {memories.map((memory, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(memory)}
              >
                <div className="gallery-image">
                  <img src={memory.image} alt={memory.title} />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h4>{memory.title}</h4>
                      <p>{memory.description}</p>
                      <span className="view-text">Click to View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Member Spotlights */}
      <section className="spotlights-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Member Spotlights</h2>
          <div className="spotlights-grid grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="spotlight-card card">
                <div className="spotlight-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">👤</span>
                  </div>
                </div>
                <div className="spotlight-content">
                  <h3>{testimonial.name}</h3>
                  <p className="spotlight-grade">{testimonial.grade}</p>
                  <blockquote>"{testimonial.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div className="lightbox-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Memories;
