import { useEffect, useState } from 'react';
import WebContainer from './component/WebContainer/Index';
import Title from './component/Title/Index';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BasePath } from './component/BasePath/Index';
import Noimage from './images/noimage.jpg'
import { Link } from 'react-router-dom';

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
        const response = await axios.get(`${BasePath}/projects.php?url=${cat}`);
        setPageData(response.data.filter(project => project.cat.toLowerCase() === cat.toLowerCase()));
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
      title = 'Townships Projects';
      break;
    case 'homes':
      title = 'Homes Projects';
      break;
    case 'retail':
      title = 'Retail Projects';
      break;
    case 'offices':
      title = 'Offices Projects';
      break;
    default:
      title = 'Projects';
  }

  return (
    <WebContainer _parentClass={'projects p-100 pt-0'}>
      <Title firstHeading={title} />
      <div className="col-12 float-start categoryimage flex-center gap-25 flex-wrap">
        {pageData && pageData.length > 0 ? (
          pageData.map((project) => (
            <div className="projectslider" key={project.id}>
              {project.linkActive === '1' ? (
                <Link to={`/projects/${project.cat.toLowerCase()}/${project.slug}`}>
                  <figure className="snip0016">
                    {project.image ? (
                      <img src={project.image} alt={project.name} />
                    ) : (
                      <img src="path_to_default_image.jpg" alt="Default" />
                    )}
                    <figcaption>
                      <h3>{project.name}</h3>
                      <p>{project.location}</p>
                      <p>Know More</p>
                    </figcaption>
                  </figure>
                </Link>
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
  );
};

export default Project;
