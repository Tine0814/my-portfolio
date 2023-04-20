import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../assets";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <section className="relative flex w-full h-screen" id="home">
      <div className="absolute text-black inset-0 top-[120px] max-w-full px-20 xl:px-40 mx-auto sm:flex justify-between items-center ">
        <div className="flex flex-col gap-4 max-w-[400px] xl:max-w-[700px] ">
          <div>
            <h1 className="font-bold text-[50px]">Dastine Bernardo</h1>
            <h2 className="text-[20px] text-secondary">
              Aspiring <span className="text-primary">Web Developer </span>from
              Philippines
            </h2>
          </div>
          {/* <p>
            As a Skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications, Explore my latest project and
            articles, showcasing my experties in React.js and web development.
          </p> */}
          <div className="flex gap-4">
            <motion.div
              className="bg-primary text-center text-light font-bold text-[12px] w-[80px] p-2 rounded-lg "
              whileHover={{ scale: 1.3 }}
            >
              <button>View CV</button>
            </motion.div>
            <motion.div
              className="bg-primary text-center text-light font-bold text-[12px] w-[80px] p-2 rounded-lg "
              whileHover={{ scale: 1.3 }}
            >
              <button>Project</button>
            </motion.div>
            <div className="">
              <ul className="flex flex-row gap-2 text-black">
                <motion.li
                  className=""
                  whileHover={{ y: [0, -5] }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <a href="https://github.com/Tine0814 " target="_blank">
                    <VscGithub size="1.5rem" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ y: [0, -5] }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <a href="">
                    <BsFacebook size="1.5rem" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ y: [0, -5] }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <a href="">
                    <AiFillInstagram size="1.5rem" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ y: [0, -5] }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <a href="">
                    <AiFillLinkedin size="1.5rem" />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className="profile"
          animate={{ y: [0, -20, 0] }}
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
