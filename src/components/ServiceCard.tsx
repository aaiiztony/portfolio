import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion';
import { ServiceCardProps } from '../../types';

const ServiceCard = ({index, title, icon}: ServiceCardProps) => (
    <Tilt
    classname='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", index*0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card'>
      <div
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

export default ServiceCard