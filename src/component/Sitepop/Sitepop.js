import React from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Sitemplan from './images/msite-plan.jpg'
import Siteplan from './images/siteplan.jpg'

function Sitepop() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="Gallerybox">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={Siteplan} onClick={() => this.setState({ isOpen: true })} >                    
                     <div className='siteplan'>
                    <img src={Sitemplan} alt='' />
                    </div>
                </a>
            </LightGallery>
        </div>
    );
}
export default Sitepop;