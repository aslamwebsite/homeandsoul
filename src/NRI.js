import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parse from 'html-react-parser';
import { BasePath } from './component/BasePath/Index';
import WebContainer from './component/WebContainer/Index';
import { Parallax } from 'react-parallax';
import Title from './component/Title/Index';
import BreadCrumb from './component/BreadCrumb/Index';
import Container from './component/Container/Index';

const NRI = () => {
  const [faqData, setFaqData] = useState({ bannerImage: [], nris: [] });
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/nri.php`);
        setFaqData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setError('Failed to fetch data');
        setFaqData({ bannerImage: [], nris: [] });
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);
    return isIOS || isMac ? 100 : 300;
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <>
      <Parallax
        bgImage={faqData.bannerImage.length > 0 ? faqData.bannerImage[0].imagePath : ''}
        strength={getStrengthValue()}
        className="flex-center col-12 float-start parallaxBanner"
      >
        <div className="container position-relative">
          <div className="creativeslide">
            {faqData.bannerImage.length > 0 && faqData.bannerImage[0].title ? (
              <h1
                className="heading bigFont text-start blackText"
                dangerouslySetInnerHTML={{ __html: faqData.bannerImage[0].title }}
              />
            ) : (
              <h3 className="heading bigFont text-start">Title Not Available</h3>
            )}
          </div>
        </div>
      </Parallax>
      <Container _parentClass="m-0 bgcolor">
        <BreadCrumb pageName="NRI" />
      </Container>
      <WebContainer _parentClass="nriSection bgcolor m-0 p-100">
        {/* <Title firstHeading="" secondHeading="" /> */}
        <div className="title flex-center col-12 float-start flex-wrap text-center position-relative showTextcont">
        <h2 className="col-12 float-start subTitle m-0">{'Home & Soul'}</h2>
        <h3 className="heading bigFont text-black col-12 float-start">{'Right Time To Turn To India'}</h3>
    </div>
        <div className="col-12 float-start Accordion">
          {faqData.nris.length > 0 ? (
            faqData.nris.map((item) => (
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
    </>
  );
};

export default NRI;
