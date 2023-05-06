import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import MobileAlert from './MobileAlert';
const Hero = () => {
//ADD A SIMPLE 3D OBJECT IN MOBILEALERT
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{

    //add a listener for mediaquery change detection 
    const mediaQuery = window.matchMedia("(max-width:500px)")

    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //callback function to handle changes to the media query
    const handleMediaQueryChange = (e)=>{
      setIsMobile(e.matches);
    }

    //add callback function as a listener for changes to the media query 
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  //generate from chatGpt or do the ideal way
  const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

  //Ideal way -- 
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hackerEffect = (e) => {
    let count = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText.split("").map((letter, index) => {
        if (index <= count){
          return e.target.dataset.value[index];
        }
      return letters[Math.floor(Math.random()*26)]}).join("");
      count += 1/4;
      if(count >= e.target.dataset.value.length)clearInterval(interval);
    }, 20);
  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-[2]`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div className='mb-12'>
          {/* add a icon for small devices to fill up the space */}
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span>THIS IS </span>
          <br className='sm:hidden block'/>
        <span className='text-[#915eff]' data-value='TONY      ' onMouseOver={hackerEffect}>PRASENJEET
        </span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>Designing and developing <br className='sm:block hidden'/>web apps that feel alive!</p>
        </div>
      </div>
      {isMobile?<MobileAlert/>:<ComputersCanvas/>}
      <div className="mt-4 absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center z-[2]">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration:1,
              repeat: Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero