import React, { useEffect, useState } from "react";
import Counter from "../CountLoader/Loader";
import Container from "../Container/Index";
import "../CountLoader/Counter.css";
import bannerImage from '../../images/counter-banner.webp';
import { Parallax } from 'react-parallax';
import Title from '../Title/Index';

const Index = ({ Data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const countersData = Data.numberData;

  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);
    return isIOS || isMac ? 100 : 300;
  };

  return (
    <Parallax 
      bgImage={bannerImage} 
      strength={getStrengthValue()} 
      className='flex-center col-12 float-start numberCounter'
    >
      <Container _parentClass={'m-0'}>
        <Title firstHeading={'H&S GROUP IN NUMBERS'} parentClass={'text-white'} />
        <div className={`numberrow col-12 float-start flex-center justify-content-evenly pt-5 position-relative ${isMobile ? 'mobile-view' : ''}`}>
          {countersData && Array.isArray(countersData) && countersData.map((counter, index) => (
            <div key={index} className={`numbercolumn primary-color ${isMobile ? 'mobile-column' : ''}`}>
              {counter.startValue !== undefined && counter.endValue !== undefined ? (
                <div className="countercount d-flex justify-content-center">
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
