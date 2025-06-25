"use client";

import Contact from "./Contact";
import Image from "next/image";
import Tumblr from "@/public/assets/tumblr.svg";
import Youtube from "@/public/assets/youtube.svg";
import Tiktok from "@/public/assets/tik-tok.svg";
import Phone from "@/public/assets/phone.svg";
import headerClock from "@/public/assets/headerClock.svg";
import Email from "@/public/assets/email.svg";
import Twitter from "@/public/assets/twitter.svg";
import { useState } from "react";
import AppointmentModalWrapper from "../../Appointment/AppointmentWrapper";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Socials() {
  const { user, isLoading } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hidden xl:flex justify-around items-center h-11 bg-white text-black border-b-[#eeee] border-b-1 ">
        <div className="flex flex-nowrap items-center justify-between gap-8">
          <div>
            <Contact icon="/assets/phone.svg" altText="Phone" >+1 (593) 948 6453 </Contact>
          </div>
          <div>
            <Contact icon="/assets/headerClock.svg" altText="Clock">Mon - Sun 7:30am - 9:30pm</Contact>
          </div>
          <div>
            <Contact icon="/assets/email.svg" altText="Email">enquery@medino.com</Contact>
          </div>
        </div>
        <div className="flex items-center justify-around space-x-5">
          <div className="flex space-x-4">
            <div className="hover:scale-140">
              <Image
                  src={Twitter}
                  className="h-4 w-4 mt-0.5 mb-0.5 hover:scale-140"
                  alt="T"
                />
            </div>
            <div>
              <a href="google.com">
                <Image
                  src={Tumblr}
                  className="h-3 w-3 mt-0.5 hover:scale-140"
                  alt="T"
                />
              </a>
            </div>
            <div>
              <a href="google.com">
                <Image
                  src={Youtube}
                  className="h-4 w-4 hover:scale-140"
                  alt="Y"
                />
              </a>
            </div>
            <div>
              <a href="google.com">
                <Image
                  src={Tiktok}
                  className="h-3.5 w-4 hover:scale-140 "
                  alt="TK"
                />
              </a>
            </div>
          </div>
          <div>
            {/* <Link href="/Appointments" > */}
            <button
              onClick={handleOpenModal}
              className="bg-[#00a3c8] h-9 rounded-3xl text-white text-sm w-44 hover:bg-[#6ebacb] cursor-pointer"
            >
              Make an Appointment
            </button>
            {isModalOpen && (
              <AppointmentModalWrapper onClose={handleCloseModal} />
            )}
            {/* </Link> */}
          </div>
          {user && (
            <div>
              <Link href="/Profile">
                <img
                  src={user.picture}
                  alt="Profile"
                  className="rounded-full border-black border-[1] h-9 w-9"
                  decode="async"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      {}
    </>
  );
}
