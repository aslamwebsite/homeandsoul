import React, { useState } from "react";
import Webcontainer from "./component/WebContainer/Index";
import Title from "./component/Title/Index";
import Gallery from "./component/Gallery/Gallery";
import "./component/Gallery/Gallery.css";
import Gallery01 from './images/gallery01.jpg';
import Gallery02 from './images/gallery02.jpeg';
import Container from "./component/Container/Index";
import BreadCrumb from './component/BreadCrumb/Index'

const galleryData = [
  { imageUrl: Gallery01, thumbnailUrl: Gallery01, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Feb 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Mar 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Apr 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'May 2021' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jun 2022' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2023' },
  { imageUrl: Gallery01, thumbnailUrl: Gallery01, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Feb 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Mar 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Apr 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'May 2021' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jun 2022' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Constuctions Updates', datemonth: 'Jan 2023' }
];

const Construction = () => {
  const [selectedCategory, setSelectedCategory] = useState('Constuctions Updates');
  const [activeCategory, setActiveCategory] = useState('Constuctions Updates');

  const categories = [...new Set(galleryData.map(item => item.titleData))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  const filteredGalleryData = galleryData.filter(
    (item) => item.titleData === selectedCategory
  );

  const uniqueMonths = [
    ...new Set(
      galleryData.map((item) => {
        const date = new Date(item.datemonth);
        return date.toLocaleString("default", { month: "short" }).toUpperCase();
      })
    ),
  ];

  const uniqueYears = [
    ...new Set(
      galleryData.map((item) => {
        const date = new Date(item.datemonth);
        return date.getFullYear().toString();
      })
    ),
  ];

  return (
    <>
    <Container _parentClass={'m-0'}>
        <BreadCrumb pageName={'F Premiere'} pageChildName={'Construction Updates'} pageUrl={'/projects/homes/f-premiere'}/>
    </Container>
      <Webcontainer _parentClass={"constructionUpdates"}>
        <Title
          secondHeading={`F Premiere`}
          firstHeading={"Construction Updates"}
        />

          <Gallery
            gallery_data={filteredGalleryData}
            photoGallery={true}
            photoTabs={true}
            uniqueMonths={uniqueMonths}
            uniqueYears={uniqueYears}
          />
      </Webcontainer>
    </>
  );
};

export default Construction;
