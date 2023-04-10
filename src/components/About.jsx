import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {SectionWrapper} from "../hoc"
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import React from 'react'

const ServiceCard = ({index, title, icon}) => (
    <Tilt
    classname='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", index*0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card'>
      <div
      options={{
        max:45,
        scale:1,
        speed:450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
      <img 
      src={icon}
      alt="card-icon"
      className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
      </div>
      </motion.div>
    </Tilt>
  )

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
    className="mt-20 text-secondary text-[17px] max-w-3xl leading-[30px]">
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