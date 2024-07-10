import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parse from 'html-react-parser';
import { BasePath } from './component/BasePath/Index';
import WebContainer from './component/WebContainer/Index'
import { Parallax } from 'react-parallax';
import bannerImage from './images/career_Banner.webp'
import Title from './component/Title/Index'

const NRI = () => {
  const [faqData, setFaqData] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/nri.php`);
        setFaqData(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
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
  return (
    <>
    <Parallax bgImage={bannerImage} strength={getStrengthValue()} className="flex-center col-12 float-start parallaxBanner" /> 
    <WebContainer _parentClass={'nriSection bgcolor m-0 p-100'}>
            <Title firstHeading={'Home & Soul'} secondHeading={'RIGHT TIME TO TURN TO INDIA'}/>
        <div className='col-12 float-start Accordion'>
      {faqData.map((item) => (
        <Accordion 
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            className='homeSoulAccordion'
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {parse(item.description)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </WebContainer>
    </>
  );
};

export default NRI;
