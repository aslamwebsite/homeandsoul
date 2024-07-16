import React from 'react'
import { Parallax } from 'react-parallax';
import bannerImage from './images/aboutBanner.webp'
import Contact from './component/Contact/Index'
import BreadCrumb from './component/BreadCrumb/Index'
import Container from './component/Container/Index'

const AboutHS = () => {
    const getStrengthValue = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
        const isMac = /MacIntel/.test(navigator.platform);
        return isIOS || isMac ? 100 : 300;
    };
  return (
    <>
        <div className='col-12 float-start'>
          <img src={bannerImage} alt='About Us Home and Soul'/>
        </div>
        <Container _parentClass={`m-0`}>  <BreadCrumb pageName={'Home and Soul'}/></Container>
    </>
  )
}

export default AboutHS