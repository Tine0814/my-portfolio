import { BrowserRouter } from "react-router-dom";
import { Navbar, Home, About } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realative z-0 bg-light w-full min-h-screen">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
