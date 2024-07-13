import React from 'react';
import { Link } from 'react-router-dom';
import '../BreadCrumb/BreadCrumb.css';

const Index = ({ pageName, pageUrl, _parentClass, pageChildName }) => {
  const formattedPageName = pageName.replace(/-/g, ' ');
  const formattedPageChildName = pageChildName ? pageChildName.replace(/-/g, ' ') : null;

  return (
    <div className={`pagebreadcumb mt-2 ${_parentClass}`}>
      <ul className='d-flex'>
        <li><Link to='/'>Home</Link></li>
        <li>{pageUrl ? <Link to={pageUrl}>{formattedPageName}</Link> : <span>{formattedPageName}</span>}</li>
        {formattedPageChildName && <li>{formattedPageChildName}</li>}
      </ul>
    </div>
  );
};

export default Index;
