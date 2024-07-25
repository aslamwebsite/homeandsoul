import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.css';
import WebContainer from '../WebContainer/Index';
import { Link } from 'react-router-dom';

const Index = ({ Data }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.10"]
    });

    const words = Data.aboutData[0].split(" ");

    return (
        <WebContainer _parentClass={'aboutUs position-relative p-100 m-0'}>
            <div className={`title flex-center col-12 float-start flex-wrap text-center position-relative showTextcont`}>
                <span className={`col-12 float-start`}>{Data.title}</span>
            </div>
            <p ref={container} className={styles.paragraph}>
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
                })}
            </p>
            <div className="wrap flex-center"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-easing="ease-in-sine">
                <Link className="btn-11" to='/home-and-soul'><span>Know More</span></Link>
            </div>
        </WebContainer>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className={styles.word}>
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default Index;
