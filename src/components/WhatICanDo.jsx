import React from "react";
import { motion } from "framer-motion";
import { offers } from "../constants/index";

const WhatICanDo = () => {
  // return (
  // <motion.div
  //   className="bg-white dark:bg-primaryDark w-[70%] m-auto mt-[2rem] shadow-xl rounded-xl pointer-events-none"
  //   whileInView={{
  //     y: 0,
  //     transition: { duration: 0.4 },
  //     opacity: 1,
  //   }}
  //   initial={{ y: 60, opacity: 0 }}
  // >
  //   <div className="text-center font-bold text-[30px] text-black dark:text-light mt-[-6rem]">
  //     <h1>What I can provide?</h1>
  //   </div>
  //   <div className="flex p-1 md:p-5 mx-[7rem] text-center gap-3 bg-red-200 w-full">
  //     {offers.map((offer) => (
  //       <div key={offer.title} className=" w-[50px] md:w-[230px]">
  //         <div className="flex justify-center ">{offer.icon}</div>
  //         <h1 className="text-primary mt-[1rem] text-[25px]">
  //           {offer.title}
  //         </h1>
  //         <p className="text-[20px]">{offer.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // </motion.div>
  // );
};

export default WhatICanDo;
