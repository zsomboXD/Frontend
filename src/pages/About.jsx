import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: '#0d0d0d', color: 'white', marginBottom: '0' }}>
                <section
                    className="text-center d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        backgroundImage: 'url("https://res.cloudinary.com/paksiblog13/image/upload/v1741863594/B_WImage_mzqdq3.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '550px',
                        padding: '80px 20px'
                    }}
                >
                    <h1 className="display-3 fw-bold">WorkoutWise</h1>
                    <p className="lead mt-3">Your ultimate fitness companion — track your progress, follow personalized plans, and connect with a vibrant fitness community.</p>
                    <button className="btn btn-primary mt-4">Download the App</button>
                </section>

                <section className="container mb-5" style={{ paddingBottom: '0' }}>
                    <h2 className="text-center mb-4">Key Features</h2>
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <h4>Workout Tracking</h4>
                            <p>Log your exercises and monitor progress over time with intuitive tracking tools.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h4>Personalized Plans</h4>
                            <p>Receive tailored workout plans designed for your fitness level and goals.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h4>Community Support</h4>
                            <p>Engage with a community of fitness enthusiasts for motivation and shared experiences.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-5">
                    <h2>Our Mission</h2>
                    <p className="mt-3">At WorkoutWise, we empower you to lead a healthier, stronger life by providing the tools and support you need to conquer your fitness journey.</p>
                </section>

                <section className="text-center" style={{ backgroundColor: '#0d0d0d', paddingBottom: '10px' }}>
                    <h2>Contact Us</h2>
                    <p className="mt-3">Have questions or need support? Reach us at <a href="mailto:support@workoutwise.com" className="text-primary">support@workoutwise.com</a></p>
                </section>
            </div>
        </div>
    );
};

export default About;
