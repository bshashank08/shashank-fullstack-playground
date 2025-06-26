'use client'
import menuItems from "@/utils/menuItems";
import Image from "next/image";
import companyLogo from "@/public/assets/companyLogo.svg";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0";

export default function Menu() {
  const path = usePathname();
  const { user } = useUser();
  return (
    <>
      <div className="sticky top-14 bg-white h-18 z-50">
        <header className="h-18 px-8">
          <div className= "hidden md:flex justify-around items-center-safe">
            <div className="flex justify-between items-center ">
              <Image
                src={companyLogo}
                alt="T"
                className="h-full w-20 hover:scale-105"
              />
            </div>
            { user && (<nav className=" flex text-black space-x-4 ">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group" data-testid={`menu-item-${index}`}>
                  <Link href={item.href || "#"} className={(path.startsWith(item.href) ? "text-[#00a3c8] font-bold text-lg" : "hover:text-[#00a3c8] text-gray-700 text-lg") }>
                    {item.name}
                  </Link>
                  {item.subPages && (
                    <div className="absolute left-0 bg-white hidden group-hover:block z-50">
                      <ul>
                        {item.subPages.map((subItem, subIndex) => (
                          <li
                            className=" hover:bg-[#00a3c8] hover:text-white w-fit py-0.5"
                            key={subIndex}
                          >
                            <Link href={subItem.href}>{subItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>)}

            {/* Search Bar */}
            <div className="relative hidden md:flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 text-black rounded-4xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <i className="absolute right-3 text-2xl bx bx-search text-[#382b2b6d]"></i>
            </div>
          </div>
          {/* Hamburger Menu Icon */}
          {/* <i className="md:hidden bx bx-menu text-black cursor-pointer text-3xl"></i> */}
        </header>
      </div>
    </>
  );
}
