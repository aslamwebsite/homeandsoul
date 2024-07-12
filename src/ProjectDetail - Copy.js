import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slider from './component/Slider/Index';
import Gallery from './component/Gallery/Index';
import Contact from './component/Contact/Index';
import LocationMap from './component/Location/Locationpop';
import { BasePath } from './component/BasePath/Index';
import { useParams } from "react-router-dom";
import axios from "axios";
import FixedStrip from './component/Tabs/Tabs';
import Noimage from './images/noimage.jpg';
import downloadImage from './images/downloadBanner.webp'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parse from 'html-react-parser';
import WebContainer from './component/WebContainer/Index'

const ProjectDetail = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [expanded, setExpanded] = useState(false);
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
        console.log(response.data);
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

  const sectionTitles = useMemo(() => [
    "Overview",
    projectDetails?.section1?.heading,
    projectDetails?.section2?.heading,
    projectDetails?.section3?.heading,
    projectDetails?.section4?.heading,
    projectDetails?.section5?.heading,
    projectDetails?.section6?.heading,
    projectDetails?.section7?.heading,
    projectDetails?.location_map ? "Location Map" : null,
    projectDetails?.gallery && projectDetails.gallery.length > 0 ? "Gallery" : null,
    "Contact Us"
  ].filter(Boolean), [projectDetails]);

  const sliderData = useMemo(() => projectDetails?.banner ? [{
    imagePath: projectDetails.banner.bannerPath,
    logo: projectDetails.banner.logo,
    title: projectDetails.banner.bannerHeading,
  }] : [], [projectDetails]);

  const renderSection = (section, sectionNumber) => {
    if (!section) return null;
    const { heading, image, description } = section;
    if (!heading || !description) return null;
    return (
      <div className="section" key={sectionNumber}>
        <div className='projectscroll first-stn'>
          <img src={image || Noimage} alt={heading || "Placeholder"} />
          <div className='projectscont'>
            <div className="details flex-center">
              <div className='detailHeading'>
                <h4>{heading}</h4>
              </div>
              <div className='detailContent'>
                <p>
                  {description.map((desc, index) => (
                    <span key={index}>{desc}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="preloader"></div>;
  }

  if (error) return <div>Error loading data: {error.message}</div>;
  const faqData = [
    {
      id: 1,
      title: 'What is NRI?',
      description: '<p>An NRI is a Non-Resident Indian.</p>'
    },
    {
      id: 2,
      title: 'How can NRIs invest in Indian real estate?',
      description: '<p>NRIs can invest through various channels.</p>'
    },
  ];
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <FixedStrip 
        titles={sectionTitles} 
        onClick={handleTitleClick} 
        activeIndex={activeSection} 
        Slug={slug}
        Category={projectDetails.category}
        Whitelogo={projectDetails.banner.logo2}
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

              {renderSection(projectDetails?.section1, 1)}
              {renderSection(projectDetails?.section2, 2)}
              {renderSection(projectDetails?.section3, 3)}
              {renderSection(projectDetails?.section4, 4)}
              {renderSection(projectDetails?.section5, 5)}
              {renderSection(projectDetails?.section6, 6)}
              {renderSection(projectDetails?.section7, 7)}

              {projectDetails?.location_map && (
                <div className="section">
                  <div className='projectscroll d-flex align-items-end flex-wrap'>
                    <div className='col-12 float-start proGallery'>
                      <LocationMap Data={projectDetails.location_map} Data2={projectDetails.location_map2}/>
                    </div>
                  </div>
                </div>
              )}

              {projectDetails?.gallery && projectDetails.gallery.length > 0 && (
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
              <div className="section">
              <div className='projectscroll d-flex align-items-end flex-wrap downloadSection position-relative'>
              <img src={downloadImage} alt='Quick Links'/>
                    <div className='col-12 float-start downloadTab'>
                      <div className='col-12 float-start'>
                      <div className='title flex-center'>
                        <span className='m-0 text-white'>Quick Links</span>
                      </div>
                      <div className='col-12 float-start quickTabs flex-center gap-25'>
                          <span>Brochure</span>
                          <span>Floor Plan</span>
                          <span>Construction Updates</span>
                      </div>
                      <div className='col-12 float-start quickTabsrera wrap quickTabs'>
                          <span>HARERA Registration No. 77 of 2023</span>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="section">
              <div className='projectscroll d-flex align-items-end flex-wrap  text-center position-relative'>
              <div className='col-12 float-start proGallery'>
                  <WebContainer _parentClass={'faqDetailpage'}>
                  <div className='title'>
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                  </div>
                  <div className="col-12 float-start Accordion">
      {faqData.length > 0 ? (
        faqData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              className="homeSoulAccordion"
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{parse(item.description)}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography>No FAQs available</Typography>
      )}
    </div>
                  </WebContainer>
                  </div>
              </div>
              </div>
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
