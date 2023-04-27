import { motion } from 'framer-motion'
import {SectionWrapper} from "../hoc"
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import React from 'react'
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Introduction</p>
    <h2 className={`${styles.sectionHeadText}`}>Overview
    </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","", 0.1,1)}
    className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I'm a self-taught developer with experience in working with frameworks such as ReactJS, Node.js and ThreeJS. The journey started from discovering python libraries to learning frontend development and here i am, producing websites that are alive and running on my way towards the path to Full Stack Development.
    </motion.p>
    <div className="mt-20 flex flex-wrap sm:justify-normal justify-center gap-10">
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");