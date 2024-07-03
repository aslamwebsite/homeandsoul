import { useRef, useState } from 'react';
import styles from './style.module.scss';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Index';
import Magnetic from '../Magnetic/Index';
import { Link } from 'react-scroll';
import Logo from '../../images/home-soul.webp'
import Container from '../Container/Index';
import useStickyHeader from '../Header/useStickyHeader'

const Index = () => {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);
    useStickyHeader(headerRef);

    return (
        <>
            <div ref={header} className={styles.header}>
                <Container ref={headerRef} _parentClass="header  m-0">
                    <div className="header col-12 float-start">
                        <div className="row flex-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="logo">
                                    <img src={Logo} alt='Home & Soul' />
                                </div>
                            </div>
                            <div className="menu col-lg-8 col-sm-4">
                                <div className={`${styles.nav} flex-center justify-content-end`}>
                                    <Magnetic>
                                        <div className={styles.el}>
                                            <Link to="home" smooth={true} duration={500}>
                                                TOWNSHIPS
                                            </Link>
                                            <div className={styles.indicator}></div>
                                        </div>
                                    </Magnetic>

                                    <Magnetic>
                                        <div className={styles.el}>
                                            <Link to="flavours" smooth={true} duration={500}>
                                                HOMES
                                            </Link>
                                            <div className={styles.indicator}></div>
                                        </div>
                                    </Magnetic>
                                    <Magnetic>
                                        <div className={styles.el}>
                                            <Link to="sandaes" smooth={true} duration={500}>
                                                RETAIL
                                            </Link>
                                            <div className={styles.indicator}></div>
                                        </div>
                                    </Magnetic>
                                    <Magnetic>
                                        <div className={styles.el}>
                                            <Link to="milkshakes" smooth={true} duration={500}>
                                                OFFICES
                                            </Link>
                                            <div className={styles.indicator}></div>
                                        </div>
                                    </Magnetic>
                                        <div className={styles.headerButtonContainer}>
                                            <div onClick={() => setIsActive(!isActive)} className={`${styles.button}`}>
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
                {isActive && <Nav setIsActive={setIsActive} />}
            </AnimatePresence>
        </>
    );
};

export default Index;
