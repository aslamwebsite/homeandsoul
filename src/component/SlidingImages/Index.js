import React from 'react';
import styles from './style.module.scss';
import Layer from '../SVG/Layer';
import image01 from '../../images/chocolate-magnus-fantasy.webp';
import image02 from '../../images/double-scoop-sundae.webp';
import image03 from '../../images/fruit-sandae.webp';
import image04 from '../../images/icecream-01.webp';

const Index = () => {
  return (
    <div className="col-12 float-start position-relative padding-75">
      <div className={`redcowlayer position-absolute ${styles.layer}`}>
        <Layer fillColor="#e2fbff" />
      </div>
      <div className="container">
        <div className="row">
          <div className="title text-center col-12 float-start">
            <span>SUNDAES</span>
            <h3 className="heading theme-color">SUNDAES MAKE SUNDAYS BETTER!</h3>
            <p>Grab the specially curated creamy delights to match your taste buds! </p>
          </div>
        </div>
      <div className={styles.slidingImages}>
       
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <div className={styles.productimg}>
              <img className={styles.image} alt="" src={image02} />
            </div>
            <div className={styles.productcont}>
              <p>Triple Scoop Sundae</p>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <div className={styles.productimg}>
              <img className={styles.image} alt="" src={image03} />
            </div>
            <div className={styles.productcont}>
              <p>Fresh fruit SUNDAE</p>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <div className={styles.productimg}>
              <img className={styles.image} alt="" src={image04} />
            </div>
            <div className={styles.productcont}>
              <p>BROWNIE AL A MODE</p>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <div className={styles.productimg}>
              <img className={styles.image} alt="" src={image01} />
            </div>
            <div className={styles.productcont}>
              <p>chocolate magnus fantasy</p>
            </div>
          </div>
        </div>
      </div>
		<div className="othersundaename">
		<ul><li>CHOCO MADNESS FANTASY</li><li>OREO COOKIE DELIGHT</li><li>BROWNIE A LA MODE</li><li>NUTTY PROFESSOR</li><li>FRESH FRUITS</li><li>KIDDI GEMS</li><li>DOUBLE SCOOP</li><li>BANANA ROYAL</li><li>HOT FUDGE</li><li>DUSTY ROAD</li><li>TRIPLE SCOOP</li><li>TULIP</li></ul>
		</div>
      </div>
    </div>
  );
};

export default Index;
