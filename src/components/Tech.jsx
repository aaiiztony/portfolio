import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from './canvas'
const Tech = () => {
  return (
    <div
    className='flex flex-row flex-wrap justify-center items-center'>
      {technologies.map((technology)=>(
        <div
        className='h-28 w-28'
        key={`technology-${technology.name}`}>
        <BallCanvas icon={technology.icon}/>          
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")