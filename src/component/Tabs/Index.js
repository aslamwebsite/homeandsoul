import React, { useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../SlidingImages/style.module.scss";
import Gallery from '../Gallery/Index'


const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <>
    <section className="mb-0">
      <div className="tabs">
            <div className="flex-center col-12 float-start">
              <Tabs className="col-12 float-start">
              <div className="title text-center col-12 float-start flex-wrap m-0">
                <span data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">Gallery</span>
              </div>
                <TabList className="flex-center m-0 p-0 float-start col-12">
                  <Tab>PAGE 3  </Tab>
                  <Tab>F-PREMIER</Tab>
                  <Tab>BOULEVARD WALK</Tab>
                </TabList>
                <TabPanel>
                  <Gallery />
                </TabPanel>
                <TabPanel>
                <Gallery />
                </TabPanel>
                <TabPanel>
                <Gallery />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        <div ref={container} className={styles.slidingImages}>
          <motion.div style={{ height }} className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </motion.div>
        </div>
        </section>
    </>
  );
};

export default Index;
