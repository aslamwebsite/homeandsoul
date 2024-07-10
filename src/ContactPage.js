import React from 'react'
import { Parallax } from 'react-parallax';
import bannerImage from './images/career_Banner.webp'
import Contact from './component/Contact/Index'

const ContactPage = () => {
    const getStrengthValue = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
        const isMac = /MacIntel/.test(navigator.platform);
        return isIOS || isMac ? 100 : 300;
    };
  return (
    <>
        <Parallax bgImage={bannerImage} strength={getStrengthValue()} className="flex-center col-12 float-start parallaxBanner" />
    <div className="section proDetail">
                <Contact />
              </div>
    </>
  )
}

export default ContactPage