import React from 'react';
import Container from '../Container/Index';
import Title from '../../component/Title/Index';
import noimage from '../../images/noimage.jpg'; 

const isValidUrl = (url) => {
  return url && typeof url === 'string' && url.trim() !== '';
};

const Index = ({ Data }) => {
  if (!Data || !Array.isArray(Data)) {
    return null;
  }

  return (
    <Container _parentClass={'upComingStn'}>
      <Title firstHeading={'IN PLANS'} secondHeading={'WHAT’S NEXT'} />
      <div 
        className='col-12 float-start' 
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        {Data.map(plan => (
          <div key={plan.id} className='Upcomingimg loadeffect'>
            <img src={isValidUrl(plan.featured_images1) ? plan.featured_images1 : noimage} alt={plan.project_name} />
            <h4>{plan.project_name}</h4>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Index;
