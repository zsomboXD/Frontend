import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import '../style.css';

const categories = [
  { 
    name: 'Bodyweight', 
    url: 'https://www.youtube.com/embed/qAT1k2hAr6o',
    bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    name: 'AB Workouts', 
    url: 'https://www.youtube.com/embed/Z_dgrjRlD_4',
    bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  { 
    name: 'Squat', 
    url: 'https://www.youtube.com/embed/irfw1gQ0foQ',
    bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  { 
    name: 'Arms', 
    url: 'https://www.youtube.com/embed/eDv9bnz3GT8',
    bgColor: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
  },
  { 
    name: 'Shoulder', 
    url: 'https://www.youtube.com/embed/w8cSjkXkYRc',
    bgColor: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  },
  { 
    name: 'Legs', 
    url: 'https://www.youtube.com/embed/ZZI__bqlBkQ',
    bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  { 
    name: 'Fat Loss', 
    url: 'https://www.youtube.com/embed/dThKz4oNHF4',
    bgColor: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)'
  },
  { 
    name: 'Cardio', 
    url: 'https://www.youtube.com/embed/ImI63BUUPwU',
    bgColor: 'linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)'
  },
  { 
    name: 'Back', 
    url: 'https://www.youtube.com/embed/x0UKQEG-mi4',
    bgColor: 'linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)'
  },
];

const WorkoutPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleVideoClick = (url) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#f8fafc',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative'
    }}>
      <Header />
      
      <div style={{
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        marginTop: '80px',
        height: 'calc(100vh - 80px)',
        overflow: 'auto'
      }}>
        <h1 style={{
          color: '#1a202c',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Workout Programs for Women
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                background: category.bgColor,
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                minHeight: '175px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => handleVideoClick(category.url)}
            >
              <h3 style={{
                color: 'white',
                fontSize: '1.75rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                textAlign: 'center'
              }}>
                {category.name}
              </h3>
              <button
                style={{
                  padding: '0.75rem 1.75rem',
                  backgroundColor: 'white',
                  color: '#1a202c',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Watch Video
              </button>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '900px',
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0
              }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src={selectedVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Video"
                ></iframe>
              </div>
              <button
                onClick={closeVideo}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(0,0,0,0.9)'
                  }
                }}
                aria-label="Close video"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPage;