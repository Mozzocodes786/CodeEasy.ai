
import React, { useEffect, useRef, useState } from 'react';

const ProductClarity = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: 'Instant Bug Detection',
      description: 'Catch potential bugs and security vulnerabilities before they reach production with real-time AI analysis',
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Smart Code Suggestions',
      description: 'Get intelligent recommendations to improve code quality, performance, and maintainability automatically',
      color: 'from-sky-400 to-sky-600'
    },
    {
      title: 'Best Practice Enforcement',
      description: 'Ensure your team follows industry standards and coding conventions consistently across all projects',
      color: 'from-pink-500 to-sky-500'
    },
    {
      title: 'Accelerated Reviews',
      description: 'Reduce review time by up to 70% with automated feedback and context-aware code analysis',
      color: 'from-sky-500 to-pink-500'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            AI That Understands Your Code
          </h2>
          <p className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            CodeEasy.ai analyzes every line of code with advanced AI, delivering instant feedback that helps your team ship better software faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border-2 border-black/5 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start space-x-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                  <div className="w-6 h-6 bg-white/30 rounded-full" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductClarity;
