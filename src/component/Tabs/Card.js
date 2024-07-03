import React from "react";
import Call from "../SVG/Call";
import LocationIcon from "../SVG/Location";
import Clock from "../SVG/Clock"

const Card = ({ title, tabData = {} }) => {
  const {
    img = "",
    storeName = "",
    address = "",
    contactNumber = "",
    openingTime = "",
    Location = "",
  } = tabData;

  return (
      <div className=" _card">
        <div className="store_image">
          <img src={img} alt={`${title}-image`} />
        </div>

        <div className="card_data">
          <h2 className="">{storeName}</h2>
          <p
            className="address w-100"
            dangerouslySetInnerHTML={{ __html: address }}
          />
          <div className="_buttons ">
            <div className="btn_red w-100">
              <a href={`tel:${contactNumber}`} className='d-flex'>
                <Call />
                {contactNumber}
              </a>
            </div>
            <div className="btn_red time w-100"><Clock />{openingTime}</div>
            {Location && (
              <div className="btn_red time maps w-100">
                <a href={Location} target="_blank" rel="noopener noreferrer" className='d-flex align-items-center'>
                  <LocationIcon />
                  Get Directions
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Card;
