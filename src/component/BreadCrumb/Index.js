import React from 'react'
import { Link } from 'react-router-dom'
import '../BreadCrumb/BreadCrumb.css'

const Index = ({pageName, pageUrl, _parentClass, pageChildName}) => {
  return (
    <div className={`pagebreadcumb mt-2 ${_parentClass}`}>
      <ul className='d-flex'>        
        <li><Link to='/'>Home</Link></li>
        <li>{pageUrl ? <Link to={pageUrl}>{pageName}</Link> : <span>{pageName}</span>}</li>
        {pageChildName && <li>{pageChildName}</li>}
      </ul>
    </div>
  )
}

export default Index
