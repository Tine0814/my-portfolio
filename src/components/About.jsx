import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen text-black grid place-items-center text-[25px] bg-white"
    >
      <div className="w-full flex justify-center items-center p-20 text-center">
        <div className="text-black max-w-[700px] flex flex-col gap-7 p-10">
          <motion.h1
            className="text-[30px] font-bold"
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 0.8 },
              opacity: 1,
            }}
            initial={{ y: 200, x: -200, opacity: 0.3 }}
          >
            About Me
          </motion.h1>
          <motion.p
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 0.8 },
              opacity: 1,
            }}
            initial={{ y: 200, x: 200, opacity: 0.3 }}
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
              transition: { duration: 0.8 },
              opacity: 1,
            }}
            initial={{ y: 100, opacity: 0.3 }}
          >
            I want to be the best at my professionm, and i'm constantly looking
            to further my abilities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
