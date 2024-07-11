import React, { useState } from "react";
import Webcontainer from "./component/WebContainer/Index";
import Title from "./component/Title/Index";
import Gallery from "./component/Gallery/Gallery";
import "./component/Gallery/Gallery.css";
import Gallery01 from './images/gallery01.jpg';
import Gallery02 from './images/gallery02.jpeg';

const galleryData = [
  { imageUrl: Gallery01, thumbnailUrl: Gallery01, titleData: 'Press Release', news_paperName: 'News Paper 1', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Jan 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Feb 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Mar 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Apr 2024' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'May 2023' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Jun 2023' },
  { imageUrl: Gallery02, thumbnailUrl: Gallery02, titleData: 'Ad Campaign', news_paperName: 'News Paper 2', datemonth: 'Jan 2024' }
];

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('Press Release');
  const [activeCategory, setActiveCategory] = useState('Press Release');

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
      <Webcontainer _parentClass={"media"}>
        <Title
          secondHeading={`${selectedCategory}`}
          firstHeading={"Media & News"}
        />
        <div className="row">
          <div className="column3">
            <ul className="medianavbar">
              {categories.map((category) => (
                <li
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => handleCategoryChange(category)}
                >
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>

          <Gallery
            gallery_data={filteredGalleryData}
            photoGallery={true}
            photoTabs={true}
            uniqueMonths={uniqueMonths}
            uniqueYears={uniqueYears}
          />
        </div>
      </Webcontainer>
    </>
  );
};

export default Media;
