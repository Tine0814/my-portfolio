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

const App = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   const delay = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(delay);
  // }, []);
  return (
    <BrowserRouter>
      <Particle />

      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="realative z-0 bg-light dark:bg-dark w-full min-h-screen">
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
