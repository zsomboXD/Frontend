import React from 'react';
import { Button } from 'reactstrap';
import { Header } from '../components/Header';
import '../style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faChartLine, faBullseye } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <div className="homepage-container" style={{ backgroundColor: '#0d0d0d', color: 'white' }}>
      <Header />

      <div className="position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>

        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        />
        
        <div 
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100vh',
            padding: '2rem',
          }}
        >
          <div style={{ width: '100%', marginTop: '-3rem' }}>
            <h1 className="fw-bold mb-4 mx-auto" 
                style={{ 
                  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                  maxWidth: '90%',
                  lineHeight: '1.2'
                }}>
              Achieve Your Fitness Goals with WorkoutWise
            </h1>
            <p className="mb-4 mx-auto" 
               style={{ 
                 fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                 maxWidth: '800px',
                 lineHeight: '1.6'
               }}>
              Track your workouts, monitor progress, and stay motivated on your fitness journey.
            </p>
            <Button color="primary" size="lg" href="/auth" 
                    className="px-4 py-2 mx-auto" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Get Started
            </Button>
          </div>
        </div>
      </div>


      <section className="py-5" style={{ backgroundColor: '#0d0d0d', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-center mb-5" style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}>
            Powerful Features
          </h2>
          
          <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'start'
              }}>

            <div className="p-4" style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  height: '100%'
                }}>
              <div className="text-center mb-3" style={{ fontSize: '2.5rem', color: '#4CAF50' }}>
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Workout Tracking
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Log your workouts, sets, and reps with ease.
              </p>
            </div>

            <div className="p-4" style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  height: '100%'
                }}>
              <div className="text-center mb-3" style={{ fontSize: '2.5rem', color: '#2196F3' }}>
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Progress Monitoring
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Visualize your progress over time with interactive charts.
              </p>
            </div>

            <div className="p-4" style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  height: '100%'
                }}>
              <div className="text-center mb-3" style={{ fontSize: '2.5rem', color: '#FF9800' }}>
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Goal Setting
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Set custom fitness goals and stay accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-5" style={{ backgroundColor: '#1a1a1a' }}>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          Ready to Get Fit?
        </h2>
        <Link to="/Signup">
          <Button color="success" size="lg" className="px-4 py-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            Join Now
          </Button>
        </Link>
      </section>
    </div>
  );
};