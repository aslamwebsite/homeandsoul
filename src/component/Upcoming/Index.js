import React from 'react'
import Container from '../Container/Index'
import Ayodha from '../../images/ayodha.webp'
import Goa from '../../images/goa.webp'

const Index = () => {
  return (
    <Container>
        <div className='title flex-center col-12 float-start flex-wrap text-center' data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
            <span className='col-12 float-start' data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">IN PLANS</span>
            <h3 className='heading bigFont text-black col-12 float-start'>WHAT’S NEXT</h3>
        </div>
        <div className='col-12 float-start' data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
            <div className='Upcomingimg loadeffect'>
                    <img src={Ayodha} alt='AYODHYA'/>
                    <h4>AYODHYA</h4>
            </div>
            <div className='Upcomingimg loadeffect'>
                    <img src={Goa} alt='GOA'/>
                    <h4>GOA</h4>
            </div>
        </div>
    </Container>
  )
}

export default Index