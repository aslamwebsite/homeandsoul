import React, { useState, useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "../Gallery/Gallery.css";

const Gallery = ({
  gallery_data,
  uniqueMonths,
  uniqueYears,
  photoGallery,
  photoTabs,
}) => {
  const galleryRef = useRef(null);

  const [selectedMonth, setSelectedMonth] = useState(uniqueMonths[0]);
  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);
  const [monthsWithData, setMonthsWithData] = useState(uniqueMonths);
  const [yearsWithData, setYearsWithData] = useState(uniqueYears);

  useEffect(() => {
    if (galleryRef.current) {
      console.log("Gallery ref current:", galleryRef.current);
      console.log("LightGallery has been initialized");
    }
  }, []);

  useEffect(() => {
    const months = uniqueMonths.filter((month) => {
      return gallery_data.some((galData) => {
        const date = new Date(galData.datemonth);
        const monthStr = date
          .toLocaleString("default", { month: "short" })
          .toUpperCase();
        const year = date.getFullYear().toString();
        return monthStr === month && year === selectedYear;
      });
    });

    setMonthsWithData(months);

    if (!months.includes(selectedMonth)) {
      if (months.length > 0) {
        setSelectedMonth(months[0]);
      } else {
        alert(`No data available for the year ${selectedYear}`);
      }
    }
  }, [selectedYear, uniqueMonths, gallery_data, selectedMonth]);

  useEffect(() => {
    const years = uniqueYears.filter((year) => {
      return gallery_data.some((galData) => {
        const date = new Date(galData.datemonth);
        return date.getFullYear().toString() === year;
      });
    });

    setYearsWithData(years);

    if (!years.includes(selectedYear)) {
      if (years.length > 0) {
        setSelectedYear(years[0]);
      } else {
        alert(`No data available for the selected category`);
      }
    }
  }, [uniqueYears, gallery_data, selectedYear]);

  const filteredData = gallery_data.filter((galData) => {
    const date = new Date(galData.datemonth);
    const month = date
      .toLocaleString("default", { month: "short" })
      .toUpperCase();
    const year = date.getFullYear().toString();
    return month === selectedMonth && year === selectedYear;
  });

  return (
    <div className="column9">
      {photoTabs && (
        <div className="upper__tabs mb-5 d-flex justify-content-between align-items-center">
          <div className="col-Months">
            <ul className="d-flex px-5">
              {monthsWithData.map((month) => (
                <li
                  key={month}
                  className={selectedMonth === month ? "active" : ""}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </li>
              ))}
            </ul>
          </div>
          {uniqueYears.length > 1 && (
            <div className="col-Years">
              <select
                className="radius-0"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                disabled={yearsWithData.length === 0}
              >
                {yearsWithData.length === 0 ? (
                  <option>No data available</option>
                ) : (
                  yearsWithData.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))
                )}
              </select>
            </div>
          )}
        </div>
      )}
      <div className="lightGallerybox" ref={galleryRef}>
        {photoGallery ? (
          <LightGallery
            onInit={() => {
              console.log("LightGallery onInit callback");
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {filteredData.map((galData, index) => (
              <a key={index} href={galData.imageUrl}>
                <div className="galleryimg">
                  <img
                    src={galData.imageUrl}
                    alt={`${galData.titleData} ${galData.news_paperName}`}
                  />
                </div>
                <div className="lightcont">
                  <h4 className="m-0 heading5 fw-600 mb-2">
                    {galData.titleData}
                  </h4>
                  <h5 className="m-0">
                    {galData.news_paperName}
                  </h5>
                </div>
              </a>
            ))}
          </LightGallery>
        ) : (
          <div className="col-12 float-start">
            <div className="row">
              {filteredData.map((galData, index) => (
                <div className="col-lg-6 col-sm-6 col-12" key={index}>
                  <div className="Videobox">
                    <div className="db-thumb gallery">
                      <iframe
                        width="100%"
                        height="250"
                        src={galData.videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="Videocont">
                      <h4>{galData.titleData}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
