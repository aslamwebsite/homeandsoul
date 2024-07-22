import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './component/Preloader'
import Tabs from './component/Tabs/Index'
import Slider from './component/Slider/Index'
import Paragraph from './component/Paragraph/Index'
import Counter from './component/CountLoader/Index'
import Projects from './component/Projects/Index'
import Upcoming from './component/Upcoming/Index'
import { BasePath } from './component/BasePath/Index'
import axios from "axios";

export default function Home() {
  const [pageData, setpageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
  
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BasePath}/home.php`);
        setpageData(response.data);
      } 
     
      catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <div className="preloader"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <main className='col-12 float-start'>
     
      <AnimatePresence mode='wait'>
        {loading && <Preloader />}
      </AnimatePresence>  
       {pageData.homeBanner && <Slider Data={pageData.homeBanner} mobHeight={'height_auto'}/>}
         {pageData.aboutUs && <Paragraph Data={pageData.aboutUs}/>}
        {pageData.number && <Counter Data={pageData.number}/>}
        {pageData.projectsData && <Projects Data={pageData.projectsData}/>}
       {pageData.projects_next && <Upcoming Data={pageData.projects_next}/>}
       {pageData.gallery &&  <Tabs galleryData={pageData.gallery}/>}
    </main>
  )
}
