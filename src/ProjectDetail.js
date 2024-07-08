import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slider from './component/Slider/Index';
import Gallery from './component/Gallery/Index'
import Contact from './component/Contact/Index'
import LocationMap from './component/Location/Locationpop'
import { BasePath } from './component/BasePath/Index'
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetail = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
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

  if (loading) {
    return <div className="preloader"></div>;
  }
  
  // Prepare the data for Slider component
  if (error) return <div>Error loading data: {error.message}</div>;

  // Prepare the data for Slider component
  const sliderData = projectDetails.banner ? [{
    imagePath: projectDetails.banner.bannerPath,
    prologo: projectDetails.banner.logo,
    title: projectDetails.banner.bannerHeading,
  }] : [];

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className='projectscroll first-stn align-items-end d-flex Herosection'>
                <Slider Data={sliderData} />
              </div>
              <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
                <div className="downarrow"><a><span className="animated bounce"></span></a></div>
              </button>
            </div>

            {projectDetails.section1 && (
              <div className="section">
                <div className='projectscroll first-stn'>
                  <img src={projectDetails.section1.image} alt={projectDetails.section1.heading} />
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
                <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
                  <div className="downarrow"><span className="animated bounce"></span></div>
                </button>
              </div>
            )}

            {projectDetails.section2 && (
              <div className="section">
                <div className='projectscroll first-stn'>
                  <img src={projectDetails.section2.image} alt={projectDetails.section2.heading} />
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
                <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
                  <div className="downarrow"><span className="animated bounce"></span></div>
                </button>
              </div>
            )}

            {projectDetails.section3 && (
              <div className="section">
                <div className='projectscroll first-stn'>
                  <img src={projectDetails.section3.image} alt={projectDetails.section3.heading} />
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
                <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
                  <div className="downarrow"><span className="animated bounce"></span></div>
                </button>
              </div>
            )}

            {projectDetails.section4 && (
              <div className="section">
                <div className='projectscroll first-stn'>
                  <img src={projectDetails.section4.image} alt={projectDetails.section4.heading} />
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
                <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
                  <div className="downarrow"><span className="animated bounce"></span></div>
                </button>
              </div>
            )}
           <div className="section">
            <LocationMap Data={projectDetails.location_map}/>
            </div>
             {projectDetails.gallery && (
              <div className="section">
          <div className='projectscroll d-flex align-items-end flex-wrap'>
            <div className='col-12 float-start proGallery'>
           <div className='title flex-center'>
                <span className='m-0'>Gallery</span>
           </div>
            <Gallery Data={projectDetails.gallery}/>
                  <button onClick={() => fullpageApi.moveSectionDown()} className="proarrow">
            <div class="downarrow"><a><span className="animated bounce"></span></a></div>
            </button>
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
  );
}

export default ProjectDetail;
