import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Floorplan01 from './images/plan01.jpg'
import Floorplan02 from './images/plan02.jpg'
import Floorplan03 from './images/plan03.jpg'
import Floorplan04 from './images/plan04.jpg'
import Floormplan01 from './images/mplan01.jpg'
import Floormplan02 from './images/mplan02.jpg'
import Floormplan03 from './images/mplan03.jpg'
import Floormplan04 from './images/mplan04.jpg'

function Floorplan() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <>
         {/* <a href={Floorplan01} onClick={() => this.setState({ isOpen: true })} >                    
                     <div className='siteplan'>
                    <img src={Floormplan01} alt='' />
                    </div>
                <button  className="btn-11">
   <span>View Floor Plan <em>+</em></span>
  </button>       
                </a> */}
        <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                 <a href={Floorplan01}>
                    <img src={Floormplan01} alt="TYPICAL FLOOR (UNIT 3)" />
                    <button  className="btn-11">
   <span>TYPICAL FLOOR (UNIT 3)</span>
  </button>       
                  </a>
                  <a href={Floorplan02}>
                    <img src={Floormplan02} alt="TYPICAL FLOOR (UNIT 1 & 2)" />
                    <button  className="btn-11">
   <span>TYPICAL FLOOR (UNIT 1 & 2)</span>
  </button>      
                  </a>
                  <a href={Floorplan03}>
                    <img src={Floormplan03} alt="TYPICAL FLOOR (UNIT 3)" />
                    <button  className="btn-11">
   <span>TYPICAL FLOOR (UNIT 3)</span>
  </button>      
                  </a>
                  <a href={Floorplan04}>
                    <img src={Floormplan04} alt="TYPICAL FLOOR (UNIT 1 & 2)" />
                    <button  className="btn-11">
   <span>TYPICAL FLOOR (UNIT 1 & 2)</span>
  </button>      
                  </a>
               
            </LightGallery>
        </div>
        
        </>
    );
}
export default Floorplan;