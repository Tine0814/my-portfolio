import React from "react";
import { motion } from "framer-motion";
import { dastine } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen text-black grid place-items-center text-[25px] bg-white dark:bg-primaryDark dark:text-light"
    >
      <div className="w-full flex justify-center items-center p-20 text-center">
        <div className="max-w-[700px] flex flex-col gap-7 p-10">
          <motion.h1
            className="text-[30px] font-bold"
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
              opacity: 1,
            }}
            initial={{ y: 200, opacity: 0 }}
          >
            About Me
          </motion.h1>
          <motion.p
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
              opacity: 1,
            }}
            initial={{ y: 200, opacity: 0 }}
          >
            Hello! My name is Dastine, and I love turning my ideas into
            innovative web applications. My interest in web development started
            back in 2021, when I decided to try developing my first ever HTML
            code with CSS ('Hello Word'). It turns out I love manipulating
            things in the browser.
          </motion.p>
          <motion.p
            whileInView={{
              y: 0,
              transition: { duration: 0.8, delay: 0.8 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0 }}
          >
            I want to be the best at my professionm, and i'm constantly looking
            to further my abilities.
          </motion.p>
        </div>
        <motion.div
          className="w-[380px] h-[380px] p-1 flex justify-center items-center"
          whileHover={{ scale: 1.3 }}
          whileInView={{
            x: 0,
            transition: { duration: 0.8 },
            opacity: 1,
          }}
          initial={{ x: 100, opacity: 0 }}
        >
          <div className=" w-[290px] h-[250px] flex justify-center items-center">
            <img src={dastine} alt="" className="rounded-xl shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
