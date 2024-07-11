import { useState, useEffect, useRef, useCallback } from "react";
import debounce from 'lodash/debounce';

const SectionVisibleHook = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false);
  const targetRef = useRef(null);

  const handleScroll = useCallback(
    debounce(() => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const elementIsVisible =
          rect.top < window.innerHeight && rect.bottom >= 0;

        // Update state based on visibility only if not initially visible
        if (!isInitiallyVisible && elementIsVisible) {
          setIsVisible(true);
          setIsInitiallyVisible(true);
        }
      }
    }, 100), // Adjust the delay as needed
    [isInitiallyVisible]
  );

  useEffect(() => {
    const debouncedScroll = handleScroll;
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]); 

  return [targetRef, isVisible];
};

export default SectionVisibleHook;