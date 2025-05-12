import { motion } from "framer-motion";
import {styles} from '../styles'

import { ComputersCanvas } from "./canvas";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  const services = ['Mobile App Developement','RPA Automation','Front End Development', 'Back End Development', 'Full Stack Development']
  return (
    <section className={`relative w-full h-screen mx-auto mt-[50px]`}>
      <div
        className={`absolute inset-0 mt-[30px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-[50px]">
          <h1 className={`${styles.heroHeadText} text-white text-xl sm:text-3xl font-semibold`}>
            {/* Hi, I'm <span className='text-[#915EFF]'>Adrian</span> */}
            Building the Future with Code and Creativity
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications */}
            Transforming Ideas into Powerful Web Solutions & Intuitive Mobile Apps
          </p>
          <h1 className="mt-2 text-white-100">
        Technologies I am experienced in {' '}
        <span className="font-bold text-violet-600 text-xl sm:text-2xl">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={services}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
      

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
