import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Locationpop({Data}) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="Gallerybox col-12 float-start">
            <div className='web-container'>
                <div className='title flex-center'>
                    <span>Location Map</span>
                </div>
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a href={Data}>
                        <img src={Data} className='col-12' alt='Location Map' />
                        <div className='col-12 float-start flex-center'>
                            <div className="wrap flex-center">
                                <a className="btn-11"><span>View Location Map</span></a>
                            </div>
                        </div>
                    </a>
                </LightGallery>
            </div>
        </div>
    );
}

export default Locationpop;
