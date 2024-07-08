import React from 'react';
import whiteLogo from '../../images/white-logo.webp'

const Tabs = ({ titles, onClick, activeIndex }) => {
  return (
    <>
    <div className="fixed-strip projectDetails">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`title-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => onClick(index)}
        >
          {title}
        </div>
      ))}
    </div>
    <div className='prologoHeader'>
      <a><img src={whiteLogo} alt=''/></a>
    </div>
    </>

  );
};

export default Tabs;
