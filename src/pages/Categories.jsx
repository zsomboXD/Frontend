import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

const categories = [
  { 
    name: 'For Women', 
    url: '/CategoryPageWomen',
    bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    name: 'For Men', 
    url: '/CategoryPageMen',
    bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
];

const WorkoutPage = () => {
  return (
    <div style={{
  minHeight: '100vh',
  maxHeight: '1000px',
  backgroundColor: '#f8fafc',
  fontFamily: "'Poppins', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}} className="no-scrollbar">
      <Header />
      
      <div style={{
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        marginTop: '80px'
      }}>
        <h1 style={{
          color: '#1a202c',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Choose Your Workout Program
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {categories.map((category, index) => (
            <Link 
              to={category.url} 
              key={index}
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '400px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                }
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: category.color,
                opacity: 0.8,
                zIndex: 1
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
              }} />
              <div style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {category.name}
                </h2>
                <div style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'white',
                  color: '#1a202c',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    transform: 'scale(1.05)'
                  }
                }}>
                  Explore Exercises
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;