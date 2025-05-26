import Contact from "./Contact";
import Icons from "../../../assets/Icons";
import Tumblr from "../../../public/tumblr.svg";

export default function Socials() {
  return (
    <div className="bg-white flex justify-between h-11 items-center px-60 text-black border-b-[#eeee] border-b-1 ">
      <div>
        <div className="flex gap-8">
          <div>
            <Contact icon={Icons.Phone}>+1 (593) 948 6453 </Contact>
          </div>
          <div>
            <Contact icon={Icons.Clock}>Mon - Sun 7:30am - 9:30pm</Contact>
          </div>
          <div>
            <Contact icon={Icons.Email}>enquery@medino.com</Contact>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around space-x-5">
      <div className="flex space-x-4">
      <div>{Icons.Twitter}</div>
      <div>
        <a href="google.com"><img src="/tumblr.svg" className="h-3 w-3 mt-0.5 " alt="T" /></a> 
      </div>
      <div>
        <img src="./youtube.svg" className="h-4 w-4 " />
      </div>
      <div>
        <img src="./tik-tok.svg" className="h-4 w-4 " />
      </div>
      </div>
      <div>
        <button className="bg-[#00a3c8] h-9 rounded-3xl text-white text-sm w-44">
          Make an Appointment
        </button>
      </div>
      </div>
    </div>
  );
}
