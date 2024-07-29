import React, { useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../SlidingImages/style.module.scss";
import Gallery from '../Gallery/Index';
import Title from '../Title/Index';

const Index = ({ galleryData }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <section className="mb-0 overflow-hidden">
        <div className="tabs border-0">
          <div className="flex-center col-12 float-start">
            <Tabs className="col-12 float-start">
              <Title firstHeading={'Gallery'} />
              <div className="overTabs flex-center col-12 float-start">
              <TabList className="flex-center m-0 p-0 float-start col-12">
                {Object.keys(galleryData).map((tab) => (
                  <Tab key={tab}>{tab}</Tab>
                ))}
              </TabList>
              </div>
              {Object.entries(galleryData).map(([tab, data]) => (
                <TabPanel key={tab}>
                  <Gallery Data={data} />
                </TabPanel>
              ))}
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
