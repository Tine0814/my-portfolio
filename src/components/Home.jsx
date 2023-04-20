import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../assets";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import Particle from "./Particle";

const Home = () => {
  return (
    <div>
      {/* <Particle /> */}
      <section className="relative flex w-full h-screen" id="home">
        <div className="text-black w-full flex justify-center items-center flex-col-reverse p-20 md:flex-row md:gap-[20rem]">
          <div className="flex flex-col gap-4 max-w-[400px] xl:max-w-[700px] ">
            <div>
              <motion.h1
                className="font-bold text-[50px]"
                whileInView={{
                  x: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ x: -200, opacity: 0.3 }}
              >
                Dastine Bernardo
              </motion.h1>
              <motion.h2
                className="text-[20px] text-secondary"
                whileInView={{
                  x: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ x: 200, opacity: 0.3 }}
              >
                Aspiring <span className="text-primary">Web Developer </span>
                from Philippines
              </motion.h2>
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
                whileInView={{
                  x: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ x: -100, opacity: 0 }}
              >
                <button>View CV</button>
              </motion.div>
              <motion.div
                className="bg-primary text-center text-light font-bold text-[12px] w-[80px] p-2 rounded-lg "
                whileHover={{ scale: 1.3 }}
                whileInView={{
                  y: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ y: 100, opacity: 0 }}
              >
                <button>Project</button>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileInView={{
                  x: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ x: 100, opacity: 0 }}
              >
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
              </motion.div>
            </div>
          </div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
            initial={{ scale: 0, opacity: 0.2 }}
          >
            <motion.div
              className="profile"
              whileInView={{ y: [0, -20, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="glowing">
                <span className="span"></span>
                <div className="img ">
                  <img src={profile} alt="" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="text-dark">
        <motion.div
          className="bg-white w-[1250px] h-[392px] m-auto shadow-xl rounded-xl"
          whileInView={{
            y: 0,
            transition: { duration: 0.8 },
            opacity: 1,
          }}
          initial={{ y: 100, opacity: 0 }}
        >
          <div className="text-center font-bold text-[32px] mt-[1rem]">
            <h1>What I can provide?</h1>
          </div>
          <div className="flex justify-between m-[2rem] p-6 mx-[7rem] mt-[3rem] text-center">
            <div className="w-[230px]">
              <div></div>
              <div className="flex justify-center">
                <MdDesignServices size="54px" className="text-primary " />
              </div>
              <h1 className="text-primary">Front-End Development</h1>
              <p>I can create Front-end for website using React.js</p>
            </div>
            <div className="w-[230px]">
              <div></div>
              <div className="flex justify-center">
                <MdDesignServices size="54px" className="text-primary " />
              </div>
              <h1 className="text-primary">Front-End Development</h1>
              <p>I can create Front-end for website using React.js</p>
            </div>
            <div className="w-[230px]">
              <div></div>
              <div className="flex justify-center">
                <MdDesignServices size="54px" className="text-primary " />
              </div>
              <h1 className="text-primary">Front-End Development</h1>
              <p>I can create Front-end for website using React.js</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
