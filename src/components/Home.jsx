import React, { useEffect, useState } from "react";
import { profile } from "../assets/img";
import { motion } from "framer-motion";
import { socials } from "../constants";
import WhatICanDo from "./WhatICanDo";
import "animate.css";
import { triangle } from "maath";

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

  // const Circle = () => {
  //   let circleCount = 7;
  //   let circles = [];

  //   for (let i = 0; i < circleCount; i++) {
  //     let positionOptionsX = [`right`, `left`];
  //     let positionOptionsY = [`bottom`, `top`];
  //     let randomPositionX =
  //       positionOptionsX[Math.floor(Math.random() * positionOptionsX.length)];
  //     let randomPositionY =
  //       positionOptionsY[Math.floor(Math.random() * positionOptionsY.length)];
  //     let randomNumberX = Math.floor(Math.random() * 100);
  //     let randomNumberY = Math.floor(Math.random() * 100);
  //     console.log(
  //       randomNumberX,
  //       randomNumberY,
  //       randomPositionX,
  //       randomPositionY
  //     );
  //     circles.push(
  //       <motion.div
  //         key={i}
  //         initial={{ scale: 1 }}
  //         // animate={{ scale: [0, 1.2, 0] }}
  //         // transition={{
  //         //   duration: 1,
  //         //   ease: "easeInOut",
  //         //   repeat: Infinity,
  //         //   repeatType: "loop",
  //         //   delay: 4,
  //         // }}
  //         className={`${randomPositionX}-${randomNumberX} ${randomPositionY}-${randomNumberY}bg-primary absolute  circle-3d`}
  //       ></motion.div>
  //     );
  //   }
  //   return <div>{circles}</div>;
  // };

  return (
    <div className="text-gray-500 ">
      <section className="relative flex w-full h-screen " id="home">
        {/* {Circle()} */}
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 4,
          }}
          className="absolute right-0 top-32 circle-3d"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 4,
          }}
          className="absolute right-0 top-32 circle-3d"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
          className="absolute right-32 top-62 circle-3d"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          }}
          className=" circle-3d absolute left-0 top-10 shadow-md w-[100px] h-[100px] rounded-full"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
          className=" bg-primary absolute left-32 bottom-10 circle-3d  w-[100px] h-[100px] rounded-full"
        ></motion.div> */}
        <div className="w-full flex justify-center items-center mb-[5rem] flex-col-reverse p-10 ">
          <div className="flex flex-col max-w-[400px] xl:max-w-[700px] ">
            <div className="pointer-events-none text-center text-black dark:text-light">
              <h1 className="  font-bold text-[60px] animate__animated animate__backInLeft  ">
                Dastine Bernardo
              </h1>
              <h2 className="text-[40px] animate__animated animate__backInRight ">
                <span className="text-primary">Web Developer </span>
                from Philippines
              </h2>
            </div>
            <div className="flex gap-3 text-[20px] justify-center p-2  ">
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
