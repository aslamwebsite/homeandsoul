import React from 'react'
import { Parallax } from 'react-parallax';
import bannerImage from './images/contactBanner.webp'
import Contact from './component/Contact/Index'
import BreadCrumb from './component/BreadCrumb/Index'
import Container from './component/Container/Index'

const ContactPage = () => {
  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);
    return isIOS || isMac ? 100 : 300;
  };
  return (
    <>
      <Parallax bgImage={bannerImage} strength={getStrengthValue()} className="flex-center col-12 float-start parallaxBanner">
        <div className='container position-relative'>
        <div className="creativeslide">
        <h3 className="heading bigFont text-start text-black">EXPECT <span>Exceptional</span></h3></div>
        </div>
        </Parallax>
      <Container _parentClass={`m-0`}> <BreadCrumb pageName={'Contact Us'} /></Container>
        <div className="section proDetail">
          <Contact />
        </div>
      </>
        )
}

        export default ContactPage