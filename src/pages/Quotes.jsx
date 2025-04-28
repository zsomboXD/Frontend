import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/Header';
import '../style.css';

export const Quotes = () => {
  const quotes = [
    {
      quote: "The worst thing I can be is the same as everybody else. I hate that.",
      author: "Arnold Schwarzenegger, bodybuilder",
      image: "https://www.greatestphysiques.com/wp-content/uploads/2016/09/arnold-schwarzenegger-mobile-iphone-6s.jpg"
    },
    {
      quote: "There's no secret formula. I lift heavy, work hard, and aim to be the best.",
      author: "Ronnie Coleman, bodybuilder",
      image: "https://gymbeam.cz/blog/wp-content/uploads/2016/09/RONNIE_COLEMAN.jpg",
    },
    {
      quote: "If you think lifting is dangerous, try being weak.",
      author: "Paul 'Bear' Bryant, football manager legend",
      image: "https://www.savannahnow.com/gcdn/authoring/2010/08/21/NSMN/ghows-GA-4afcf8da-1496-44e2-afec-faff28c461dc-c37c3845.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
    },
    {
      quote: "Discipline is doing what you hate to do, but doing it like you love it.",
      author: "Mike Tyson, boxing legend",
      image: "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/3/iron-mike-tyson-boxing-megan-lees.jpg",
    },
    {
      quote: "Everybody wants to be a bodybuilder, but don't nobody want to lift no heavy-ass weights.",
      author: "Ronnie Coleman, bodybuilder",
      image: "https://image-cdn.essentiallysports.com/wp-content/uploads/0037_2003RonnieColeman-430x600.jpg",
    },
    {
      quote: "For me, life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",
      author: "Arnold Schwarzenegger, bodybuilder",
      image: "https://media.newyorker.com/photos/624f484bb8900d61c847f8d7/master/w_1920,c_limit/Long-Butler-09.jpg",
    },
    {
      quote: "The hardest thing about getting to the top of the mountain is realizing you've got nothing to do but come back down.",
      author: "Aziz 'Zyzz' Shavershian, bodybuilder",
      image: "https://www.greatestphysiques.com/wp-content/uploads/2016/07/zyzz-iconic-photo.jpg",
    },
    {
      quote: "Most people's dreams are very external, like champions - they want to win a medal, they want a trophy, want a nice car and all that stuff. And you get it, and you have everything and you realize this isn't what I wanted.",
      author: "Chris 'Cbum' Bumstead, bodybuilder",
      image: "https://i.redd.it/5fib0tclwrxd1.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quotes-page-container" style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <Header />
      <div className="container py-5" style={{ maxWidth: '1400px' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: '630px',
                width: '90%',
                overflow: 'hidden',
                borderRadius: '18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                backgroundColor: '#1a1a1a',
                paddingTop: '1px',
                marginTop: '50px'
              }}
            >
              <img
                src={quotes[index].image}
                alt={quotes[index].author}
                style={{
                  height: '95%',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  borderRadius: '16px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x1000/333333/cccccc?text=Image+Not+Found';
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className={`p-4 p-lg-5 text-center transition-opacity ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                transition: 'opacity 0.3s ease-in-out',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <FaQuoteLeft className="text-warning mb-4 mx-auto" style={{ fontSize: '2.5rem' }} />
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  color: '#ffffff'
                }}
              >
                {quotes[index].quote}
              </p>
              <p
                className="mt-3 mb-4"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: '#aaaaaa'
                }}
              >
                – {quotes[index].author}
              </p>

              <div className="mt-auto">
                <Button
                  color="warning"
                  onClick={handleNext}
                  className="px-4 py-2 d-flex align-items-center mx-auto"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontWeight: '600'
                  }}
                >
                  Next Quote
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};