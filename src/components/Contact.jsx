
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
    <div className="pb-10 m-2">
    <h1 className="p-10 md:pt-20 font-black leading-none text-center text-3xl md:text-6xl  ">
        Contact me
      </h1>
     
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
    </div>
  );
}
