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

const Index = () => {
  const projects = [
    {
      title: 'PAGE 3',
      location: 'Jaypee Greens, Greater Noida',
      features: ['Apartments, Penthouses and Villas', 'High-end specifications', 'Exclusive Club Velvet'],
      logo: { src: '/page-three.webp', alt: 'Page 3 Logo' },
      slides: [
        { id: 1, src: '/page-03_project.webp', alt: 'Slide 1' },
        { id: 2, src: '/premiere_project.webp', alt: 'Slide 2' },
        { id: 3, src: '/boulevard-walk_project.webp', alt: 'Slide 3' },
      ],
    },
    {
      title: 'PREMIERE',
      location: 'Some Location, City',
      features: ['Luxury Apartments', 'Premium Amenities', 'Great View'],
      logo: { src: '/premiere.webp', alt: 'Premiere Logo' },
      slides: [
        { id: 1, src: '/page-03_project.webp', alt: 'Slide 1' },
        { id: 2, src: '/premiere_project.webp', alt: 'Slide 2' },
        { id: 3, src: '/boulevard-walk_project.webp', alt: 'Slide 3' },
      ],
    },
    {
      title: 'BOULEVARD WALK',
      location: 'Another Location, City',
      features: ['Modern Design', 'Central Park', 'Shopping Mall'],
      logo: { src: '/boulevard-walk.webp', alt: 'Boulevard Walk Logo' },
      slides: [
        { id: 1, src: '/page-03_project.webp', alt: 'Slide 1' },
        { id: 2, src: '/premiere_project.webp', alt: 'Slide 2' },
        { id: 3, src: '/boulevard-walk_project.webp', alt: 'Slide 3' },
      ],
    },
  ];

  return (
    <>
      <Container>
        <div className='title col-12 float-start flex-center'>
          <span data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">Featured Products</span>
        </div>
        {projects.map((project, index) => (
          <div className='projects col-12 float-start position-relative' key={index} data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
            <div className='protitle' data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
              <h4>{project.title}</h4>
            </div>
            <div className='projectinfo'>
              <div className='proinfochild' data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
                <h4>{project.title}</h4>
                <ul>
                  <li>{project.location}</li>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='projectSlider loadeffect'>
              <div className='projectLogo'>
                <img src={project.logo.src} alt={project.logo.alt} />
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
                  {project.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="swiper-container">
                        <img src={slide.src} alt={slide.alt} width="500" height="350" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div class="wrap flex-center" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"><a class="btn-11"><span>Know More</span></a></div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Index;
