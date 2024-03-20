import { Link } from "react-router-dom";
import resumePdf from "/resume/Himanshu_Resume.pdf";
function Navbar() {
  return (
    <nav className="flex justify-between header z-10 fixed w-full left-0 top-0 right-0  items-center bg-blue-50 bg-opacity-40 p-3 ">
      <h1 className="font-ephesis text-3xl bg-blue-50 bg-opacity-0 ">
        Himanshu Kumar
      </h1>
      <div className="bg-blue-50 bg-opacity-0">
        <ul className="flex bg-blue-50 bg-opacity-0">
          <li className="mx-2 font-bold text-lg bg-blue-50  bg-opacity-0">
            <a className="bg-blue-50 bg-opacity-0" href={resumePdf} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li className="mx-2 bg-blue-50 bg-opacity-0">
            <Link className="bg-blue-50 bg-opacity-0">Home</Link>
          </li>
          <li className="mx-2 bg-blue-50 bg-opacity-0">
            <a className="bg-blue-50 bg-opacity-0" href={"#project"}>Projects</a>
          </li>
          <li className="mx-2 bg-blue-50 bg-opacity-0">
            <a className="bg-blue-50 bg-opacity-0" href="#skills">Skills</a>
          </li>
          <li className="mx-2 bg-blue-50 bg-opacity-0">
            <a className="bg-blue-50 bg-opacity-0" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
