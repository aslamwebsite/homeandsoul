import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Index = ({ Data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, [galleryRef]);

  const slideData = Data;

  return (
    <div ref={galleryRef} className="galleryslider col-12 float-start">
      {isVisible && (
        <Swiper
          spaceBetween={0}
          slidesPerView={1.5}
          centeredSlides={true}
          initialSlide={0}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={true}
          modules={[Mousewheel, Autoplay, Pagination, Navigation]}
          effect="flip"
          grabCursor={true}
          loop={true}
          className="mySwiper"
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.desktop_image} alt={slide.alt_text} width="500" height="350" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Index;
