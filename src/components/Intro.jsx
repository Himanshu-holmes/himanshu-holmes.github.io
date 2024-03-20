import { AnimatedTooltipPreview } from "./AnimatedTooltip"
import { AnimatedTooltip } from "./ui/animated-tooltip"

function Intro() {
  return (
    <div className="flex flex-col-reverse md:flex-row p-2 mt-10">
       
    <div className="sm:w-1/2 text-justify  font-semibold md:leading-relaxed md:mt-20 text-2xl">
      Hello! I'm Himanshu, a dedicated Full Stack Developer proficient in
      the MERN stack, SQL, and TypeScript. With expertise in MongoDB for
      scalable databases, Express.js and Node.js for robust server-side
      development, and React.js for intuitive user interfaces, I bring a
      holistic approach to the development lifecycle. My skills extend to
      crafting efficient SQL queries and leveraging TypeScript's power for
      code quality. I thrive in dynamic environments, having contributed to
      diverse projects, and I'm always eager to explore new technologies.
      Let's collaborate and build something extraordinary! 💻✨
    </div>
    <div className="sm:w-2/4 md:ml-20">
      <img
        className="mt-3 m-2 border-4 border-orange-500 rounded-full  transition-all duration-500 hover:scale-110 hover:rotate-2 "
        src="/Himpic.jpg"
        alt="Rounded avatar"
      />
    </div>
  </div>
  )
}
export default Intro