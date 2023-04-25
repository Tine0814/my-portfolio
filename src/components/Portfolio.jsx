import React from "react";
import ReactDOM from "react-dom"; // Add this line
import { useState } from "react";
import { clinic_inventory, netflix } from "../assets";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import {
  IoLogoJavascript,
  FaReact,
  IoLogoHtml5,
  DiCss3,
  SiPhp,
  SiMysql,
  SiTailwindcss,
} from "../assets/index";
import IconButton from "./IconButton";

const Portfolio = () => {
  return (
    <section
      className="w-full h-screen text-black dark:text-light flex justify-center items-center text-[20px]"
      id="project"
    >
      <div className="w-[80%]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="text-center text-[60px] font-bold text-primary">
              <h1>Portfolio</h1>
            </div>
            <h1 className="text-[30px] dark:text-light text-center mt-[-2rem]">
              Recent Projects
            </h1>
          </div>
          <motion.div
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
            initial={{ x: 100, opacity: 0 }}
          >
            <Swiper
              pagination={true}
              modules={[Pagination]}
              spaceBetween={100}
              slidesPerView={3}
              className="p-10"
            >
              <SwiperSlide>
                {" "}
                <div className="flex gap-10 flex-wrap">
                  <div className="relative flex flex-col bg-white dark:bg-primaryDark gap-4 w-[369px] p-[30px] rounded-xl shadow-2xl">
                    <div className="absolute top-2 left-3 flex gap-2">
                      <div className="w-[10px] h-[10px] bg-[#ff605c] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#ffbd44] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#00ca4e] rounded-full"></div>
                    </div>
                    <div className="w-[294px] h-[220px] rounded-xl shadow-md flex justify-center items-center">
                      <div className="w-full h-full overflow-hidden rounded-xl">
                        <motion.img
                          src={clinic_inventory}
                          alt=""
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.8 },
                          }}
                        />
                      </div>
                    </div>
                    <h2 className="text-[30px]">Clinic Inventory</h2>
                    <div className="flex gap-2 justify-center">
                      <IconButton text="HTML" color="bg-[#FF5733]">
                        <IoLogoHtml5 size={30} />
                      </IconButton>
                      <IconButton text="CSS" color="bg-[#264de4]">
                        <DiCss3 size={30} />
                      </IconButton>
                      <IconButton text="JavaScript" color="bg-[#f0db4f]">
                        <IoLogoJavascript size={30} />
                      </IconButton>
                      <IconButton text="PHP" color="bg-[#8993be]">
                        <SiPhp size={30} />
                      </IconButton>
                      <IconButton
                        text="MySQL"
                        color="bg-gradient-to-r from-[#00758f] to-[#f29111]"
                      >
                        <SiMysql size={30} />
                      </IconButton>
                    </div>
                    <div className="flex justify-center">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href=""
                        className="bg-primary text-light w-[90px] h-[30px] grid place-items-center rounded-md "
                      >
                        Visit Site{" "}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex gap-10 flex-wrap">
                  <div className="relative flex flex-col bg-white dark:bg-primaryDark gap-4 w-[369px] p-[30px] rounded-xl shadow-2xl">
                    <div className="absolute top-2 left-3 flex gap-2">
                      <div className="w-[10px] h-[10px] bg-[#ff605c] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#ffbd44] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#00ca4e] rounded-full"></div>
                    </div>
                    <div className="w-[294px] h-[220px] rounded-xl shadow-md flex justify-center items-center">
                      <div className="w-full h-full overflow-hidden rounded-xl">
                        <motion.img
                          src={netflix}
                          alt=""
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.8 },
                          }}
                        />
                      </div>
                    </div>
                    <h2 className="text-[30px]">NETFLIX Clone</h2>
                    <div className="flex gap-2 justify-center">
                      <IconButton text="React" color="bg-[#61DBFB]">
                        <FaReact size={30} />
                      </IconButton>
                      <IconButton text="Tailwind" color="bg-[#3490dc]">
                        <SiTailwindcss size={30} />
                      </IconButton>
                    </div>
                    <div className="flex justify-center">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href=""
                        className="bg-primary text-light w-[90px] h-[30px] grid place-items-center rounded-md "
                      >
                        Visit Site{" "}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex gap-10 flex-wrap">
                  <div className="relative flex flex-col bg-white dark:bg-primaryDark gap-4 w-[369px] p-[30px] rounded-xl shadow-2xl">
                    <div className="absolute top-2 left-3 flex gap-2">
                      <div className="w-[10px] h-[10px] bg-[#ff605c] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#ffbd44] rounded-full"></div>
                      <div className="w-[10px] h-[10px] bg-[#00ca4e] rounded-full"></div>
                    </div>
                    <div className="w-[294px] h-[220px] rounded-xl shadow-md flex justify-center items-center">
                      <div className="w-full h-full overflow-hidden rounded-xl">
                        <motion.img
                          src={netflix}
                          alt=""
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.8 },
                          }}
                        />
                      </div>
                    </div>
                    <h2 className="text-[30px]">NETFLIX Clone</h2>
                    <div className="flex gap-2 justify-center">
                      <IconButton text="React" color="bg-[#61DBFB]">
                        <FaReact size={30} />
                      </IconButton>
                      <IconButton text="Tailwind" color="bg-[#3490dc]">
                        <SiTailwindcss size={30} />
                      </IconButton>
                    </div>
                    <div className="flex justify-center">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href=""
                        className="bg-primary text-light w-[90px] h-[30px] grid place-items-center rounded-md "
                      >
                        Visit Site{" "}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
