import React from "react";
import Counter from "../CountLoader/Loader";
import Container from "../Container/Index"
import "../CountLoader/Counter.css"
import bannerImage from '../../images/counter-banner.webp'
import { Parallax } from 'react-parallax';

const Index = () => {
  const countersData = [
    { startValue: 0, endValue: 8, speed: 400, label: "Projects Handled"},
    {
      startValue: 10,
      endValue: 20,
      speed: 400,
      label: "Lakh sq.ft. Delivered",
      Plus:"+"
    },
    {
      startValue: 0,
      endValue: 50,
      speed: 200,
      label: "Lakh sq.ft. in Development",
      Plus: "+",
    },
    {
      startValue: 1000,
      endValue: 5000,
      speed: 200,
      label: "Happy Customers",
      Plus: "+",
    },
  ];
  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);

    return isIOS || isMac ? 100 : 300;
  };
   return (

     <Parallax bgImage={bannerImage} strength={getStrengthValue()} className='flex-center col-12 float-start'>
      <Container>
      <div className="title col-12 float-start flex-center">
                    <span className="text-white" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">H&S GROUP IN NUMBERS</span>
                  </div>
    <div className={`numberrow col-12 float-start flex-center justify-content-evenly pt-5 position-relative`}
                >
                  {countersData &&
                    Array.isArray(countersData) &&
                    countersData.map((counter, index) => (
                      <div key={index} className="numbercolumn primary-color">
                        {counter.startValue !== undefined &&
                        counter.endValue !== undefined ? (
                          <div className="countercount d-flex justify-content-center ">
                            <Counter
                              startValue={counter.startValue}
                              endValue={counter.endValue}
                              speed={counter.speed}
                              className="m-0 p-0"
                            />
                            <span className="plussign">{counter.Plus}</span>
                            <span>{counter.Heading}</span>
                          </div>
                        ) : (
                          <div className="countercount d-flex">
                            <span>{counter.Plus}</span>
                            <span>{counter.Heading}</span>
                          </div>
                        )}
                        <div className="countercont m-0 text-center">
                          <p className="m-0 text-white">{counter.label}</p>
                        </div>
                      </div>
                    ))}
                </div>
                </Container>
                </Parallax>
             
  );
};

export default Index;
