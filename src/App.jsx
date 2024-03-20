
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="text-white p-4">
     <Navbar />
      <Intro />
     
      <Projects />
      <Skills />
      <h1 className="text-6xl p-10 md:p-20 text-center underline decoration-pink-600" id="contact">Contact</h1>
      <Contact />
    </div>
  );
}

export default App;
