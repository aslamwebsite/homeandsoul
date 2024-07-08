import React from "react";
import { NavLink } from "react-router-dom";
import WebContainer from './component/WebContainer/Index'

const Error = () => {
  return (
   <WebContainer _parentClass={'col-12 float-start m-0'}>
    <div className="col-lg-8 col-12 m-auto text-center error">
            <h1>404</h1>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/" className='text-uppercase'>back to homepage</NavLink>
        </div>
   </WebContainer>
  );
};

export default Error;
