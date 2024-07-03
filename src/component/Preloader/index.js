import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Home", "And", "Soul"];
const delays = [1000, 150]; // Delay for "Home" and "Soul" respectively

const Index = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height: 0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, delays[index]);
        return () => clearTimeout(timeout); // Clear the timeout on unmount
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    {words.map((word, i) => (
                        <motion.p key={i} variants={opacity} initial="initial" animate={index >= i ? "enter" : ""}><span></span>{word}</motion.p>
                    ))}
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    );
};

export default Index;
