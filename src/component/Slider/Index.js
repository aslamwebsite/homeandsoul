import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { motion } from "framer-motion";
import Noimage from "../../images/noimage.jpg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Index = ({ Data = [], parentClass, mobHeight }) => {
  const [isZoomIn, setIsZoomIn] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const sectionRef = useRef();
  let classCounter = 1;

  const getNextClass = () => {
    const className = `hsoul${String(classCounter).padStart(2, "0")}`;
    classCounter += 1;
    return className;
  };

  const toggleZoomClass = () => {
    setIsZoomIn((prev) => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleZoomClass, 5000);
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`position-relative layerafter m-0 ${parentClass}`}>
      <motion.div
        initial="initial"
        animate="enter"
        className={`${styles.landing} justify-content-end Heroslider`}
        ref={sectionRef}
      >
        <div
          className={`${styles.homeslider} downArrow`}
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={false}
            initialSlide={0}
            speed={2500}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Mousewheel, Pagination, Navigation, EffectFade]}
            grabCursor={true}
            loop={true}
            effect="fade"
            className="mySwiper"
          >
            {Data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiperslider position-relative col-12 float-start">
                  <Link to={slide.link == null ? "#" : slide.link}>
                    <div className={`${styles.sliderdiv} ${mobHeight}`}>
                      <div
                        className={`projectbanner overflow-hidden ${
                          isZoomIn ? "zoom-in" : "zoom-out"
                        }`}
                      >
                        <img
                          src={
                            isMobile
                              ? slide.mobimgPath || slide.imagePath || Noimage
                              : slide.imagePath || Noimage
                          }
                          width={isMobile ? 630 : 1750}
                          height={isMobile ? 800 : 850}
                          alt={slide.title.replace(/<\/?[^>]+(>|$)/g, "")}
                        />
                      </div>
                      {slide.logo && (
                        <div className="prologo flex-center">
                          <img src={slide.logo} alt="Prologo" />
                        </div>
                      )}
                    </div>
                    <div className={`creativeslide ${getNextClass()}`}>
                      {index === 0 ? (
                        <h1
                          className="heading bigFont text-start text-white text-uppercase"
                          dangerouslySetInnerHTML={{ __html: slide.title }}
                        ></h1>
                      ) : (
                        <h2
                          className="heading bigFont text-start text-black"
                          dangerouslySetInnerHTML={{ __html: slide.title }}
                        ></h2>
                      )}
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Index;
