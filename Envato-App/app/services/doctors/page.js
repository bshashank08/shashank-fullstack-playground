import DoctorsTile from "@/components/DoctorsTitle/DoctorsTile";
import doctorTile1 from "@/public/assets/doctorTile1.jpg";
import doctorTile2 from "@/public/assets/doctorTile2.jpg";
import doctorTile3 from "@/public/assets/doctorTile3.jpg";
import doctorTile4 from "@/public/assets/doctorTile4.jpg";

export default function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 gap-10">
        <h1 className="text-black  text-3xl font-lato">
          MEET OUR <span className="text-red-700 font-bold">DOCTORS</span>!
        </h1>
        <div className="w-12 h-0.5 bg-[#0087be] rounded-full p-0"></div>
        <div>
          <p className="text-[#666666] break-words text-center w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center w-full md:flex-row flex-col items-center">
          <DoctorsTile
            doctorsTileImage={doctorTile1}
            name={"Dr. Ken Morgan"}
            specialization={"Cardiologist"}
          />
          <DoctorsTile
            doctorsTileImage={doctorTile2}
            name={"Dr. Andrew Bert"}
            specialization={"Dermatologist"}
          />
          <DoctorsTile
            doctorsTileImage={doctorTile3}
            name={"Dr. Aimee Devlin"}
            specialization={"Surgery"}
          />
          <DoctorsTile
            doctorsTileImage={doctorTile4}
            name={"Dr. Jorge Carnival"}
            specialization={"Ophthalmologist"}
          />
        </div>
      </div>
    </>
  );
}
