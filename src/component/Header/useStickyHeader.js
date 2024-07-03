import { useEffect } from 'react';

const useStickyHeader = (headerRef, className = 'sticky') => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add(className);
      } else {
        headerRef.current.classList.remove(className);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerRef, className]);
};

export default useStickyHeader;
