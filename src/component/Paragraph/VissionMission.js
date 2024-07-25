import React, { useEffect, useState } from "react";
import Counter from "../CountLoader/Loader";
import Container from "../Container/Index";
import "../CountLoader/Counter.css";
import bannerImage from '../../images/Vission-banner.webp';
import { Parallax } from 'react-parallax';
import Title from '../Title/Index';

const VissionMission = ({Data}) => {

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
     <div className="container">
        <div className="web-container">
        <div className='aboutContext text-white'>
                <Title firstHeading={Data.title} parentClass={'text-white'}/>
        <div className="row flex-center justify-content-between">
            <div className='col-lg-5'>
               <Title secondHeading={Data.visionHeading} childClass={'text-white'} grandClass={'titleText'}/>
               <p data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine">{Data.visionCont}</p>
            </div>
            <div className='col-lg-5'>
            <Title secondHeading={Data.missionHeading} childClass={'text-white'} grandClass={'titleText'}/>
            <p data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine">{Data.missionCont}</p>
            </div>
        </div>
    </div>
        </div>
     </div>
    </Parallax>
  );
};

export default VissionMission;