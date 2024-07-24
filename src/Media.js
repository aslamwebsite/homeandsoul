import React, { useState, useEffect } from "react";
import axios from 'axios';
import Webcontainer from "./component/WebContainer/Index";
import Title from "./component/Title/Index";
import Gallery from "./component/Gallery/Gallery";
import "./component/Gallery/Gallery.css";

const Media = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Press Release');
  const [activeCategory, setActiveCategory] = useState('Press Release');

  useEffect(() => {
    const fetchGalleryData = async () => {
      const category = selectedCategory.toLowerCase().replace(' ', '');
      const url = `https://triverseadvertising.com/homeandsoul_website/admin-portal/api/media_gallery.php?cat=${category}`;
      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data); // Log the response data
        setGalleryData(response.data);
      } catch (error) {
        console.error("Error fetching the gallery data:", error);
      }
    };

    fetchGalleryData();
  }, [selectedCategory]);

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
    <Webcontainer _parentClass={"media"}>
      <Title secondHeading={selectedCategory} firstHeading={"Media & News"} />
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
  );
};

export default Media;
