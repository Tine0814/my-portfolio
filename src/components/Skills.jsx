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
  SiMongodb,
  SiExpress,
  FaNodeJs,
} from "../assets/icon";

const Experience = () => {
  return (
    <section className=" relative w-full h-screen flex justify-center items-center mt-[-25rem] md:mt-0 text-gray-500">
      <div className="text-center mt-[-5rem] absolute top-40">
        <motion.div
          whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
        >
          <h1 className="text-[30px] md:text-[60px] text-primary">Skills</h1>
          <p className="text-[15px] md:text-[25px] md:mt-[-2rem]">
            My Technical Level
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-[5rem] md:m-[4rem] justify-center md:p-10 md:mt-[4rem] ">
          <motion.div
            className="bg-white  dark:bg-primaryDark h-[250px] p-5 flex flex-col gap-3 rounded-lg shadow-xl"
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            initial={{ y: -80, opacity: 0 }}
          >
            <div className="">
              <h1 className="text-[30px]">Front-End</h1>
              <div className="flex gap-2">
                <IconButton
                  textColor="text-white"
                  text="HTML"
                  color="bg-[#FF5733]"
                >
                  <IoLogoHtml5 size={40} />
                </IconButton>
                <IconButton
                  textColor="text-white"
                  text="CSS"
                  color="bg-[#264de4]"
                >
                  <DiCss3 size={40} />
                </IconButton>

                <IconButton
                  textColor="text-white"
                  text="JavaScript"
                  color="bg-[#f0db4f]"
                >
                  <IoLogoJavascript size={40} />
                </IconButton>
              </div>
            </div>
            <div className="flex gap-2">
              <IconButton
                textColor="text-white"
                text="React"
                color="bg-[#61DBFB]"
              >
                <FaReact size={40} />
              </IconButton>

              <IconButton
                textColor="text-white"
                text="Bootstrap"
                color="bg-[#563d7c]"
              >
                <SiBootstrap size={40} />
              </IconButton>

              <IconButton
                textColor="text-white"
                text="Tailwind"
                color="bg-[#3490dc]"
              >
                <SiTailwindcss size={40} />
              </IconButton>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-primaryDark h-[250px] p-5 flex flex-col gap-3 rounded-lg shadow-xl"
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            initial={{ y: -80, opacity: 0 }}
          >
            <h1 className="text-[30px]">Back-End</h1>
            <div className="flex gap-2">
              <IconButton
                textColor="text-white"
                text="MongoDB"
                color="bg-[#589636]"
              >
                <SiMongodb size={40} />
              </IconButton>
              <IconButton
                textColor="text-black"
                text="Express.js"
                color="bg-[white]"
              >
                <SiExpress size={40} />
              </IconButton>
              <IconButton
                textColor="text-white"
                text="Node.js"
                color="bg-[#68A063]"
              >
                <FaNodeJs size={40} />
              </IconButton>
            </div>
            <div className="flex gap-2">
              <IconButton
                textColor="text-white"
                text="PHP"
                color="bg-[#8993be]"
              >
                <SiPhp size={40} />
              </IconButton>

              <IconButton
                textColor="text-white"
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
              <IconButton textColor="text-white" text="github">
                <VscGithub size={40} />
              </IconButton>
              <IconButton
                textColor="text-white"
                text="git"
                color="bg-[#f34f29]"
              >
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
