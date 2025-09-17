import Navbar from "./Components/Navbar";
import "./index.css";
import Contact from "./Sections/Contact";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import WorkExperience from "./Sections/WorkExperience";

function App() {
  return (
    <>
      <div className=" w-full  text-white  hide-scrollbar bg-bg min-h-screen">
        <Navbar />
        <div className="2xl:w-[75%] xl:w-[85%] w-full relative hide-scrollbar mx-auto overflow-x-hidden">
          <Home />
          <WorkExperience />
          <Projects />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
