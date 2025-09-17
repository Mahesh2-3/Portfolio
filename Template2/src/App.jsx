import Navbar from "./Components/Navbar";
import "./index.css";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <div className="w-full pb-20 relative bg-bg min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
