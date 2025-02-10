import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/profile.jpg"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who Am I?</h2>
      </motion.div>

      <div className='flex flex-col md:flex-row items-center mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] md:w-2/3'
        >
          I am an aspiring full stack developer with a strong command of frameworks like React.js and Node.js.
          I also hold expertise in databases such as SQL and NoSQL (like MongoDB). 
          Apart from these technologies, I am passionate about DevOps, where I possess strong knowledge of tools and 
          practices including Git, GitHub, Jenkins, Ansible, Docker, Maven, and AWS. 
          I have earned the AWS Cloud Essentials Certificate from Amazon. Additionally, 
          I have a solid foundation in Operating Systems (OS), Data Structures and Algorithms (DSA), Software Engineering, Project Management, 
          and Networking.
        </motion.p>

        {/* Profile Picture Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className='md:w-1/3 flex justify-center mt-10 md:mt-0'
        >
          <img
            src={profilePic}
            alt='Profile Picture'
            className='w-[250px] h-[250px] object-cover rounded-full border-[5px] border-green-400'
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
