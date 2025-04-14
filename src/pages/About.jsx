import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Header } from '../components/Header';

const About = () => {
    return (
        <div style={{ backgroundColor: '#0d0d0d', color: 'white', fontFamily: 'Arial, sans-serif', marginBottom: '0' }}>
            <Header/>

            <div className="position-relative" style={{ minHeight: '70vh', overflow: 'hidden' }}>
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url("https://res.cloudinary.com/paksiblog13/image/upload/v1741863594/B_WImage_mzqdq3.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0,
                        filter: 'brightness(0.7)'
                    }}
                />
                
                <div 
                    className="text-center d-flex flex-column justify-content-center align-items-center position-relative" 
                    style={{
                        height: '100%',
                        minHeight: '70vh',
                        padding: '60px 20px',
                        zIndex: 1
                    }}
                >
                    <h1 className="fw-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>WorkoutWise</h1>
                    <p className="mt-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                        Your ultimate fitness companion — track your progress, follow personalized plans, and connect with a vibrant fitness community.
                    </p>
                    <Link to="/Categories">
                        <Button color="success" className="btn btn-primary mt-4 w-100 w-md-auto">
                            Get Fit!
                        </Button>
                    </Link>
                </div>
            </div>

            <section className="container mb-5 px-3 px-md-0" style={{ paddingBottom: '0' }}>
                <h2 className="text-center mb-4">Key Features</h2>
                <div className="row g-3 text-center">
                    <div className="col-12 col-md-4 mb-4">
                        <h4>Workout Tracking</h4>
                        <p>Log your exercises and monitor progress over time with intuitive tracking tools.</p>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <h4>Personalized Plans</h4>
                        <p>Receive tailored workout plans designed for your fitness level and goals.</p>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <h4>Community Support</h4>
                        <p>Engage with a community of fitness enthusiasts for motivation and shared experiences.</p>
                    </div>
                </div>
            </section>

            <section className="text-center mb-5 px-3">
                <h2>Our Mission</h2>
                <p className="mt-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                    At WorkoutWise, we empower you to lead a healthier, stronger life by providing the tools and support you need to conquer your fitness journey.
                </p>
            </section>

            <section className="text-center py-5" style={{ backgroundColor: '#0d0d0d' }}>
                <h2>Contact Us</h2>
                <p className="mt-3">
                    Have questions or need support? Reach us at <a href="mailto:support@workoutwise.com" className="text-primary">support@workoutwise.com</a>
                </p>
            </section>
        </div>
    );
};

export default About;