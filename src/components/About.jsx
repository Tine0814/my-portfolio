import React from "react";
import { motion } from "framer-motion";
import { dastine } from "../assets/img";

const About = () => {
  return (
    <section
      id="about"
      className="  w-full text-gray-500 flex justify-center items-center text-[10] md:text-[25px] relative p-"
    >
      <div className="w-full flex justify-center flex-col xl:flex-row items-center md:p-20 text-center ">
        <div className="max-w-[700px] flex flex-col gap-7 p-10">
          <motion.h1
            className="text-[30px] md:text-[60px] text-primary font-bold"
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            About Me
          </motion.h1>
          <motion.p
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            Hello! My name is Dastine, and I love turning my ideas into
            innovative web applications. Gained valuable experience as a
            Frontend Developer during my internship, working on various web
            development projects. Skilled in Web Development, MongoDb, Express,
            React, Node.js, PHP, and Sql. Experienced in creating responsive and
            user-friendly web applications. Holds a Bachelor of Science - BS
            degree focused in Information System from Richwell College, Inc
          </motion.p>
          <motion.p
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            I want to be the best at my profession, and i'm constantly looking
            to further my abilities.
          </motion.p>
        </div>
        <motion.div
          className="w-[480px] h-[480px] p-1 flex justify-center items-center"
          whileInView={{
            y: 0,
            transition: { duration: 0.8 },
            opacity: 1,
          }}
          initial={{ y: 100, opacity: 0 }}
        >
          <div className="w-[250px] h-[290px] md:w-[490px] md:h-[450px]  xl:flex justify-center  items-center">
            <img src={dastine} alt="" className="rounded-xl shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
