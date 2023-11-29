import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="flex justify-between">
        <div className="font-ephesis text-3xl">Himanshu Kumar</div>
        <div className="">
          <ul className="flex">
            <li className="mx-2">
              <Link>Home</Link>
            </li>
            <li className="mx-2">
              <a href={"#project"}>Projects</a>
            </li>
            <li className="mx-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="mx-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}
export default Navbar