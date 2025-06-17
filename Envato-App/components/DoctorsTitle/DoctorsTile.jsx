import Image from "next/image";

export default function DoctorsTile({
  name,
  specialization,
  doctorsTileImage,
}) {
  return (
    <>
      <div className="flex flex-col w-70 shadow-xl hover:scale-105">
        <div className="h-80 w-full relative">
          <Image
            src={doctorsTileImage}
            alt="Doctors Tile"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="bg-amber-500 h-30 flex flex-col items-center pt-4 gap-1.5">
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-white">{specialization}</p>
        </div>
      </div>
    </>
  );
}
