import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from './canvas'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Technologies</p>
    <h2 className={`${styles.sectionHeadText}`}>Used
    </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","", 0.1,1)}
    className="my-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I have been deploying static as well as dynamic website for more than half a year, have particularly enjoyed ThreeJs and React while deploying this current portfolio design that's inspired from one of THE BEST JS programmer over youtube.
    </motion.p>
    <div
    className='flex flex-row flex-wrap justify-center items-center mt-20'>
      {technologies.map((technology)=>(
        <div
        className='h-28 w-28'
        key={`technology-${technology.name}`}>
        <BallCanvas icon={technology.icon}/>          
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")