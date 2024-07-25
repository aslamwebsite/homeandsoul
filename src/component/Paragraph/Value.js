import React from 'react';
import Slider from 'react-slick';

import WebContainer from '../WebContainer/Index'


const Value = ({Data}) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    responsive: [
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <WebContainer _parentClass={'infographics sm-overflow'}>
<div className="col-12 float-start position-relative">
            <Slider {...slickSettings}>
              {Data.map((circle, index) => (
                <div key={index} className="text-center p-2" data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="300" data-aos-duration="800" data-aos-once='true'>
                  <div className="col-lg-11 m-auto col-12">
                  <div className="circle">
                    {circle.icon && <span>{circle.icon}</span>}
                    {circle.image && <span><img src={circle.image} alt={circle.title} /></span>}
                  </div>
                  <div className="circlecont">
                    <h4>{circle.title}</h4>
                    <p>{circle.description}</p>
                  </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
    </WebContainer>
  );
};

export default Value;
