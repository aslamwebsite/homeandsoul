import React, { useState, useEffect } from "react";
import Card from "./Card";
import Round from "../RoundedButton/Index"

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [citiesData, setCitiesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://redcowdairy.in/api/fetch_locator_data.php"
        );

        if (!response.ok) {
          // Handle non-successful responses
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setCitiesData(result);
      } catch (error) {
        // Handle fetch errors
        setError(
          "Network issue. Please check your internet connection."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowAll(false); // Reset showAll when switching tabs
  };

  const handleShowAllClick = () => {
    setShowAll((prevShowAll) => !prevShowAll); 
  };

  return (
    <>
      <div className="tab-cnt col-12 float-start">
        {loading ? (
          <p className="loader_parent">
            <span className="loader"></span>
          </p>
        ) : error ? (
          <p className="internet_error">{error}</p>
        ) : (
          <div>
            <div
              className="tabs-scn"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="600"
              data-aos="fade-up"
            >
              <div className="tab-buttons flex-center">
                {citiesData &&
                  Object.keys(citiesData).map((city, index) => (
                    <button
                      key={index}
                      className={activeTab === index ? "active" : ""}
                      onClick={() => handleTabClick(index)}
                    >
                      {city}
                    </button>
                  ))}
              </div>
              <div className="tab-content p-0 m-0">
                {citiesData &&
                  Object.values(citiesData).map((cityData, index) => {
                    return (
                      <div
                        key={index}
                        className={`tab_pane ${
                          activeTab === index ? "visible" : ""
                        }`}
                      >
                        <div
                          style={{
                            display: activeTab === index ? "block" : "none",
                          }}
                          className='managesingleslice'
                        >
                          {cityData.slice(0, 2).map((locationData, locationIndex) => (
                            <Card
                              key={locationIndex}
                              title={locationData.title}
                              tabData={locationData.tabData || {}}
                            />
                          ))}
                         
                          {showAll &&
                            cityData.slice(2).map((locationData, locationIndex) => (
                              <Card
                                key={locationIndex}
                                title={locationData.title}
                                tabData={locationData.tabData || {}}
                              />
                            ))}
                             {cityData.length > 2 && (
                            <div className='col-12 flex-center'>
                              <div className='col-lg-3'>
                                <span onClick={handleShowAllClick} >
                              <Round>
                              <p className='highlighttext m-0'>
                          
                              {showAll ? "Hide" : "View All Address"}
                              
                            </p>
                           </Round>
                           </span>
                              </div>
                           </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
