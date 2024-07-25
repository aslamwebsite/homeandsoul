import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style.module.scss';
import { menuSlide, slide } from '../animation';
import Curve from './Curve';
import Logo from '../../../images/400x400.webp';

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/home-and-soul" },
  { title: "Townships", href: "/projects/townships" },
  { title: "Homes", href: "/projects/homes" },
  { title: "Commercial", href: "/projects/commercial" },
  { title: "Career", href: "/career" },
  { title: "Media", href: "/media" },
  { title: "CSR", href: "/csr" },
  { title: "NRI", href: "/nri" },
  { title: "Contact Us", href: "/contact-us" }
];

const Nav = ({ setIsActive, toggleMenu, isActive }) => {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  const handleNavLinkClick = (href) => {
    setSelectedIndicator(href);
    setIsActive(false);
  };

  const handleMouseEnter = (href) => setSelectedIndicator(href);

  const handleMouseLeave = () => setSelectedIndicator(location.pathname);

  const renderNavItems = () =>
    navItems.map((data, index) => (
      <motion.li
        key={data.href}
        className={styles.link}
        onMouseEnter={() => handleMouseEnter(data.href)}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <NavLink to={data.href} onClick={() => handleNavLinkClick(data.href)}>
          {data.title}
        </NavLink>
      </motion.li>
    ));

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={`${styles.body} slideMenu`}>
        <div onMouseLeave={handleMouseLeave} className={styles.nav}>
          <ul>{renderNavItems()}</ul>
        </div>
      </div>
      <div className='sideLogo'>
        <img src={Logo} alt='Home & Soul' />
      </div>
      <div className={styles.headerButtonContainer}>
        <div onClick={toggleMenu} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
