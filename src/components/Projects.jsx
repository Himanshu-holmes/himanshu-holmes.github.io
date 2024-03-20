import { Link } from "react-router-dom";
import { Card } from "./Card";
const projLink = [
  {
    name:"p1",
    link:"https://test.hsacademyvns.edu.in/"
  },
  {
    name:"p2",
    link:"https://rajschoolvns.edu.in/"
  },

  {
    name:"p3",
    link:"https://new-estate.onrender.com/"
  },
  {
    name:"p4",
    link:"https://himanshu-holmes.github.io/Team-Member-Allocation/"
  },
  {
    name:"p5",
    link:"https://himanshu-holmes.github.io/Meals-app/"
  },
  {
    name:"p6",
    link:"https://himanshuholmes.me/Js-Calculator/",

  },
  
]

function Projects() {
  return (
    <div id="project">
      <h1 className="p-10 md:p-20 font-black leading-none text-center text-3xl md:text-6xl  md:mb-16">
        Projects
      </h1>

      {/* duo cards in a viewpoint */}
      <div className="flex lg:flex-nowrap flex-wrap sm:flex-col xl:flex-row justify-center xl:justify-between m-10 xl:m-10 md:mx-56">
        <div className="relative">
          {/* Card with index 1 */}
          <Link to={projLink[0].link} target="_blank">

          <Card src={"/projects/p1.webp"} index={1} bgColor="yellow" />
          </Link>
        </div>

        <div className="relative  mt-10 md:mt-36">
          {/* Card with index 2 */}
          <Link to={projLink[1].link} target="_blank">
          <Card src={"/projects/p2.webp"} index={2} bgColor="orange" />
          </Link>
        </div>
      </div>
      {/* duo cards in a viewpoint */}
      <div className="flex lg:flex-nowrap flex-wrap sm:flex-col xl:flex-row justify-center xl:justify-between m-10 xl:m-10 md:mx-56">
        <div className="relative">
          {/* Card with index 3 */}
          <Link to={projLink[2].link} target="_blank">
          <Card src={"/projects/p3.webp"} index={3} bgColor={"blue"} />
          </Link>
        </div>
        {/* card with index 4 */}
        <div className="relative  mt-10 md:mt-36">
          {/* Card with index 2 */}
          <Link to={projLink[3].link} target="_blank">
          <Card src={"/projects/p4.webp"} index={2} bgColor="orange" />
          </Link>
        </div>
      </div>

      {/* duo cards in a viewpoint */}
      <div className="flex lg:flex-nowrap flex-wrap sm:flex-col xl:flex-row justify-center xl:justify-between m-10 xl:m-10 md:mx-56">
        <div className="relative">
          {/* Card with index 5 */}
          <Link to={projLink[4].link} target="_blank">
          <Card src={"/projects/p5.webp"} index={3} bgColor={"blue"} />
          </Link>
        </div>
        {/* card with index 6 */}
        <div className="relative  mt-10 md:mt-36">
          {/* Card with index 2 */}
          <Link to={projLink[5].link} target="_blank">
          <Card src={"/projects/p6.webp"} index={2} bgColor="orange" />
          </Link>
        </div>
      </div>
      
      
    </div>
  );
}
export default Projects;
