import React from "react";
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { BsDatabaseGear } from "react-icons/bs";

const WhatICanDo = () => {
  return (
    <section className="">
      <motion.div
        className="bg-white w-[80%] m-auto mt-[2rem] shadow-xl rounded-xl pointer-events-none"
        whileInView={{
          y: 0,
          transition: { duration: 0.8 },
          opacity: 1,
        }}
        initial={{ y: 100, opacity: 0 }}
      >
        <div className="text-center font-bold text-[30px] text-light mt-[2rem] bg-secondary">
          <h1>What I can provide?</h1>
        </div>
        <div className="flex flex-wrap justify-between m-[2rem] p-9 mx-[7rem] text-center">
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <MdDesignServices size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text">
              Front-End Development
            </h1>
            <p>I can create Front-end for website using React.js</p>
          </div>
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <FaMobile size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text">Responsive Design</h1>
            <p>Capable to develop a website for all types of device</p>
          </div>
          <div className="w-[230px]">
            <div></div>
            <div className="flex justify-center ">
              <BsDatabaseGear size="54px" className="text-primary " />
            </div>
            <h1 className="text-primary mt-[1rem] text">
              Back-End Development
            </h1>
            <p>
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
