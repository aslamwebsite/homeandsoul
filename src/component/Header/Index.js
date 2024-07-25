import { useRef, useState } from 'react';
import styles from './style.module.scss';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Index';
import Logo from '../../images/home-soul.webp';
import Container from '../Container/Index';
import useStickyHeader from '../Header/useStickyHeader';
import { NavLink } from 'react-router-dom';

const Index = ({className}) => {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);
    useStickyHeader(headerRef);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div ref={header} className={`${styles.header} ${className}`}>
                <Container ref={headerRef} _parentClass="header m-0">
                    <div className="header col-12 float-start">
                        <div className="row flex-center">
                            <div className="col-lg-4 col-sm-6">
                                    <div className="logo">
                                    <NavLink to='/'>
                                        <img src={Logo} alt='Home & Soul' />                                        
                                </NavLink>
                                    </div>
                            </div>
                            <div className="menu col-lg-8 col-sm-4">
                                <div className={`${styles.nav} flex-center justify-content-end Textcolor`}>
                                        <div className={styles.el}>
                                            <NavLink to='/projects/townships'>
                                                TOWNSHIPS
                                            </NavLink>
                                        </div>
                                        <div className={styles.el}>
                                        <NavLink to='/projects/homes'>
                                                HOMES
                                            </NavLink>
                                        </div>
                                        <div className={styles.el}>
                                        <NavLink to='/projects/commercial'>
                                                COMMERCIAL
                                            </NavLink>
                                        </div>
                                        <div className={styles.el}>
                                        <NavLink to='/home-and-soul'>
                                                ABOUT US
                                            </NavLink>
                                        </div>
                                    <div className={styles.headerButtonContainer}>
                                        <div onClick={toggleMenu} className={`${styles.button}`}>
                                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <AnimatePresence mode="wait">
                {isActive && <Nav setIsActive={setIsActive} toggleMenu={toggleMenu} isActive={isActive} />} 
            </AnimatePresence>
        </>
    );
};

export default Index;
