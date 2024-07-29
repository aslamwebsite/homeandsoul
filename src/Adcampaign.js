import React, { useState, useEffect } from "react";
import axios from 'axios';
import Webcontainer from "./component/WebContainer/Index";
import Title from "./component/Title/Index";
import Gallery from "./component/Gallery/Gallery";
import "./component/Gallery/Gallery.css";
import { BasePath } from './component/BasePath/Index';
import { NavLink } from "react-router-dom";

const Adcampaign = () => {
  const [pageData, setpageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/media_gallery.php?cat=adcampaign`);
        setpageData(response.data);
        console.log(response.data);
      } 
     
      catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const uniqueMonths = [
    ...new Set(
      pageData.map((item) => {
        const date = new Date(item.datemonth);
        return date.toLocaleString("default", { month: "short" }).toUpperCase();
      })
    ),
  ];

  const uniqueYears = [
    ...new Set(
      pageData.map((item) => {
        const date = new Date(item.datemonth);
        return date.getFullYear().toString();
      })
    ),
  ];

  return (
    <Webcontainer _parentClass={"media"}>
      <div className="title flex-center col-12 float-start flex-wrap text-center position-relative showTextcont">
        <h1 className="col-12 float-start subTitle">{'Media & News'}</h1>
        <h2 className="heading bigFont text-black col-12 float-start">{'Ad Campaign'}</h2>
    </div>
      <div className="row">
        <div className="column3">
          <ul className="medianavbar">
          <li><NavLink to='/media'><h3>Press Release</h3></NavLink></li>
          <li  className="active"><NavLink to='/media/ad-campaign'><h3>Ad Campaign</h3></NavLink></li>
          </ul>
        </div>
        <Gallery
          gallery_data={pageData}
          photoGallery={true}
          photoTabs={true}
          uniqueMonths={uniqueMonths}
          uniqueYears={uniqueYears}
        />
      </div>
    </Webcontainer>
  );
};

export default Adcampaign;
