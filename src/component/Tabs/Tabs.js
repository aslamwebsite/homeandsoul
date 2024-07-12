import React from 'react';
import whiteLogo from '../../images/white-logo.webp'
import BreadCrubs from '../BreadCrumb/Index'

const Tabs = ({ titles, onClick, activeIndex, Slug, Category, Whitelogo }) => {
   return (
    <>
    <div className="fixed-strip projectDetails">
        <div className='container'>
          <div className='row'>
            <div className='flex-center col-12'>
              <div className='column3'>
                  <BreadCrubs pageName={Category} pageUrl={'/project/' + Category} _parentClass={'marginRemoveul'} pageChildName={Slug}/>
              </div>
              <div className='column9 justify-content-end fixMenu d-flex'>
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
            </div>
          </div>
        </div>
    </div>
    <div className='prologoHeader'>
      <a><img src={Whitelogo} alt=''/></a>
    </div>
    </>

  );
};

export default Tabs;
