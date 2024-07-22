import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Parallax } from 'react-parallax';
import Contact from './component/Contact/Index';
import BreadCrumb from './component/BreadCrumb/Index';
import Container from './component/Container/Index';
import { BasePath } from './component/BasePath/Index';

const ContactPage = () => {
  const [pageData, setpageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/contact_details.php`);
        setpageData(response.data);
        console.log(response.data);
      } 
     
      catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);
    return isIOS || isMac ? 100 : 300;
  };


  return (
    <>
      <Parallax
       bgImage={pageData.bannerImage[0].imagePath}
        strength={getStrengthValue()}
        className="flex-center col-12 float-start parallaxBanner"
      >
        <div className="container position-relative">
          <div className="creativeslide">
            <h3 className="heading bigFont text-start text-black">
            </h3>
            {pageData.bannerImage.length > 0 && pageData.bannerImage[0].title ? (
              <h3
                className="heading bigFont text-start"
                dangerouslySetInnerHTML={{ __html: pageData.bannerImage[0].title }}
              />
            ) : (
              <h3 className="heading bigFont text-start">Title Not Available</h3>
            )}
          </div>
        </div>
      </Parallax>
      <Container _parentClass="m-0">
        <BreadCrumb pageName="Contact Us" />
      </Container>
      <div className="section proDetail">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
