import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Prologo from '../../images/page-three.webp';
import banner01 from '../../images/banner-01.webp';
import banner02 from '../../images/banner-02.webp';
import banner03 from '../../images/banner-03.webp';

const slideData = [
  {
    image: banner01,
    title: "READY SET <span>Slay</span>",
  },
  {
    image: banner02,
    title: "TO LIVE THE EXCEPTIONAL LOOK NO <span>Further</span>",
  },
  {
    image: banner03,
    title: "THE CITY WALK OF GREATER NOIDA WEST READY <span>Shine</span>",
  },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomIn, setIsZoomIn] = useState(true);
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  const toggleZoomClass = () => {
    setIsZoomIn((prev) => !prev);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleZoomClass, 6000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="position-relative layerafter m-0">
    <motion.div initial="initial" animate="enter" className={`${styles.landing} justify-content-end Heroslider`} ref={sectionRef}>
        <div className={`${styles.homeslider} downArrow`} data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={0}
            speed={2500}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Mousewheel, Autoplay, Pagination, Navigation, EffectFade]}
            grabCursor={true}
            loop={true}
            effect="fade"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="mySwiper"
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiperslider position-relative col-12 float-start">
                <div className={styles.sliderdiv}>
                  <div className={`projectbanner overflow-hidden ${isZoomIn ? 'zoom-in' : 'zoom-out'}`}>
                    <img
                      src={slide.image}
                      width="1740"
                      height="822"
                      alt=""
                      className='desktop-show'
                    />
                  </div>
                    <div className="prologo">
                      <img src={Prologo} alt='Prologo'/>
                    </div>
                    </div>
                    <div className={`creativeslide`}>
                      <h3 className="heading bigFont text-start text-black" dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
    </>
  );
}

export default Index;
