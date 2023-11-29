import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// function Contact() {
//   return (
//     <div className="p-10 ">
//         <h1 className="text-6xl text-center p-10 underline decoration-pink-600">Contact</h1>
    
//     </div>
//   )
// }
// export default Contact

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [message, setMessage] = useState("");
const email = "himanshuholmes@gmail.com"
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
     <div className="gap-10 flex flex-wrap text-6xl px-20 py-4">
       <a href="https://github.com/Himanshu-holmes"><FaGithub/></a>
       <a href="https://twitter.com/Himanshu_holmes"><FaTwitter/></a>
       <a href="https://www.linkedin.com/in/himanshu-kumar-00538821b/"><FaLinkedinIn/></a>

     </div>
      <div className=" flex flex-col gap-2">
        <p>
          Contact <span className=" font-semibold">Himanshu</span>{" "}
          for{" "}
          <span className=" font-semibold"></span>
        </p>
        <textarea
          name="message"
          id="message"
          cols={50}
          rows="2"
          value={message}
          className=" w-full border p-3 rounded-lg mt-2"
          placeholder="Enter your Message here ...."
          onChange={onChange}
        ></textarea>
        <Link
          to={`mailto:${email}?subject=Regarding &body=${message}`}
          className="bg-pink-600 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
        >
          Send Message
        </Link>
      </div>
    </>
  );
}
