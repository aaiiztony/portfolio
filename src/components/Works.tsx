import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { ProjectCardProps } from "../../types";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[351px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-2xl"
            alt="project-image"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div />
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={`tag-${index}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => { 
  return(
  <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>
      Ideas that i've tried my hands on!
    </p>
    <h2 className={`${styles.sectionHeadText}`}>Ongoing Projects</h2>
    <div className="flex flex-row flex-wrap gap-10 mt-10">
      {projects.map((project, index) => (
        <ProjectCard
          {...project}
          index={index}
          key={`project-${project.name}`}
        />
      ))}
    </div>
  </motion.div>
)
};
export default SectionWrapper(Works, "work");
