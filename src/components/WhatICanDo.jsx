import React from "react";
import { motion } from "framer-motion";
import { MdDesignServices, FaMobile, BsDatabaseGear } from "../assets/index";

const WhatICanDo = () => {
  return (
    <section className="">
      <motion.div
        className="bg-white w-[70%] m-auto mt-[2rem] shadow-xl rounded-xl pointer-events-none"
        whileInView={{
          y: 0,
          transition: { duration: 0.8 },
          opacity: 1,
        }}
        initial={{ y: 80, opacity: 0 }}
      >
        <div className="text-center font-bold text-[30px] text-light mt-[2rem] bg-secondary shadow-md rounded-xl">
          <h1>What I can provide?</h1>
        </div>
        <div className="flex flex-wrap justify-between m-[2rem] p-9 mx-[7rem] text-center">
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <MdDesignServices size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text-[25px]">
              Front-End Development
            </h1>
            <p className="text-[20px]">
              I can create Front-end for website using React.js
            </p>
          </div>
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <FaMobile size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text-[25px]">
              Responsive Design
            </h1>
            <p className="text-[20px]">
              Capable to develop a website for all types of device
            </p>
          </div>
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <BsDatabaseGear size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text-[25px]">
              Back-End Development
            </h1>
            <p className="text-[20px]">
              Develop backend components of web application and create
              server-side logic and database (PHP, MySQL)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatICanDo;
