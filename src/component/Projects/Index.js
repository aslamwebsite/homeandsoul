import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/effect-fade';
import { Mousewheel, Autoplay, Pagination, Navigation, Zoom, EffectFade } from 'swiper/modules';
import '../Projects/projects.css';
import Container from '../Container/Index';
import Title from '../Title/Index';
import noimage from '../../images/noimage.jpg';

const isValidUrl = (url) => {
  return url && typeof url === 'string' && url.trim() !== '';
};

const defaultImage = noimage;

const Index = ({ Data }) => {
  if (!Data || !Array.isArray(Data)) {
    return null;
  }

  return (
    <>
      <Container _parentClass={'homeParent'}>
        <Title firstHeading={'Featured Products'} grandClass={'titlePosition changePositionResposniive'} />
        {Data.map((project, index) => (
          <div
            className='projects col-12 float-start position-relative'
            key={index}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine"
          >
            <div
              className='protitle desktop-show'
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              <h4>{project.project_name}</h4>
            </div>
            <div className='projectinfo'>
              <div
                className='proinfochild'
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-easing="ease-in-sine"
              >
                <h4>{project.project_name}</h4>
                <ul>
                  {Array.isArray(project.project_features) && project.project_features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='projectSlider loadeffect'>
              <div className='projectLogo'>
                {isValidUrl(project.logo) && <img src={project.logo} alt={`${project.project_name} logo`} />}
              </div>
              <div className="col-12 float-start">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  centeredSlides={true}
                  initialSlide={0}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={2500}
                  navigation={true}
                  modules={[Mousewheel, Autoplay, Pagination, Navigation, Zoom, EffectFade]}
                  zoom={true}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  loop={true}
                  className="mySwiper"
                >
                  {isValidUrl(project.featured_images1) && (
                    <SwiperSlide>
                      <div className="swiper-container">
                        <img src={project.featured_images1} alt={`${project.project_name} slide`} width="500" height="350" />
                      </div>
                    </SwiperSlide>
                  )}
                  {isValidUrl(project.featured_images2) && (
                    <SwiperSlide>
                      <div className="swiper-container">
                        <img src={project.featured_images2} alt={`${project.project_name} slide`} width="500" height="350" />
                      </div>
                    </SwiperSlide>
                  )}
                  {isValidUrl(project.featured_images3) && (
                    <SwiperSlide>
                      <div className="swiper-container">
                        <img src={project.featured_images3} alt={`${project.project_name} slide`} width="500" height="350" />
                      </div>
                    </SwiperSlide>
                  )}
                  {!(isValidUrl(project.featured_images1) || isValidUrl(project.featured_images2) || isValidUrl(project.featured_images3)) && (
                    <SwiperSlide>
                      <div className="swiper-container">
                        <img src={defaultImage} alt="Default slide" width="500" height="350" />
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
            <div
              className="wrap flex-center"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-easing="ease-in-sine"
            >
              {project.linkActive === '1' ? (
              <a className="btn-11" href={`/projects/homes/${project.slug}`}><span>Know More</span></a>
            ) : (
              <a className="btn-11"><span>Know More</span></a>
            )}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Index;
