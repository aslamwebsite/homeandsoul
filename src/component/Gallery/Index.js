import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Index = ({Data}) => {
  const slideData = Data
  return (
    <>
      <div className="galleryslider col-12 float-start">
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
      </div>
    </>
  );
};

export default Index;
