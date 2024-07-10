import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MediaNavabar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
      <ul className='medianavbar'>
        <li className={pathname === '/media' ? 'active' : ''}>
          <Link to='/media'>Press Release</Link>
        </li>
        <li className={pathname === '/media/events' ? 'active' : ''}>
          <Link to='/media/events'>Events</Link>
        </li>
        <li className={pathname === '/media/video' ? 'active' : ''}>
          <Link to='/media/video'>Video</Link>
        </li>
      </ul>
    </div>
  );
};

export default MediaNavabar;
