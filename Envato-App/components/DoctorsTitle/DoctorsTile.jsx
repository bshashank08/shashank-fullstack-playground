'use client';
import Image from "next/image";
import { useState } from "react";

export default function DoctorsTile({
  name,
  specialization,
  doctorsTileImage,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="flex flex-col w-70 shadow-xl hover:scale-105 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-80 w-full relative">
          <Image
            src={doctorsTileImage}
            alt="Doctors Tile"
            className="object-cover"
            layout="fill"
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-xs">
              <span className="text-black text-lg font-semibold px-4 py-2 rounded">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
              </span>
            </div>
          )}
        </div>
        <div className="bg-amber-500 h-30 flex flex-col items-center pt-4 gap-1.5">
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-white">{specialization}</p>
        </div>
      </div>
    </>
  );
}
