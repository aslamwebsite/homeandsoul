import React from 'react'

const Index = ({firstHeading,secondHeading,parentClass,childClass, grandClass}) => {
  return (
    <>
     <div className={`title flex-center col-12 float-start flex-wrap text-center ${grandClass}`}>
            {firstHeading && <span className={`col-12 float-start ${parentClass}`} data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">{firstHeading}</span>}
           {secondHeading && 
            <h3 className={`heading bigFont text-black col-12 float-start ${childClass}`} data-aos="fade-in"
            data-aos-offset="100"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine">{secondHeading}</h3>
           }
        </div>
    </>
  )
}

export default Index