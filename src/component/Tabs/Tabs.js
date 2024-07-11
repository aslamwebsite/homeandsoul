import React from 'react';
import whiteLogo from '../../images/white-logo.webp';
import BreadCrumbs from '../BreadCrumb/Index';

const Tabs = React.memo(({ titles, onClick, activeIndex, slug, cat }) => {
  return (
    <>
      <div className="fixed-strip projectDetails">
        <div className="container">
          <div className="row">
            <div className="flex-center col-12">
              <div className="column3">
                <BreadCrumbs 
                  pageName="homes" 
                  pageUrl={'/'} 
                  _parentClass="marginRemoveul" 
                  pageChildName={slug} 
                />
              </div>
              <div className="column9 justify-content-end fixMenu d-flex">
                {titles.map((title, index) => (
                  <div
                    key={index}
                    className={`title-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => onClick(index)}
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`tab-panel-${index}`}
                    id={`tab-${index}`}
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prologoHeader">
        <a href="#"><img src={whiteLogo} alt="Logo" /></a>
      </div>
    </>
  );
});

export default Tabs;
