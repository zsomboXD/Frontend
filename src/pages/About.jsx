import React from 'react';
import { Button } from 'reactstrap';
import { Header } from '../components/Header';
import '../style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUserShield, faUsers, faDumbbell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <div className="aboutpage-container" style={{ backgroundColor: '#0d0d0d', color: 'white' }}>
      <Header />

      <div className="position-relative" style={{ minHeight: '60vh', overflow: 'hidden' }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://res.cloudinary.com/paksiblog13/image/upload/v1741863594/B_WImage_mzqdq3.jpg")',
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
            height: '60vh',
            padding: '2rem',
          }}
        >
          <div style={{ width: '100%' }}>
            <h1 className="fw-bold mb-4 mx-auto" 
                style={{ 
                  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                  maxWidth: '90%',
                  lineHeight: '1.2'
                }}>
              About WorkoutWise
            </h1>
            <p className="mb-4 mx-auto" 
               style={{ 
                 fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                 maxWidth: '800px',
                 lineHeight: '1.6'
               }}>
              Your ultimate fitness companion — track your progress, follow personalized plans, and connect with a vibrant fitness community.
            </p>
            <Link to="/Categories">
              <Button color="success" size="lg" 
                      className="px-4 py-2 mx-auto" 
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                Get Fit!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-5" style={{ backgroundColor: '#0d0d0d', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-center mb-5" style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}>
            Key Features
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
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Workout Tracking
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Log your exercises and monitor progress over time with intuitive tracking tools.
              </p>
            </div>

            <div className="p-4" style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  height: '100%'
                }}>
              <div className="text-center mb-3" style={{ fontSize: '2.5rem', color: '#2196F3' }}>
                <FontAwesomeIcon icon={faUserShield} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Personalized Plans
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Receive tailored workout plans designed for your fitness level and goals.
              </p>
            </div>

            <div className="p-4" style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  height: '100%'
                }}>
              <div className="text-center mb-3" style={{ fontSize: '2.5rem', color: '#FF9800' }}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-center mb-3" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#ffffff'
                  }}>
                Community Support
              </h3>
              <p className="text-center" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                Engage with a community of fitness enthusiasts for motivation and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#1a1a1a', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#FF5722' }}>
            <FontAwesomeIcon icon={faDumbbell} />
          </div>
          <h2 className="text-center mb-4" style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}>
            Our Mission
          </h2>
          <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.6'
              }}>
            At WorkoutWise, we empower you to lead a healthier, stronger life by providing the tools and support you need to conquer your fitness journey. Our platform combines cutting-edge technology with expert knowledge to create a personalized fitness experience for everyone.
          </p>
        </div>
      </section>

      <section className="py-5 text-center" style={{ backgroundColor: '#0d0d0d', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#9C27B0' }}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Contact Us
          </h2>
          <p className="mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            Have questions or need support? We're here to help!
          </p>
          <a href="mailto:support@workoutwise.com" className="btn btn-outline-light px-4 py-2" 
             style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            support@workoutwise.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;