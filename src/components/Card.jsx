import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Card({ item }) {
  console.log(item);
  const imgSrc = item.imgSrc;
  return (
    <div className="flex flex-col">
      <div>
        {imgSrc && imgSrc.length > 0 ? (
          <Slide>
            {item.imgSrc.map((url, index) => (
              <div className="each-slide-effect " key={index}>
                <div
                  className="rounded-t-lg"
                  style={{ backgroundImage: `url(${url})` }}
                >
                  <span></span>
                </div>
              </div>
            ))}
          </Slide>
        ) : (
          <p>no img</p>
        )}
      </div>
      <div className="bg-slate-300 ">
        <div className="font-bold mt-2 bg-slate-300 text-black flex justify-between p-2">
          <div className="bg-slate-300 ">{item.title}</div>
          <div className="bg-slate-300">
            <button className="rounded-sm">
              <a
                className="bg-red-500"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 text-black">{item.description}</div>
      </div>
    </div>
  );
}
export default Card;
