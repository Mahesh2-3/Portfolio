import {
  AboutMe,
  Contact,
  Experience,
  Home,
  Navbar,
  Projects,
  Skills,
} from "./Components";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20 flex flex-col gap-10 bg-primary font-primary">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
