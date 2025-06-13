import Features from "../Features/Features";
import doctorIcon from "@/public/doctor.svg";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-white h-140 flex items-center">
        <div className="w-full md:w-1/2 px-6 md:pl-12 pl-4">
          <h1 className="md:text-5xl text-[#010304cf] font-bold text-start font-serif text-4xl break-words">
            Best Choice For Medical Healthcare
          </h1>
          <p className="mt-4 text-gray-700 md:text-2xl break-words text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col h-70 md:gap-0 gap-4">
        <div className="bg-[rgb(25,154,219)]">
        <Features svg={doctorIcon}>
          <h1>Qualified Doctors</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </Features>
        </div>
        <div className="bg-[rgb(94,184,228)]">
        <Features svg={doctorIcon}>
          <h1>Qualified Doctors</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </Features>
        </div>
        <div className="bg-[rgb(25,154,219)]">
        <Features svg={doctorIcon}>
          <h1>Qualified Doctors</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </Features>
        </div>
        <div className="bg-[rgb(94,184,228)]">
        <Features svg={doctorIcon}>
          <h1>Qualified Doctors</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </Features>
        </div>
      </div>
    </>
  );
}
