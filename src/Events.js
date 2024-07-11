import React from 'react';
import Container from './components/Container/Index';
import Webcontainer from './components/WebContainer/Index';
import Title from './components/Title/Index';
import BreadCrumb from './components/BreadCrumb/Index';
import MediaNavabar from './components/Header/MediaNavabar';
import Gallery from './components/Gallery/Index';
import Gallery01 from './images/gallery01.png';
import Gallery02 from './images/gallery02.png';

const Events = () => {
  const galleryData = [
    { imageUrl: Gallery01, thumbnailUrl: Gallery01, titleData: 'Image 1 Title', news_paperName: 'News Paper 1', datemonth: 'Jan 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Jan 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Jan 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Feb 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Mar 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Apr 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'May 2024' },
    { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Image 2 Title', news_paperName: 'News Paper 2', datemonth: 'Jun 2024' }
    
  ];

  const uniqueMonths = [...new Set(galleryData.map(item => {
    const date = new Date(item.datemonth);
    return date.toLocaleString('default', { month: 'short' }).toUpperCase();
  }))];

  const uniqueYears = [...new Set(galleryData.map(item => {
    const date = new Date(item.datemonth);
    return date.getFullYear().toString();
  }))];

  return (
    <>
      <Container>
        <BreadCrumb pageName={'Events'} />
      </Container>
      <Webcontainer _parentClass={'p-100'}>
        <Title secondHeading={'Events'} firstHeading={'Media & News'} />
        <div className='row'>
          <MediaNavabar />
          <Gallery gallery_data={galleryData} uniqueMonths={uniqueMonths} uniqueYears={uniqueYears} photoGallery={true}/>
        </div>
      </Webcontainer>
    </>
  );
};

export default Events;
