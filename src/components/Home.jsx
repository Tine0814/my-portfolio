import React, { useEffect, useState } from "react";
import { profile } from "../assets/img";
import { motion } from "framer-motion";
import { socials } from "../constants";
import WhatICanDo from "./WhatICanDo";
import "animate.css";

const PDF_FILE_URL = "https://tine0814.github.io/my-portfolio/CV.pdf";

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
              <h1 className="font-bold text-[60px] animate__animated animate__backInLeft  ">
                Dastine Bernardo
              </h1>
              <h2 className="text-[30px] animate__animated animate__backInRight ">
                Aspiring <span className="text-primary">Web Developer </span>
                from Philippines
              </h2>
            </div>
            <div className="flex gap-3 text-[20px] justify-center ">
              <motion.div
                className="bg-primary text-light w-[90px] h-[30px] grid place-items-center rounded-md animate__animated animate__backInLeft"
                whileHover={{ scale: 1.2 }}
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
                className="bg-primary text-light w-[80px] h-[30px] grid place-items-center rounded-md animate__animated animate__backInUp  "
                whileHover={{ scale: 1.2 }}
              >
                <a href="#project">Projects</a>
              </motion.div>
              <div className="flex items-center animate__animated animate__backInRight">
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
              </div>
            </div>
          </div>
          <div className="animate__animated animate__flipInY">
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
                  className="span bg-gradient-to-r from-primary to-[#001C30]"
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
          </div>
        </div>
      </section>
      <WhatICanDo />
    </div>
  );
};

export default Home;
