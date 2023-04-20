import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { motion, useAnimationControls } from "framer-motion";
import DarkMode from "./darkMode/DarkMode";

const MotionLink = motion(Link);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const animation = useAnimationControls();

  async function sequence() {
    await animation.start({ rotate: -90 });
    await animation.start({ scale: 1.5 });
    await animation.start({ rotate: 0 });
    animation.start({ scale: 1 });
  }

  return (
    <nav className="w-full flex pt-6 px-20 pb-3 items-center fixed top-0 z-20 bg-light">
      <div className="w-full flex justify-between items-center mx-[70px]">
        <div className="bg-primary p-2 rounded-lg md:hidden z-20">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="">
          <motion.ul
            className="list-none hidden md:flex flex-row gap-7"
            animate={{
              y: 0,
              transition: { duration: 0.6 },
              opacity: 1,
            }}
            initial={{ y: -100, opacity: 0 }}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-primary" : "text-black"
                } hover:text-primary text-[14px] font-medium cursor-pointer underlineHover`}
                onClick={() => setActive(link.title)}
              >
                <a
                  href={`#${link.id}`}
                  className={`${active === link.title ? "active" : ""}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <motion.div
            animate={{ scale: 1, transition: { duration: 0.8 } }}
            initial={{ scale: 0 }}
          >
            <MotionLink
              href="/"
              className="bg-dark hidden md:flex rounded-full justify-center items-center text-2xl font-bold w-12 h-12 top-0"
              whileHover={{ scale: 0.8 }}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              onTap={sequence}
              animate={animation}
            >
              DB
            </MotionLink>
          </motion.div>
        </div>
        <motion.div
          animate={{
            y: 0,
            transition: { duration: 0.6 },
            opacity: 1,
          }}
          initial={{ y: -100, opacity: 0 }}
        >
          <DarkMode />
        </motion.div>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-0 left-0 mx-4 my-2 min-w-[140px] h-[400px] z-10 rounded-xl sm:hidden`}
      >
        <ul className="list-none flex justify-start items-start flex-col gap-4"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
