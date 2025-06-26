import DoctorsTile from "@/components/DoctorsTitle/DoctorsTile";
import doctorTile1 from "@/public/assets/doctorTile1.jpg";
import doctorTile2 from "@/public/assets/doctorTile2.jpg";
import doctorTile3 from "@/public/assets/doctorTile3.jpg";
import doctorTile4 from "@/public/assets/doctorTile4.jpg";

export default function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 gap-20">
        <h1 className="text-black font-bold text-3xl font-lato">
          MEET OUR <span className="text-red-700">DOCTORS</span>!
        </h1>
        <div>
          <p className="text-black break-words text-center w-200">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="flex flex-row gap-8">
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
