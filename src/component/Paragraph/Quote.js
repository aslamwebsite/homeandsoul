import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.css';
import WebContainer from '../WebContainer/Index';
import { Link } from 'react-router-dom';
import QuoteIcon from '../../images/Svg/QuoteIcon';

const Quote = ({ Data }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.10"]
    });

    const words = Data.split(" "); 

    return (
        <>
            <WebContainer _parentClass={'QuoteText text-center position-relative p-100 m-0'}>
                <span className='QuoteIcon'><QuoteIcon /></span>
                <p
                    ref={container}
                    className={`${styles.paragraph} textEffect`}
                >
                    {
                        words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
                        })
                    }
                </p>
            </WebContainer>
        </>
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

export default Quote;
