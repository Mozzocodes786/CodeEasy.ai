import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const TrustDifferentiators = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Built for Trust and Scale</h2>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/review")}
            className="px-6 py-3 border-2 border-black/20 rounded-lg hover:scale-105 transition-all"
          >
            See How It Works →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrustDifferentiators;
