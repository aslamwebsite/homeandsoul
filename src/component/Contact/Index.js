import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../Magnetic/Index';
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import TextField from "@mui/material/TextField";

const Index = () => {
    const currentYear = new Date().getFullYear();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    return (
        <>
            <footer className='col-12 float-start overflow-hidden' data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine">
            <motion.div style={{y}} ref={container} className={styles.contact}>
                <div className="container">
                <div className="title text-center float-start col-12"><span>Talk to us</span>
                <p className='m-0 lh-1'>For excellent real estate ownership and <br/>investment opportunities</p></div>
                <div className='col-lg-11 m-auto'>
                <div className={styles.body}>
                    <div className='col-lg-9 m-auto'>
                    <form>
          <div className="row">
            <div className={styles.collg4}>
              <TextField
                name="name"
                label="Name"
                className="modifiedinput"
                fullWidth
                required
              />
            </div>
            <div className={styles.collg4}>
              <TextField
                name="email"
                label="Email"
                className="modifiedinput"
                fullWidth
                required
              />
            </div>
            <div className={styles.collg4}>
              <TextField
                name="phone"
                label="Phone"
                className="modifiedinput"
                fullWidth
                required
              />
            </div>
            <div className="col-12 flex-center mt-5 text-center">
            <div className={styles.collg4}>
                <button>Submit</button>
                </div>
            </div>
          </div>
        </form>
                    </div>
                <div className={styles.title}>                    
                <div className={styles.nav}>
                <div className="footerbox">
                               <span className='call'></span>
                               
                                <Magnetic>
                            <p className='col-12 float-start m-0'> <a href='tel:+918447000360' >+91 8447000360</a></p>
                            </Magnetic>
                            </div>
                            <div className="footerbox">
                            <span className='map'></span>
                                <Magnetic><p className='col-12 float-start m-0'> GH-B3, Jaypee Greens Sports <br/>City, SDZ, Dankaur, Greater<br/> Noida, Gautam Buddha Nagar<br/> Uttar Pradesh, 201301</p></Magnetic>
                                
                            </div>
                            <div className="footerbox">
                            <span className='email'></span>
                                <Magnetic><p className='col-12 float-start m-0'> <a href='mailto:info@redcowdairy.in' >info@redcowdairy.in</a></p>
                                </Magnetic>
                                
                            </div>
                            <div className="footerbox">
                                <div className="col-12 float">
                                <p className='m-0'>Follow us today!</p>
                            <ul className='d-flex p-0'>                        
                        <li><a href='https://www.facebook.com/HomeAndSoulIN' target='_blank' rel="noreferrer"><Magnetic><span><BiLogoFacebook /></span></Magnetic></a></li>
                        <li><a href='https://twitter.com/Home_and_Soul' target='_blank' rel="noreferrer"><Magnetic><span><RiTwitterXLine /></span></Magnetic></a></li>
                        <li><a href='https://www.linkedin.com/company/homeandsoul/' target='_blank' rel="noreferrer"><Magnetic><span><FaLinkedinIn /></span></Magnetic></a></li>
                        <li><a href='https://www.instagram.com/homeandsoulin' target='_blank' rel="noreferrer"><Magnetic><span><RiInstagramLine /></span></Magnetic></a></li>
                        <li><a href='https://www.youtube.com/channel/UCwqwdgrB6KKyiBHXwirCnTA' target='_blank' rel="noreferrer"><Magnetic><span><RiYoutubeFill  /></span></Magnetic></a></li>
                       </ul>
                                </div>
                            </div>
                </div>
                </div>
               
                <div className={styles.info}>
                    <div>
                        <p>
                          &copy; {currentYear} | All Right Reserved | Home & Soul
                        </p>
                    </div>
                    <div>
                        <span>
                            <Magnetic>
                                <p><a href='https://triverseadvertising.com/' target='_blank' rel="noreferrer">site : triverse</a></p>
                            </Magnetic>
                        </span>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </motion.div>
            </footer>
        </>
    )
}

export default Index