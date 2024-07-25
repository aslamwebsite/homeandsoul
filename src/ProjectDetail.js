import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slider from './component/Slider/Index';
import Gallery from './component/Gallery/Index';
import Contact from './component/Contact/Index';
import { BasePath } from './component/BasePath/Index';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FixedStrip from './component/Tabs/Tabs';
import Noimage from './images/noimage.jpg';

const ProjectDetail = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const { slug } = useParams();
  const fullpageApiRef = useRef(null);  
  const location = window.location.href;
  const pathSegments = location.split('/');
  const BredCat = pathSegments[4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/project_details.php?url=${slug}`);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setProjectDetails(response.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log('Key pressed:', event.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleTitleClick = (index) => {
    if (fullpageApiRef.current) {
      fullpageApiRef.current.moveTo(index + 1);
      setActiveSection(index);
    }
  };

  const sectionTitles = useMemo(() => [
    "Overview",
    projectDetails?.section1?.heading,
    projectDetails?.section2?.heading,
    projectDetails?.section3?.heading,
    projectDetails?.section4?.heading,
    projectDetails?.section5?.heading,
    projectDetails?.section6?.heading,
    projectDetails?.section7?.heading,
    projectDetails?.gallery?.length ? "Gallery" : null,
    "Downloads",
    "Contact Us"
  ].filter(Boolean), [projectDetails]);

  const sliderData = useMemo(() => projectDetails?.banner ? [{
    imagePath: projectDetails.banner.bannerPath,
    logo: projectDetails.banner.logo,
    title: projectDetails.banner.bannerHeading,
    mobimgPath: projectDetails.banner.mbannerPath,
  }] : [], [projectDetails]);

  const renderSection = (section, sectionNumber) => {
    if (!section) return null;
    const { heading, image, description } = section;
    if (!heading || !description) return null;
    return (
      <div className="section" key={sectionNumber}>
        <div className='projectscroll first-stn'>
          <img src={image || Noimage} alt={heading || "Placeholder"} />
          {(description.length === 0 || description[0] === '') ? ( null ) : (
          <div className='projectscont'>
            <div className="details flex-center">
              <div className='detailHeading'>
                <h4>{heading}</h4>
              </div>
              <div className='detailContent'>
                <p>{description.map((desc, index) => <span key={index}>{desc}</span>)}</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <>
      <FixedStrip 
        titles={sectionTitles} 
        onClick={handleTitleClick} 
        activeIndex={activeSection} 
        Slug={slug}
        Category={projectDetails?.category}
        Whitelogo={projectDetails?.banner?.logo2}
        BredCat={BredCat}
      />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        keyboardScrolling={true}
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
                  <Slider Data={sliderData} mobHeight={'projectSliderwith'}/>
                </div>
              </div>

              {renderSection(projectDetails?.section1, 1)}
              {renderSection(projectDetails?.section2, 2)}
              {renderSection(projectDetails?.section3, 3)}
              {renderSection(projectDetails?.section4, 4)}
              {renderSection(projectDetails?.section5, 5)}
              {renderSection(projectDetails?.section6, 6)}
              {renderSection(projectDetails?.section7, 7)}

              {projectDetails?.gallery && projectDetails.gallery.length > 0 && (
                <div className="section projectGallery">
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
              <div className="section">
                <div className='projectscroll d-flex align-items-end flex-wrap downloadSection position-relative'>
                  <div className='col-12 float-start downloadTab'>
                    <div className='col-12 float-start'>
                      <div className='title flex-center col-12 float-start flex-wrap'>
                        <span className='col-12 float-start'>Quick Links</span>
                        <h3 className='heading bigFont text-black col-12 float-start'>Downloads</h3>
                      </div>
                      <div className='col-12 float-start quickTabs flex-center gap-25'>
                        <a onClick={() => fullpageApi.moveSectionDown()}><span>Brochure</span></a>
                        {projectDetails.floor_plans && 
                        <a href={projectDetails.floor_plans} target='_blank'><span>Floor Plans</span></a>
                      }
                        <Link 
                          to={`/construction/${slug}`} 
                          state={{ cat: projectDetails.heading }}
                        >
                          <span>Construction Updates</span>
                        </Link>
                      </div>
                      {projectDetails.rera_number && 
                        <div className='col-12 float-start quickTabsrera wrap quickTabs'>
                          <span>{projectDetails.rera_number}</span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="section proDetail">
                <Contact Data={projectDetails.address}/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default ProjectDetail;
