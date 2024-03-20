
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatedTooltipPreview } from "./components/AnimatedTooltip";

function App() {
  return (
    <div className="text-white p-4">
     <Navbar />
     <AnimatedTooltipPreview/>
      <Intro />
     
      <Projects />
      <Skills />
      
      <Contact />
    </div>
  );
}

export default App;
