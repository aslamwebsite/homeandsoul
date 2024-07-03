import React, { useState, useEffect, useRef } from 'react';
import 'odometer/themes/odometer-theme-default.css';

const Counter = ({ startValue, endValue, speed }) => {
  const [counted, setCounted] = useState(false);
  const counterRef = useRef(null);
  const odometerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768 && counterRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCounted(true);
            }
          });
        },
        { rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(counterRef.current);

      // Cleanup function
      return () => {
        observer.disconnect();
      };
    } else {
      setCounted(true);
    }
  }, []);

  useEffect(() => {
    if (counted && counterRef.current) {
      // Import Odometer dynamically
      import('odometer').then((OdometerModule) => {
        const Odometer = OdometerModule.default;

        // Initialize Odometer if not already initialized
        if (!odometerRef.current) {
          odometerRef.current = new Odometer({
            el: counterRef.current,
            value: startValue,
            format: '(,ddd)',
            duration: speed,
          });
        }

        // Update value
        odometerRef.current.update(endValue);
      }).catch((error) => {
        console.error('Error importing Odometer:', error);
      });
    }
  }, [counted, startValue, endValue, speed]);

  return (
    <div className="counter-element">
      <div className="odometer" ref={counterRef}>
        {counted ? startValue : 0}
      </div>
    </div>
  );
};

export default Counter;
