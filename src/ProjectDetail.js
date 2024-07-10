import React, { useState, useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slider from './component/Slider/Index';
import Gallery from './component/Gallery/Index';
import Contact from './component/Contact/Index';
import LocationMap from './component/Location/Locationpop';
import { BasePath } from './component/BasePath/Index';
import { useParams } from "react-router-dom";
import axios from "axios";
import FixedStrip from './component/Tabs/Tabs';
import Noimage from './images/noimage.jpg'

const ProjectDetail = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(0); 
  const { slug } = useParams();
  const fullpageApiRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BasePath}/project_details.php?url=${slug}`
        );
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setProjectDetails(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleTitleClick = (index) => {
    if (fullpageApiRef.current) {
      fullpageApiRef.current.moveTo(index + 1);
      setActiveSection(index); 
    }
  };

  if (loading) {
    return <div className="preloader"></div>;
  }

  if (error) return <div>Error loading data: {error.message}</div>;

  const sectionTitles = [
    "Overview",
    projectDetails.section1?.heading,
    projectDetails.section2?.heading,
    projectDetails.section3?.heading,
    projectDetails.section4?.heading,
    projectDetails.location_map ? "Location Map" : null,
    projectDetails.gallery?.desktop_image ? "Gallery" : null,
    "Contact Us"
  ].filter(Boolean);

  const sliderData = projectDetails.banner ? [{
    imagePath: projectDetails.banner.bannerPath,
    logo: projectDetails.banner.logo,
    title: projectDetails.banner.bannerHeading,
  }] : [];

  return (
    <>
      <FixedStrip 
        titles={sectionTitles} 
        onClick={handleTitleClick} 
        activeIndex={activeSection} 
      />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        onLeave={(origin, destination, direction) => {
          fullpageApiRef.current = destination.fullpageApi;
          setActiveSection(destination.index); 
        }}
        render={({ state, fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className='projectscroll first-stn align-items-end d-flex Herosection'>
                  <Slider Data={sliderData} />
                </div>
              </div>

              {projectDetails.section1 && (
                <div className="section">
                  <div className='projectscroll first-stn'>
                    {projectDetails.section1.image ? (<img src={projectDetails.section1.image} alt={projectDetails.section1.heading} />) : (<img src={Noimage} alt="Home & Shoul" />)}
                    <div className='projectscont'>
                      <div className="details flex-center">
                        <div className='detailHeading'>
                          <h4>{projectDetails.section1.heading}</h4>
                        </div>
                        <div className='detailContent'>
                          <p>
                            {projectDetails.section1.description.map((desc, index) => (
                              <span key={index}>{desc}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {projectDetails.section2 && (
                <div className="section">
                  <div className='projectscroll first-stn'>
                    {projectDetails.section2.image ? (<img src={projectDetails.section2.image} alt={projectDetails.section1.heading} />) : (<img src={Noimage} alt="Home & Shoul" />)}
                    <div className='projectscont'>
                      <div className="details flex-center">
                        <div className='detailHeading'>
                          <h4>{projectDetails.section2.heading}</h4>
                        </div>
                        <div className='detailContent'>
                          <p>
                            {projectDetails.section2.description.map((desc, index) => (
                              <span key={index}>{desc}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {projectDetails.section3 && (
                <div className="section">
                  <div className='projectscroll first-stn'>
                  {projectDetails.section3.image ? (<img src={projectDetails.section3.image} alt={projectDetails.section1.heading} />) : (<img src={Noimage} alt="Home & Shoul" />)}
                    <div className='projectscont'>
                      <div className="details flex-center">
                        <div className='detailHeading'>
                          <h4>{projectDetails.section3.heading}</h4>
                        </div>
                        <div className='detailContent'>
                          <p>
                            {projectDetails.section3.description.map((desc, index) => (
                              <span key={index}>{desc}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {projectDetails.section4 && (
                <div className="section">
                  <div className='projectscroll first-stn'>
                    {projectDetails.section4.image ? (<img src={projectDetails.section4.image} alt={projectDetails.section1.heading} />) : (<img src={Noimage} alt="Home & Shoul" />)}
                    <div className='projectscont'>
                      <div className="details flex-center">
                        <div className='detailHeading'>
                          <h4>{projectDetails.section4.heading}</h4>
                        </div>
                        <div className='detailContent'>
                          <p>
                            {projectDetails.section4.description.map((desc, index) => (
                              <span key={index}>{desc}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {projectDetails.location_map && 
              <div className="section">
              <div className='projectscroll d-flex align-items-end flex-wrap'>
              <div className='col-12 float-start proGallery'>
                <LocationMap Data={projectDetails.location_map} />
                </div>
                </div>
              </div>
              }
              {projectDetails.gallery.desktop_image && (
                <div className="section">
                  <div className='projectscroll d-flex align-items-end flex-wrap'>
                    <div className='col-12 float-start proGallery'>
                      <div className='title flex-center'>
                        <span className='m-0'>Gallery</span>
                      </div>
                      <Gallery Data={projectDetails.gallery} />
                    </div>
                  </div>
                </div>
              )}
              <div className="section proDetail">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default ProjectDetail;
