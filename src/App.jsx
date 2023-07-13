import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Skills,
  Portfolio,
  Footer,
  Contact,
} from "./components";
import Particle from "./components/Particle";
import { useState, useEffect } from "react";
import { LoadingComponent } from "./components/Loading/LoadingComponent";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const Circle = () => {
    let circleCount = 20;
    let circles = [];

    for (let i = 0; i < circleCount; i++) {
      let randomNumberX = Math.floor(Math.random() * 100);
      let randomNumberY = Math.floor(Math.random() * 100);

      circles.push(
        <motion.div
          key={i}
          initial={{
            scale: 1,
            left: `${randomNumberX}%`,
            top: `${randomNumberY}%`,
          }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: randomNumberX,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 2 * i, // Delay each circle's animation by multiplying the index
          }}
          className={` fixed radial-gradiant-one circle-3d`}
        ></motion.div>
      );
    }

    return <div>{circles}</div>;
  };

  return (
    <BrowserRouter>
      {/* <Particle /> */}

      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="realative z-0 bg-light dark:bg-dark w-full min-h-screen">
            {Circle()}
            <div className="">
              <Navbar />
              <Home />
            </div>
            <div>
              <About />
              <Skills />
            </div>
            <div>
              <Portfolio />
              <Contact />
            </div>
            <Footer />
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
