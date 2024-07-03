import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './component/Preloader'
import Tabs from './component/Tabs/Index'
import Slider from './component/Slider/Index'
import Paragraph from './component/Paragraph/Index'
import Counter from './component/CountLoader/Index'
import Projects from './component/Projects/Index'
import Upcoming from './component/Upcoming/Index'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
  
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className='col-12 float-start'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> 
      {/* <Preloader /> */}
        <Slider />
        <Paragraph />
        <Counter />
        <Projects />
        <Upcoming />
        <Tabs />
    </main>
  )
}
