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
  const [pageData, setPageData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    const validCategories = ['townships', 'homes', 'retail', 'offices'];

    if (!validCategories.includes(cat.toLowerCase())) {
      setError(new Error('Invalid category'));
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/projects.php?cat=${cat}`);
        setPageData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cat]);

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
    case 'retail':
      title = 'Retail';
      break;
    case 'offices':
      title = 'Offices';
      break;
    default:
      title = 'Projects';
  }

  return (
    <>
      <Container _parentClass={'m-0'}>
        <BreadCrumb pageName={title} />
      </Container>
      <WebContainer _parentClass={'projects p-100 pt-0'}>
        <Title firstHeading={title} />
        <div className="col-12 float-start categoryimage flex-center gap-25 flex-wrap">
          {pageData && pageData.length > 0 ? (
            pageData.map((project) => (
              <div className="projectslider" key={project.id}>
                {project.linkActive === '1' ? (
                  <a href={`/projects/${project.cat.toLowerCase()}/${project.slug}`}>
                    <figure className="snip0016">
                      {project.image ? (
                        <img src={project.image} alt={project.name} />
                      ) : (
                        <img src={Noimage} alt="Home & Shoul" />
                      )}
                      <figcaption>
                        <h3>{project.name}</h3>
                        <p>{project.location}</p>
                        <p>Know More</p>
                      </figcaption>
                    </figure>
                  </a>
                ) : (
                  <figure className="snip0016">
                    {project.image ? (
                      <img src={project.image} alt={project.name} />
                    ) : (
                      <img src={Noimage} alt="Home & Shoul" />
                    )}
                    <figcaption>
                      <h3>{project.name}</h3>
                      <p>{project.location}</p>
                      <p>Know More</p>
                    </figcaption>
                  </figure>
                )}
              </div>
            ))
          ) : (
            <div>No projects available in this category.</div>
          )}
        </div>
      </WebContainer>
    </>
  );
};

export default Project;
