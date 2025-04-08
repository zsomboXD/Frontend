import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { Header } from '../components/Header';

const categories = [
  { name: 'Bodyweight', url: 'https://www.youtube.com/embed/30PqX2zvK88' },
  { name: 'AB Workouts', url: 'https://www.youtube.com/embed/BdhqubW1GJE' },
  { name: 'Chest', url: 'https://www.youtube.com/embed/Epit6DSq_ww' },
  { name: 'Legs', url: 'https://www.youtube.com/embed/q7rCeOa_m58' },
  { name: 'Arms', url: 'https://www.youtube.com/embed/KIvTY1KqCH4' },
  { name: 'Shoulder', url: 'https://www.youtube.com/embed/boUVD0pCGCk' },
  { name: 'Back', url: 'https://www.youtube.com/embed/zgfcOWuTeYA' },
  { name: 'Fat Loss', url: 'https://www.youtube.com/embed/_knIf9vF4k4' },
  { name: 'Cardio', url: 'https://www.youtube.com/embed/9psH-BsJ_IM' },
];

const WorkoutPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (url) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#212121',
      }}
    >
      <Header />
      <div style={{ textAlign: 'center', width: '80%', maxWidth: '1200px', marginTop: '80px' }}>
        <h1 style={{ color: '#fff', fontSize: '4rem', marginBottom: '40px' }}>
          Workout Categories for Men
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            width: '100%',
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: '40px',
                backgroundColor: '#f0f0f0',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                width: '100%',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '2rem', color: '#007bff' }}>{category.name}</h3>
              <button
                style={{
                  padding: '20px 30px',
                  fontSize: '1.5rem',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.backgroundColor = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = '#007bff';
                }}
                onClick={() => handleVideoClick(category.url)}
              >
                {selectedVideo === category.url ? 'Close Video' : 'Watch Video'}
              </button>
            </div>
          ))}
        </div>

        {/* Video Container */}
        {selectedVideo && (
          <div
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              zIndex: 1000,
              width: '80%',
              maxWidth: '800px',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <iframe
              width="100%"
              height="450"
              src={selectedVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Video"
            ></iframe>
            <button
              onClick={closeVideo}
              style={{
                marginTop: '20px',
                padding: '10px',
                fontSize: '1.5rem',
                backgroundColor: '#ff0000',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Close Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPage;