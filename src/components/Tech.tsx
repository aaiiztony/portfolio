import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from './canvas'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>What I'm aware of</p>
    <h2 className={`${styles.sectionHeadText}`}>Technolgies
    </h2>
    </motion.div>
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