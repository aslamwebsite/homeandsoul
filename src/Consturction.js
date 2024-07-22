import React, { useEffect, useState } from "react";
import Webcontainer from "./component/WebContainer/Index";
import Title from "./component/Title/Index";
import "./component/Gallery/Gallery.css";
import Container from "./component/Container/Index";
import BreadCrumb from './component/BreadCrumb/Index'
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";
import axios from "axios";
// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { BasePath } from './component/BasePath/Index';


const Construction = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/construction_updates.php?url=${slug}`);
        setPageData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pageData || !pageData.images || pageData.images.length === 0) {
    return <div>No data available</div>;
  }

  const galleryData = pageData.images.map((image) => ({
    imageUrl: image.actual,
    thumbnailUrl: image.thumbnail,
    titleData: pageData.title || 'Construction Updates',
  }));

  const formattedSlug = slug.replace(/-/g, ' ');

  return (
    <>
      <Container _parentClass={'m-0'}>
        <BreadCrumb pageName={`${slug}`} pageChildName={'Construction Updates'} pageUrl={`/projects/homes/${slug}`} />
      </Container>
      <Webcontainer _parentClass={"constructionUpdates"}>
        <Title
          secondHeading={formattedSlug}
          firstHeading={pageData.title}
          childClass={'textFormat'}
        />
        <div className="col-12 float-start">
          <LightGallery
            onInit={() => {
              console.log("LightGallery onInit callback");
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {galleryData.map((galData, index) => (
              <a key={index} href={galData.imageUrl}>
                <div className="galleryimg">
                  <img
                    src={galData.imageUrl}
                    alt={`${galData.titleData}`}
                  />
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      </Webcontainer>
    </>
  );
};

export default Construction;
