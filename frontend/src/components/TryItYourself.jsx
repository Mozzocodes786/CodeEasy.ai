import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const TryItYourself = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleTryClick = () => {
    navigate("/review");
  };

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-pink-50/30 via-white to-sky-50/30 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-black mb-4">
            Try CodeEasy.ai Instantly
          </h2>
          <p className="text-lg text-black/80">
            Paste your code and get AI-powered feedback instantly
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleTryClick}
            className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-sky-500 rounded-full hover:scale-105 transition-all duration-300"
          >
            Try CodeEasy.ai
          </button>
        </div>

      </div>
    </section>
  );
};

export default TryItYourself;
