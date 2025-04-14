import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Quotes = () => {
  const quotes = [
    {
      quote: "The worst thing I can be is the same as everybody else. I hate that.",
      author: "Arnold Schwarzenegger , bodybuilder",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/250px-Arnold_Schwarzenegger_1974.jpg"
    },
    {
      quote: "There’s no secret formula. I lift heavy, work hard, and aim to be the best.",
      author: "Ronnie Coleman , bodybuilder",
      image: "https://gymbeam.cz/blog/wp-content/uploads/2016/09/RONNIE_COLEMAN.jpg",
    },
    {
      quote: "If you think lifting is dangerous, try being weak.",
      author: "Paul “Bear” Bryant, football manager legend",
      image: "https://www.savannahnow.com/gcdn/authoring/2010/08/21/NSMN/ghows-GA-4afcf8da-1496-44e2-afec-faff28c461dc-c37c3845.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
    },
    {
      quote: "Discipline is doing what you hate to do, but doing it like you love it.",
      author: "Mike Tyson , boxing legend",
      image: "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/3/iron-mike-tyson-boxing-megan-lees.jpg",
    },
    {
      quote: "Everybody wants to be a bodybuilder, but don't nobody want to lift no heavy-ass weights.",
      author: "Ronnie Coleman , bodybuilder",
      image: "https://image-cdn.essentiallysports.com/wp-content/uploads/0037_2003RonnieColeman-430x600.jpg",
    },
    {
        quote: "For me, life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",
        author: "Arnold Schwarzenegger , bodybuilder",
        image: "https://www.lifesizecutouts.com.au/cdn/shop/products/arnold-schwarzeneger-body-builder.jpg?v=1654322666",
      },
      {
        quote: "The hardest thing about getting to the top of the mountain is realizing you’ve got nothing to do but come back down." ,
        author: "Aziz 'Zyzz' Shavershian , bodybuilder",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfZAjwp6kPh7CvQIRav-npnB8KbjA0KB_7X0cnNb_qVrTYJ1mhysXoq2v3pjyHRAzAAPq1qUu2Cy1DYU1ITfOqZleoKib9INDmuaLUKw4z7VKfV2Q1LaskGDhLl6QfSS748dIb1R2jOkMg/s1600/Zyzz+2l9t75d.png",
      },
      {
        quote: "“Most people’s dreams are very external, like champions – they want to win a medal, they want a trophy, want a nice car and all that stuff. And you get it, and you have everything and you realize this isn’t what I wanted.”",
        author: "Chris 'Cbum' Bumstead , bodybuilder",
        image: "https://www.american-supps.com/mediafiles/Bilder/chris-bumstead-posing.png",
      },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    
    <div className="relative min-h-screen">

      <div className="max-w-md mx-auto mt-10 p-4">
      <Link
        to="/" 
        className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        style={{ fontSize: '40px', textDecoration: 'none' }}
      >
        &#8592; Return
      </Link>
        <div className="bg-[#0d0d0d] text-white shadow-xl rounded-lg p-6 border border-gray-600 mt-16">
          <div className="about-container">
            <FaQuoteLeft className="text-yellow-400 mb-4 text-4xl mx-auto" />
            <p className="text-xl font-semibold italic">{quotes[index].quote}</p>
            <p className="mt-4 text-sm text-gray-400">– {quotes[index].author}</p>
            <button
              className="mt-6 px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
              onClick={handleNext}
            >
              Next Quote
            </button>
          </div>
        </div>
      </div>

        <div style={{ display:"flex", justifyContent: "center" }}>

    
      <img
        src={quotes[index].image}
        alt={quotes[index].author}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full max-h-[200px] max-w-[150px] object-contain"
      />
    </div>
    </div>
  );
};
