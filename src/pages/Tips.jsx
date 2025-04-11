import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style.css';
import { Header } from '../components/Header';

export const Tips = () => {
  const faqs = [
    {
      question: "What’s the best gym routine?",
      answer: "The best routine is the one you enjoy and can stick with consistently. Whether your goal is building muscle, losing fat, or gaining strength, staying consistent and progressing over time is key."
    },
    {
      question: "What body parts should I train on which days?",
      answer: "There's no one-size-fits-all here. The important thing is to train every major muscle group each week. Popular workout splits include: Full body, Upper/Lower, Push/Pull, Push/Pull/Legs. Avoid training similar muscle groups back-to-back."
    },
    {
      question: "What should a beginner do at the gym?",
      answer: "Start simple. Focus on form first. Use light weights and record your form to check for errors. Master the basics: squats, deadlifts, presses, pulls."
    },
    {
      question: "Best beginner workout routine?",
      answer: "Keep it simple and structured: 2–4 sessions per week, full body or upper/lower splits, focus on fundamental movements: presses, pulls, squats, hip hinges, carries."
    },
    {
      question: "Best schedule to build muscle?",
      answer: "Whatever schedule you enjoy and can stick to consistently. Train each muscle group 2–3x/week, use splits like full body, upper/lower, or push/pull/legs, and increase weights over time."
    },
    {
      question: "What are the top 10 exercises?",
      answer: "Trap Bar Deadlift, Front Squat, Barbell Glute Bridge, Bulgarian Split Squat, Military Press, Pull-Up, Barbell Row, Bench Press, Farmer’s Walk, Dip."
    },
    {
      question: "How should I schedule workouts?",
      answer: "Know your available days, then pick a routine that matches your time. Choose a flexible plan that still lets you progress if you miss a session."
    },
    {
      question: "Can I gain 10 pounds of muscle in a month?",
      answer: "Not naturally. You might gain 10 lbs total (including water, glycogen, and fat) during a bulk. Muscle growth takes time."
    },
    {
      question: "What makes a good gym routine?",
      answer: "One that fits your goals and lifestyle, works all major muscle groups, uses movements you enjoy and perform pain-free, and prioritizes progression."
    },
    {
      question: "How much weight should beginners lift?",
      answer: "Use weights that challenge you, but allow good form. For compound lifts: stop 1–3 reps short of failure. For isolation exercises: you can push closer to full fatigue."
    },
    {
      question: "How much cardio should I do?",
      answer: "Depends on your goal. For fat loss: focus on diet first. For general health: light cardio a few times a week. For muscle gain: prioritize strength training."
    },
    {
      question: "How can beginners build muscle?",
      answer: "Train 2–4x/week, hit each muscle group 2+ times/week, progress weight or reps over time, and be consistent."
    },
    {
      question: "How many days per week should I work out?",
      answer: "Minimum: 2 days of resistance training. Ideal: 3–4 days/week. Choose full body (2–3x) or upper/lower (4x) based on your schedule."
    },
    {
      question: "What's a good 5-day workout plan?",
      answer: "Try Upper/Lower + a Weak Point Day, or Push/Pull/Legs + 2 days repeated. Avoid body part splits unless you just enjoy them."
    },
    {
      question: "What can I drink to build muscle faster?",
      answer: "Protein shakes (if you're short on protein), mass gainers (if you struggle to eat enough), creatine (effective), and of course... water."
    },
    {
      question: "Is a full body workout every day okay?",
      answer: "For most people, 3–4 full body sessions per week is optimal. Training full body every day is usually overkill."
    },
    {
      question: "How many days per week to build muscle?",
      answer: "2 days = minimum, 3 days = solid, 4 days = optimal for most. Aim for progressive overload and train all major muscle groups regularly."
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
      question: "Is going to the gym daily bad?",
      answer: "Only if you're training too hard without recovery. Light activity or split sessions are fine. Avoid obsessive habits."
    },
    {
      question: "What should I do on rest days?",
      answer: "Rest and recover. Stay active with light movement (walking, stretching, yoga). Eat to support your goals. Hydrate and sleep well."
    }
  ];

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10" style={{ backgroundColor: '#1a1a1a' }}>

      <Link
        to="/" 
        className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        style={{ fontSize: '40px', textDecoration: 'none' }}
      >
        &#8592; Return
      </Link>

      <div className="w-full max-w-5xl pl-1">
        <h1 className="text-4xl font-bold mb-12 text-center" style={{ color: '#007bff' }}>
          💡 Workout Tips & FAQs
        </h1>
        <div className="grid gap-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#007bff' }}>
                {faq.question}
              </h2>
              <p className="text-gray-300 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
