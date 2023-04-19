import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { motion, useAnimationControls } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
    <motion.nav
      className="w-full flex pt-6 px-20 pb-3 items-center fixed top-0 z-20  "
      animate={{ scale: 1, transition: { duration: 1.5 } }}
      initial={{ scale: 0 }}
    >
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
          <ul className="list-none hidden md:flex flex-row gap-7">
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
          </ul>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <MotionLink
            href="https://www.youtube.com/"
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
        </div>
        <div className="">
          <ul className="hidden md:flex flex-row gap-4 text-black">
            <motion.li className="" whileHover={{ scale: 0.8 }}>
              <a href="https://github.com/Tine0814">
                <VscGithub size="1.5rem" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 0.8 }}>
              <a href="">
                <BsFacebook size="1.5rem" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 0.8 }}>
              <a href="">
                <AiFillInstagram size="1.5rem" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 0.8 }}>
              <a href="">
                <AiFillLinkedin size="1.5rem" />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-0 left-0 mx-4 my-2 min-w-[140px] h-[400px] z-10 rounded-xl sm:hidden`}
      >
        <ul className="list-none flex justify-start items-start flex-col gap-4"></ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
