import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

const categories = [
  { name: 'for Women', url: `/CategoryPageWomen` },
  { name: 'for Men', url: `/CategoryPageMen` },
];

const WorkoutPage = () => {
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
      <div style={{ textAlign: 'center', width: '80%', maxWidth: '1200px' }}>
        <h1 style={{ color: '#fff', fontSize: '4rem', marginBottom: '40px' }}>Workout Categories:</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
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
                width: 'calc(50% - 30px)',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}
            >
              <h3 style={{ color: '#007bff', fontSize: '2rem' }}>{category.name}</h3>
              <Link to={category.url} style={{ textDecoration: 'none' }}>
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
                >
                  View Exercises
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;