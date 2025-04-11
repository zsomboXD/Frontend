import React from 'react';
import { Button } from 'reactstrap';
import { Header } from '../components/Header';
import '../style.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="homepage-container">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Achieve Your Fitness Goals with workoutWise</h1>
          <p className="hero-subtitle">Track your workouts, monitor progress, and stay motivated on your fitness journey.</p>
          <Button color="primary" size="lg" href="/auth" className="hero-button">Get Started</Button>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Fit?</h2>
        <Link to = "/Signup"> <Button color="success" size="lg" >Join Now</Button></Link>
      </section>

      <section className="features-section">
        <div className="feature">
          <h2>Workout Tracking</h2>
          <p>Log your workouts, sets, and reps with ease.</p>
        </div>
        <div className="feature">
          <h2>Progress Monitoring</h2>
          <p>Visualize your progress over time with interactive charts.</p>
        </div>
        <div className="feature">
          <h2>Goal Setting</h2>
          <p>Set custom fitness goals and stay accountable.</p>
        </div>
      </section>
    </div>
  );
};