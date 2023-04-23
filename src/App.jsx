import { BrowserRouter } from "react-router-dom";
import { Navbar, Home, About } from "./components";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realative z-0 bg-light w-full min-h-screen">
        <div className="">
          <Navbar />
          <Home />
        </div>
        <div>
          <About />
          <Experience />
        </div>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
