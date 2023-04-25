import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, About, Skills } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realative z-0 bg-light dark:bg-dark w-full min-h-screen">
        <div className="">
          <Navbar />
          <Home />
        </div>
        <div>
          <About />
          <Skills />
        </div>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
