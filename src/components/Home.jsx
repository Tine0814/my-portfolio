import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { profile } from "../assets";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative flex w-full h-screen " id="home">
      <div className="absolute text-black inset-0 top-[120px] max-w-full px-20 xl:px-40 mx-auto sm:flex justify-between items-center ">
        <div className="flex flex-col gap-4 max-w-[400px] xl:max-w-[700px] ">
          <div>
            <h1 className="font-bold text-[40px]">
              Hi, I'm <span className="text-primary">Dastine Bernardo</span>
            </h1>
            <h2 className="font-semibold text-[20px] text-secondary">
              full-stack Developer
            </h2>
          </div>
          <p>
            As a Skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications, Explore my latest project and
            articles, showcasing my experties in React.js and web development.
          </p>
          <motion.div
            className="bg-primary text-light font-bold text-[12pxs] w-[130px] p-2 rounded-lg "
            whileHover={{ scale: 1.3 }}
          >
            <button>Download CV</button>
          </motion.div>
        </div>
        <motion.div
          className="profile"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "loop" }}
        >
          <div className="glowing">
            <span className="span"></span>
            <div className="img ">
              <img src={profile} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
