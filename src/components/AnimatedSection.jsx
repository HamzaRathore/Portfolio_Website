import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, direction = 'left', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-300px)';  
      case 'right': return 'translateX(300px)';  
      case 'up': return 'translateY(300px)';     
      case 'down': return 'translateY(-300px)';  
      default: return 'translateX(-300px)';
    }
  };

  return (
    <div
      ref={sectionRef}
      className="transition-all duration-1000 ease-out"
      style={{
        transform: isVisible ? 'none' : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
