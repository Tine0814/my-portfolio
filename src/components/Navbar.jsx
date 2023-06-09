import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu } from "../assets/img";
import { motion, useAnimationControls } from "framer-motion";
import DarkMode from "./darkMode/DarkMode";

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
    <nav className="w-full flex pt-6 pb-3 items-center top-0 z-20 ">
      <div className="w-full flex justify-between items-center mx-[70px]">
        <div className="">
          <motion.div
            animate={{ scale: 1, transition: { duration: 0.8 } }}
            initial={{ scale: 0 }}
          >
            <a
              href="https://github.com/Tine0814"
              className="text-primary text-[30px]"
            >
              DSTN
            </a>
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
      {/* <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-0 left-0 mx-4 my-2 min-w-[140px] h-[400px] z-10 rounded-xl sm:hidden`}
      >
        <ul className="list-none flex justify-start items-start flex-col gap-4"></ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
