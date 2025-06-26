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
        className="flex flex-col wrap w-70 shadow-xl hover:scale-105 relative border border-gray-400"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-80 w-full relative border-b border-gray-400">
          <Image
            src={doctorsTileImage}
            alt="Doctors Tile"
            className="object-cover"
            layout="fill"
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-xs">
              <span className="text-[#666] text-lg font-semibold px-4 py-2 rounded">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
              </span>
            </div>
          )}
        </div>
        <div className="h-30 flex flex-col items-center pt-4 gap-1.5">
          <h3 className="font-bold text-[#0087be]">{name}</h3>
          <p className="text-[#666666]">{specialization}</p>
        </div>
      </div>
    </>
  );
}
