import React from 'react';
import Container from './component/Container/Index';
import Webcontainer from './component/WebContainer/Index';
import Title from './component/Title/Index';
import BreadCrumb from './component/BreadCrumb/Index';
import MediaNavabar from './component/Header/MediaNavabar';
import Gallery from './component/Gallery/Index';
import Gallery01 from './images/goa.webp';
import Gallery02 from './images/goa.webp';

const Media = () => {
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
      <Webcontainer>
        <Title secondHeading={'Press Release'} firstHeading={'Media & News'} />
        <div className='row'>
          
        </div>
      </Webcontainer>
    </>
  );
};

export default Media;
