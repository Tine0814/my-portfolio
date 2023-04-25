import React from "react";
import { motion } from "framer-motion";
import IconButton from "./IconButton";
import {
  VscGithub,
  IoLogoJavascript,
  FaReact,
  IoLogoHtml5,
  DiCss3,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  BsGit,
} from "../assets/index";

const Experience = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center text-black dark:text-light ">
      <div className="text-center mt-[-5rem]">
        <motion.div
          whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
        >
          <h1 className="text-[60px] text-primary">Skills</h1>
          <p className="text-[25px] mt-[-2rem]">My Technical Level</p>
        </motion.div>
        <div className="flex gap-[5rem] justify-center p-10 mt-[4rem]">
          <motion.div
            className="bg-white  dark:bg-primaryDark h-[250px] p-5 flex flex-col gap-3 rounded-lg shadow-xl"
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            initial={{ y: -80, opacity: 0 }}
          >
            <h1 className="text-[30px]">Front-End</h1>
            <div className="flex gap-2">
              <IconButton text="HTML" color="bg-[#FF5733]">
                <IoLogoHtml5 size={40} />
              </IconButton>
              <IconButton text="CSS" color="bg-[#264de4]">
                <DiCss3 size={40} />
              </IconButton>

              <IconButton text="JavaScript" color="bg-[#f0db4f]">
                <IoLogoJavascript size={40} />
              </IconButton>
            </div>
            <div className="flex gap-2">
              <IconButton text="React" color="bg-[#61DBFB]">
                <FaReact size={40} />
              </IconButton>

              <IconButton text="Bootstrap" color="bg-[#563d7c]">
                <SiBootstrap size={40} />
              </IconButton>

              <IconButton text="Tailwind" color="bg-[#3490dc]">
                <SiTailwindcss size={40} />
              </IconButton>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-primaryDark h-[250px] w-[224px] p-5 flex flex-col gap-3 rounded-lg shadow-xl"
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            initial={{ y: -80, opacity: 0 }}
          >
            <h1 className="text-[30px]">Back-End</h1>
            <div className="flex gap-2">
              <IconButton text="PHP" color="bg-[#8993be]">
                <SiPhp size={40} />
              </IconButton>

              <IconButton
                text="MySQL"
                color="bg-gradient-to-r from-[#00758f] to-[#f29111]"
              >
                <SiMysql size={40} />
              </IconButton>
            </div>
          </motion.div>
          <motion.div
            className="bg-white  dark:bg-primaryDark h-[250px] w-[224px] p-5 flex flex-col gap-3 rounded-lg shadow-xl"
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.8 },
            }}
            initial={{ y: -80, opacity: 0 }}
          >
            <h1 className="text-[30px]">Others</h1>
            <div className="flex gap-2">
              <IconButton text="github">
                <VscGithub size={40} />
              </IconButton>
              <IconButton text="git" color="bg-[#f34f29]">
                <BsGit size={40} />
              </IconButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
