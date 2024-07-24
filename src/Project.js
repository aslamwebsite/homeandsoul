import React, { useEffect, useState } from 'react';
import WebContainer from './component/WebContainer/Index';
import Title from './component/Title/Index';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BasePath } from './component/BasePath/Index';
import Noimage from './images/noimage.jpg';
import BreadCrumb from './component/BreadCrumb/Index';
import Container from './component/Container/Index';

const Project = () => {
  const [pageData, setPageData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();
  const location = window.location.href;
  const pathSegments = location.split('/');

  useEffect(() => {
    const validCategories = ['townships', 'homes', 'commercial'];

    if (!validCategories.includes(cat.toLowerCase())) {
      setError(new Error('Invalid category'));
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/projects.php?cat=${cat}`);
        setPageData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cat]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -50; 
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error: {error.message || 'Something went wrong!'}</div>;
  }

  let title;
  switch (cat.toLowerCase()) {
    case 'townships':
      title = 'Townships';
      break;
    case 'homes':
      title = 'Homes';
      break;
    case 'commercial':
      title = 'Commercial Projects';
      break;
    default:
      title = 'Projects';
  }

  const sections = {
    MixedDevelopment: 'Mixed Development',
    Retail: 'Retail',
    Offices: 'Offices',
    HotelApartments: 'Hotel Apartments'
  };

  return (
    <>
      <Container _parentClass={'m-0'}>
        <BreadCrumb pageName={title} />
      </Container>
      <WebContainer _parentClass={'projects p-100 pt-0'}>
        <Title firstHeading={title} grandClass={'m-0'} />
        {cat.toLowerCase() === 'commercial' && (
          <div className='col-12 float-start commercialProject desktop-show'>
            <div className='tabs'>
              <ul className="flex-center">
                {Object.entries(sections).map(([sectionKey, sectionTitle]) => (
                  <li key={sectionKey} onClick={() => handleScroll(sectionKey)}>
                    {sectionTitle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {cat.toLowerCase() === 'commercial' ? (
          <>
            {Object.entries(sections).map(([sectionKey, sectionTitle]) => (
              <div id={sectionKey} key={sectionKey} className={'tabSection col-12 float-start p-100 pb-0'}>
                <Title firstHeading={sectionTitle} grandClass={'m-0'} />
                <div className="col-12 float-start categoryimage flex-center gap-25 flex-wrap">
                  {pageData[sectionKey] && pageData[sectionKey].length > 0 ? (
                    pageData[sectionKey].map((project) => (
                      <div
                        className={`projectslider ${pageData[sectionKey].length > 1 ? 'col-lg-6' : 'col-lg-12'}`}
                        key={project.id}
                      >
                        {project.linkActive === '1' ? (
                          <a href={`/projects/${pathSegments[4].toLowerCase()}/${project.slug}`}>
                            <figure className="snip0016">
                              {project.image ? (
                                <img src={project.image} alt={project.name} />
                              ) : (
                                <img src={Noimage} alt="Home & Soul" />
                              )}
                              <figcaption>
                                <h3>{project.name}</h3>
                                <p>{project.location}</p>
                                <p className='desktop-show'>Know More</p>
                              </figcaption>
                            </figure>
                          </a>
                        ) : (
                          <div className="Upcomingimg w-100">
                            {project.image ? (
                              <img src={project.image} alt={project.name} />
                            ) : (
                              <img src={Noimage} alt="Home & Soul" />
                            )}
                            <h4>{project.name}</h4>
                            <p>{project.location}</p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>No projects available in this category.</div>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="col-12 float-start categoryimage flex-center gap-25 flex-wrap">
            {pageData[cat] && pageData[cat].length > 0 ? (
              pageData[cat].map((project) => (
                <div className="projectslider" key={project.id}>
                  {project.linkActive === '1' ? (
                    <a href={`/projects/${pathSegments[4].toLowerCase()}/${project.slug}`}>
                      <figure className="snip0016">
                        {project.image ? (
                          <img src={project.image} alt={project.name} />
                        ) : (
                          <img src={Noimage} alt="Home & Soul" />
                        )}
                        <figcaption>
                          <h3>{project.name}</h3>
                          <p>{project.location}</p>
                          <p className='desktop-show'>Know More</p>
                        </figcaption>
                      </figure>
                    </a>
                  ) : (
                    <div className="Upcomingimg w-100">
                      {project.image ? (
                        <img src={project.image} alt={project.name} />
                      ) : (
                        <img src={Noimage} alt="Home & Soul" />
                      )}
                      <h4>{project.name}</h4>
                      <p>{project.location}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>No projects available in this category.</div>
            )}
          </div>
        )}
      </WebContainer>
    </>
  );
};

export default Project;
