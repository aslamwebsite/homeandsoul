import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { menuSlide, slide, scale } from '../animation';
import { Link } from 'react-scroll';
import Curve from './Curve';
import Logo from '../../../images/home-soul.webp'

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Media",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/",
  }
];

const Nav = ({ setIsActive }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleNavLinkClick = (event, href) => {
    event.preventDefault();
    event.stopPropagation();

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
                key={index}
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
                <Link
                  to={data.href.substring(1)}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={(event) => handleNavLinkClick(event, data.href)}
                >
                  {data.title}
                </Link>
              </motion.div>
            ))}
            <motion.div>
                  <ul className={styles.subChildmenu}>
                    <li><Link to=''>CSR</Link></li>
                    <li><Link to=''>FAQ</Link></li>
                    <li><Link to=''>NRI</Link></li>
                  </ul>
                </motion.div>
          </div>

        </div>
        <div className='sideLogo'>
                                    <img src={Logo} alt='Home & Soul'/>
                                </div>
        <Curve />
      </motion.div>
    </>
  );
};

export default Nav;
