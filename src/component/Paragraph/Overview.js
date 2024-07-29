import React from 'react'
import Webcontainer from '../WebContainer/Index';

const Overview = ({Data}) => {
  return (
    <Webcontainer _parentClass="aboutUs position-relative p-100 m-0">
    <div className="title flex-center col-12 float-start flex-wrap text-center position-relative showTextcont" data-aos="fade-in" data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine">
        <h2 className="col-12 float-start">{Data.title}</h2>
    </div>
    <div className='aboutContext' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine">
       <div className="row justify-content-between">
            <div className='col-lg-6 px-3'>
                {Data.Text01.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
            <div className='col-lg-6 px-3'>
                {Data.Text02.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    </div>
</Webcontainer>
  )
}

export default Overview