import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faQuestionCircle, faDumbbell, faCalendarAlt, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

export const Tips = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: faQuestionCircle,
      color: "#4CAF50",
      questions: [
        {
          question: "What should a beginner do at the gym?",
          answer: "Start simple. Focus on form first. Use light weights and record your form to check for errors. Master the basics: squats, deadlifts, presses, pulls."
        },
        {
          question: "Best beginner workout routine?",
          answer: "Keep it simple and structured: 2–4 sessions per week, full body or upper/lower splits, focus on fundamental movements: presses, pulls, squats, hip hinges, carries."
        },
        {
          question: "How much weight should beginners lift?",
          answer: "Use weights that challenge you, but allow good form. For compound lifts: stop 1–3 reps short of failure. For isolation exercises: you can push closer to full fatigue."
        }
      ]
    },
    {
      title: "Workout Planning",
      icon: faCalendarAlt,
      color: "#2196F3",
      questions: [
        {
          question: "What's the best gym routine?",
          answer: "The best routine is the one you enjoy and can stick with consistently. Whether your goal is building muscle, losing fat, or gaining strength, staying consistent and progressing over time is key."
        },
        {
          question: "What body parts should I train on which days?",
          answer: "There's no one-size-fits-all here. The important thing is to train every major muscle group each week. Popular workout splits include: Full body, Upper/Lower, Push/Pull, Push/Pull/Legs. Avoid training similar muscle groups back-to-back."
        },
        {
          question: "How should I schedule workouts?",
          answer: "Know your available days, then pick a routine that matches your time. Choose a flexible plan that still lets you progress if you miss a session."
        },
        {
          question: "What's a good 5-day workout plan?",
          answer: "Try Upper/Lower + a Weak Point Day, or Push/Pull/Legs + 2 days repeated. Avoid body part splits unless you just enjoy them."
        }
      ]
    },
    {
      title: "Muscle Building",
      icon: faDumbbell,
      color: "#FF9800",
      questions: [
        {
          question: "Best schedule to build muscle?",
          answer: "Whatever schedule you enjoy and can stick to consistently. Train each muscle group 2–3x/week, use splits like full body, upper/lower, or push/pull/legs, and increase weights over time."
        },
        {
          question: "Can I gain 10 pounds of muscle in a month?",
          answer: "Not naturally. You might gain 10 lbs total (including water, glycogen, and fat) during a bulk. Muscle growth takes time."
        },
        {
          question: "How can beginners build muscle?",
          answer: "Train 2–4x/week, hit each muscle group 2+ times/week, progress weight or reps over time, and be consistent."
        },
        {
          question: "How many days per week to build muscle?",
          answer: "2 days = minimum, 3 days = solid, 4 days = optimal for most. Aim for progressive overload and train all major muscle groups regularly."
        }
      ]
    },
    {
      title: "Training Frequency",
      icon: faFireAlt,
      color: "#F44336",
      questions: [
        {
          question: "How many days per week should I work out?",
          answer: "Minimum: 2 days of resistance training. Ideal: 3–4 days/week. Choose full body (2–3x) or upper/lower (4x) based on your schedule."
        },
        {
          question: "Is a full body workout every day okay?",
          answer: "For most people, 3–4 full body sessions per week is optimal. Training full body every day is usually overkill."
        },
        {
          question: "Is lifting every day okay?",
          answer: "It depends. You need rest and recovery. Lifting heavy daily can lead to burnout and injury. Stick to 3–5 quality sessions per week."
        },
        {
          question: "Is daily exercise bad?",
          answer: "Nope—just be smart. Weight train 3–5x/week, use other days for recovery: walking, yoga, sports. Balance is key."
        },
        {
          question: "What should I do on rest days?",
          answer: "Rest and recover. Stay active with light movement (walking, stretching, yoga). Eat to support your goals. Hydrate and sleep well."
        }
      ]
    },
    {
      title: "Exercise & Nutrition",
      icon: faLightbulb,
      color: "#9C27B0",
      questions: [
        {
          question: "What are the top 10 exercises?",
          answer: "Trap Bar Deadlift, Front Squat, Barbell Glute Bridge, Bulgarian Split Squat, Military Press, Pull-Up, Barbell Row, Bench Press, Farmer's Walk, Dip."
        },
        {
          question: "What makes a good gym routine?",
          answer: "One that fits your goals and lifestyle, works all major muscle groups, uses movements you enjoy and perform pain-free, and prioritizes progression."
        },
        {
          question: "How much cardio should I do?",
          answer: "Depends on your goal. For fat loss: focus on diet first. For general health: light cardio a few times a week. For muscle gain: prioritize strength training."
        },
        {
          question: "What can I drink to build muscle faster?",
          answer: "Protein shakes (if you're short on protein), mass gainers (if you struggle to eat enough), creatine (effective), and of course... water."
        }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="position-relative" style={{ minHeight: '40vh', overflow: 'hidden' }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        
        <div 
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            position: 'relative',
            zIndex: 1,
            height: '40vh',
            padding: '2rem',
          }}
        >
          <h1 className="fw-bold mb-4 mx-auto" 
              style={{ 
                fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                maxWidth: '90%',
                lineHeight: '1.2'
              }}>
            <FontAwesomeIcon icon={faLightbulb} className="me-3" />
            Workout Tips & FAQs
          </h1>
          <p className="mb-4 mx-auto" 
             style={{ 
               fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
               maxWidth: '800px',
               lineHeight: '1.6'
             }}>
            Expert advice to help you maximize your workouts and achieve your fitness goals
          </p>
        </div>
      </div>

      <div className="container py-5" style={{ maxWidth: '1200px' }}>
        {faqCategories.map((category, catIndex) => (
          <section key={catIndex} className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon 
                icon={category.icon} 
                className="me-3" 
                style={{ fontSize: '2rem', color: category.color }} 
              />
              <h2 
                style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: category.color
                }}
              >
                {category.title}
              </h2>
            </div>
            
            <div className="row g-4">
              {category.questions.map((faq, faqIndex) => (
                <div key={faqIndex} className="col-md-6">
                  <div 
                    className="p-4 h-100" 
                    style={{
                      backgroundColor: '#1a1a1a',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      borderLeft: `4px solid ${category.color}`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h3 
                      className="mb-3" 
                      style={{ 
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        color: '#ffffff'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p 
                      style={{ 
                        fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                        lineHeight: '1.6',
                        color: '#cccccc'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="text-center py-5" style={{ backgroundColor: '#1a1a1a' }}>
        <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          Ready to Apply These Tips?
        </h2>
        <Link to="/Categories">
          <Button color="success" size="lg" className="px-4 py-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            Start Your Workout Plan
          </Button>
        </Link>
      </section>
    </div>
  );
};