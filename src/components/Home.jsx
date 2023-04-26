import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../assets/img";
import { motion } from "framer-motion";
import { socials } from "../constants";
import Particle from "./Particle";
import WhatICanDo from "./WhatICanDo";

const PDF_FILE_URL = "https://tine0814.github.io/my-portfolio/p.pdf";

const Home = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="text-gray-500 ">
      <section className="relative flex w-full h-screen " id="home">
        <div className="w-full flex justify-center items-center mb-[5rem] flex-col-reverse p-10 ">
          <div className="flex flex-col max-w-[400px] xl:max-w-[700px] ">
            <div className="pointer-events-none text-center text-black dark:text-light">
              <motion.h1
                className="font-bold text-[60px]"
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
                className="text-[30px] "
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
            <div className="flex gap-3 text-[20px] justify-center ">
              <motion.div
                className="bg-primary text-light w-[90px] h-[30px] grid place-items-center rounded-md "
                whileHover={{ scale: 1.2 }}
                whileInView={{
                  x: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ x: -100, opacity: 0 }}
              >
                <button
                  onClick={() => {
                    downloadFileAtURL(PDF_FILE_URL);
                  }}
                >
                  Download CV
                </button>
              </motion.div>
              <motion.div
                className="bg-primary text-light w-[80px] h-[30px] grid place-items-center rounded-md  "
                whileHover={{ scale: 1.2 }}
                whileInView={{
                  y: 0,
                  transition: { duration: 0.8 },
                  opacity: 1,
                }}
                initial={{ y: 30, opacity: 0 }}
              >
                <a href="#project">Projects</a>
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
                <ul className="flex flex-row gap-2 text-black dark:text-light">
                  {socials.map((social) => (
                    <motion.li
                      key={social.key}
                      className=""
                      whileHover={{ y: [0, -5] }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <a href={social.url} target="_blank">
                        {social.icon}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
            initial={{ scale: 0, opacity: 0.2 }}
          >
            <motion.div
              className="w-[250px] h-[250px]"
              whileInView={{ y: [0, -20, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="relative w-full h-full rounded-full flex justify-center items-center">
                <motion.span
                  className="span"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ></motion.span>
                <div className="absolute w-[250px] h-[250px] rounded-full overflow-hidden z-1 flex justify-center items-center">
                  <img
                    src={profile}
                    alt=""
                    className="max-w-[240px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <WhatICanDo />
    </div>
  );
};

export default Home;
