
import React, { useEffect, useRef, useState } from 'react';

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop')"}}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Every line of code deserves{' '}
            <span className="bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent font-semibold">
              precision
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-sky-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              clarity
            </span>
            , and trust
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            CodeEasy.ai gives your team the confidence to ship better software, faster
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
