import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.css';
import WebContainer from '../WebContainer/Index'

const Index = () => {
    const paragraph = "In the bustling world of real estate, Home & Soul stands as a beacon of innovation under the guiding light of Chairperson Sakshi Katiyal. Their team of dedicated professionals shares a common vision—a vision to craft a realm where modernity meets soulfulness. Every brick laid, every wall painted, is imbued with the essence of aspiration and functionality. Home & Soul doesn't just build houses; they sculpt homes that resonate with the spirit of the new age Indian, offering a taste of international living standards.";
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start 0.9", "start 0.10"]
    });

    const words = paragraph.split(" ");

    return (
      <>
        <WebContainer _parentClass={'aboutUs position-relative p-100 mb-0'}>
            <div className='title text-center col-12 float-start flex-wrap m-0'>
              <span data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">ABOUT H&S GROUP</span>
            </div>
        <p 
          ref={container}         
          className={styles.paragraph}
        >
        {
          words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
          })
        }
        </p>
        <div class="wrap flex-center" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"><a class="btn-11"><span>Know More</span></a></div>
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

export default Index;
