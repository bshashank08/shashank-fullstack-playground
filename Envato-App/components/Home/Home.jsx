"use client";
import React from "react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ResponsiveBlocks from "../ResponsiveBlocks/Features";
import doctorIcon from "@/public/doctor.svg";
import womanDoctorBackground1 from '../../public/womanDoctorBackground1.jpg';

export default function Home() {
  return (
    <>
      <section className="min-h-[560px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        loop
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#FFF",
          "--swiper-pagination-color": "#33C1FF",
          "--swiper-pagination-bullet-inactive-color": "#CCC",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
        }}
      >
        <SwiperSlide>
          <div className="bg-white h-140 flex items-center">
            <div className="w-full  md:w-1/2 px-6 md:pl-12 pl-4">
              <h1 className="md:text-5xl text-[#010304cf] font-bold text-start font-serif text-4xl break-words">
                Best Choice For Medical Healthcare
              </h1>
              <p className="mt-4 text-gray-700 md:text-2xl break-words text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white h-140 flex items-center">
            <div className="w-full md:w-1/2 px-6 md:pl-12 pl-4 flex flex-col  ">
              <h1 className="md:text-5xl text-[#010304cf] font-bold text-start font-serif text-4xl break-words">
                We are Expert & Believe in Our Services
              </h1>
              <p className="mt-4 text-gray-700 md:text-2xl break-words text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
      <div className="flex md:flex-row flex-col h-70 md:gap-0 gap-4">
        <div className="bg-[rgb(25,154,219)]">
          <ResponsiveBlocks svg={doctorIcon}>
            <h1>Qualified Doctors</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </ResponsiveBlocks>
        </div>
        <div className="bg-[rgb(94,184,228)]">
          <ResponsiveBlocks svg={doctorIcon}>
            <h1>Qualified Doctors</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </ResponsiveBlocks>
        </div>
        <div className="bg-[rgb(25,154,219)]">
          <ResponsiveBlocks svg={doctorIcon}>
            <h1>Qualified Doctors</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </ResponsiveBlocks>
        </div>
        <div className="bg-[rgb(94,184,228)]">
          <ResponsiveBlocks svg={doctorIcon}>
            <h1>Qualified Doctors</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </ResponsiveBlocks>
        </div>
      </div>
    </>
  );
}
