import React from 'react'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../styles'
const Works = () => {
  return (
    <>
    <motion.div
    variants={
      textVariant()
    }>
    <p className={`${styles.sectionSubText}`}>
    Ideas that i've tried my hands on!
    </p>
    <h2 className={`${styles.sectionHeadText}`}>
      My Projects
    </h2>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "")