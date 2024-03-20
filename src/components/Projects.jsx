import { Card } from "./Card";

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
          <Card src={"/projects/p1.png"} index={1} bgColor="yellow" />
        </div>

        <div className="relative  mt-10 md:mt-36">
          {/* Card with index 2 */}
          <Card src={"/projects/p2.png"} index={2} bgColor="orange" />
        </div>
      </div>
      {/* duo cards in a viewpoint */}
      <div className="flex lg:flex-nowrap flex-wrap sm:flex-col xl:flex-row justify-center xl:justify-between m-10 xl:m-10 md:mx-56">
        <div className="relative">
          {/* Card with index 3 */}
          <Card src={"/projects/p3.png"} index={3} bgColor={"blue"} />
        </div>
        {/* card with index 4 */}
        <div className="relative  mt-10 md:mt-36">
          {/* Card with index 2 */}
          <Card src={"/projects/p4.png"} index={2} bgColor="orange" />
        </div>
      </div>

      {/* duo cards in a viewpoint */}
      <div className="flex lg:flex-nowrap flex-wrap sm:flex-col xl:flex-row justify-center xl:justify-between m-10 xl:m-10 md:mx-56">
        <div className="relative">
          {/* Card with index 5 */}
          <Card src={"/projects/p5.png"} index={3} bgColor={"blue"} />
        </div>
        {/* card with index 4 */}
      </div>
    </div>
  );
}
export default Projects;
