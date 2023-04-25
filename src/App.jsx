import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, About, Skills, Portfolio, Footer } from "./components";
import Particle from "./components/Particle";

const App = () => {
  return (
    <BrowserRouter>
      <Particle />

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
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
