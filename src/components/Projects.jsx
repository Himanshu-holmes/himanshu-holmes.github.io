import Card from "./Card";
import data from "../data.js";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="p-2 md:flex md:flex-wrap md:justify-around" id="project">
        
      {data.map((item, index) => (
        <div className=" p-4 md:max-w-xl " key={index}>
          
            <Card item={item} />
          
        </div>
      ))}
    </div>
  );
}
export default Projects;
