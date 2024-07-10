import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { menuSlide, slide, scale } from '../animation';
import Curve from './Curve';
import Logo from '../../../images/400x400.webp';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Townships",
    href: "#",
  },
  {
    title: "Homes",
    href: "/projects/homes",
  },
  {
    title: "Retail",
    href: "/projects/retail",
  },
  {
    title: "Offices",
    href: "#",
  }
];

const Nav = ({ setIsActive, toggleMenu, isActive }) => {  
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleNavLinkClick = (href) => {
    setSelectedIndicator(href);
    setIsActive(false); 
  };

  const handleSubChildClick = (e, href) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    setSelectedIndicator(href);
    setIsActive(false);
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
            {navItems.map((data, index) => (
              <motion.div
                key={data.href}
                className={styles.link}
                onMouseEnter={() => setSelectedIndicator(data.href)}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.div
                  variants={scale}
                  animate={selectedIndicator === data.href ? "open" : "closed"}
                  className={styles.indicator}
                ></motion.div>
                <NavLink
                  to={data.href}
                  activeClassName={styles.active}
                  onClick={() => handleNavLinkClick(data.href)}
                >
                  {data.title}
                </NavLink>
              </motion.div>
            ))}
            <motion.div>
              <ul className={styles.subChildmenu}>
                <li><NavLink to='/career' onClick={(e) => handleSubChildClick(e, '/career')}>Career</NavLink></li>
                <li><NavLink to='/media' onClick={(e) => handleSubChildClick(e, '/media')}>Media</NavLink></li>
                <li><NavLink to='/csr' onClick={(e) => handleSubChildClick(e, '/csr')}>CSR</NavLink></li>
                <li><NavLink to='/nri' onClick={(e) => handleSubChildClick(e, '/nri')}>NRI</NavLink></li>
                <li><NavLink to='/contact-us' onClick={(e) => handleSubChildClick(e, '/contact-us')}>Contact Us</NavLink></li>
              </ul>
            </motion.div>
          </div>
          <div className='sideLogo'>
            <img src={Logo} alt='Home & Soul'/>
          </div>
        </div>
        <div className={styles.headerButtonContainer}>
          <div onClick={toggleMenu} className={`${styles.button}`}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>  
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
};

export default Nav;
