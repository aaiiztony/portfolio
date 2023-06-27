import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { styles } from '../styles';
import { ObjectCanvas } from './canvas';
const Hero = () => {
//ADD A SIMPLE 3D OBJECT IN MOBILEALERT
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{

    //add a listener for mediaquery change detection 
    const mediaQuery = window.matchMedia("(max-width:500px)")

    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //callback function to handle changes to the media query
    const handleMediaQueryChange = (e:MediaQueryListEvent)=>{
      setIsMobile(e.matches);
    }

    //add callback function as a listener for changes to the media query 
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-[1] sm:mt-5`}>
        <div className="flex flex-col justify-center items-center mt-8 ml-24 sm:ml-20 ">
          <div className="w-5 h-5 rounded-full bg-[#ffffff] mt-8"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div className="mt-20">
        <h1 className={`${styles.heroMainText} sm:ml-[-20px] bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent`}>
          <span>Hi, I'm </span>
        <span className='bg-gradient-to-b from-teal-500 to-teal-700 bg-clip-text text-transparent' >Prasenjeet
        </span>
        </h1>
        </div> 
      </div>
      <ObjectCanvas/>
      <div className="mt-4 absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center z-[2]">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:1,
              repeat: Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero