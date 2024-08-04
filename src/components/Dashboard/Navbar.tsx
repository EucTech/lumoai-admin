"use client";
import { montserrat } from "@/font";
import { links } from "@/ultilities/ultils";
import classNames from "classnames";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import Spinner from "../Spinner";
import Logout from "@/hooks/Logout";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { handleLogout } = Logout();

  const handleProfile = () => {
    router.push("/dashboard/profile");
  };

  const handleLinkClick = (link: any) => {
    if (pathname !== link) {
      setLoading(true);
      setSidebarOpen(false);
      setTimeout(() => {
        router.push(link);
      }, 200);
    } else {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const openNavTransitions = classNames({
    "transition-transform duration-700 ease-in-out transform": true,
    "-translate-y-[120%]": !sidebarOpen,
    "translate-y-[8%]": sidebarOpen,
  });

  return (
    <div
      className={` relative flex items-center gap-5 w-full justify-between py-6 px-5 sm:px-10 ${montserrat.className}`}
    >
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
          <Spinner />
        </div>
      )}
      <div onClick={()=>router.push('/')} className="flex cursor-pointer items-center gap-4  md:hidden">
        <Image
          src="/logo.svg"
          alt="logo"
          aria-hidden="true"
          width={500}
          height={500}
          className="sm:h-[40px] sm:w-[40px] w-[30px]"
        />
        <h1 className="text-[20px] md:text-[24px] font-black text-[#E89578] ">
          LumoAI
        </h1>
      </div>

      <AlignLeft
        className="block md:hidden"
        onClick={() => setSidebarOpen((prev) => !prev)}
      />

      {/* <div className="md:flex items-center gap-2 hidden md:ml-auto ">
        <p className="py-1 px-3 text-[13px] text-[#11C017] bg-[#D0FBD2] border border-solid rounded-lg font-medium border-[#11C017]">
          Active
        </p>
        <Image
          onClick={handleProfile}
          src="/user-image.png"
          alt="Users image"
          width={800}
          height={800}
          className="w-full h-auto cursor-pointer rounded-full"
        />
      </div> */}

      <div
        className={`${openNavTransitions} left-0 top-[20px] w-screen h-svh flex flex-col gap-10  bg-[#1a1919] z-50 absolute  py-40 px-5 sm:px-20 md:hidden`}
      >
        {sidebarOpen && (
          <div className=" flex flex-col gap-40 mx-auto ">
            {links?.map((links, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                {links?.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 hover:text-[#8F8E94]"
                    onClick={() => handleLinkClick(link.link)}
                  >
                    <span className="text-[26px]">{link.icon}</span>{" "}
                    <span className="text-[20px] font-medium">{link.name}</span>
                  </div>
                ))}
              </div>
            ))}

            <div className=" w-full flex gap-4" onClick={handleLogout}>
              <MdLogout className="text-[24px]" />
              <p className="text-[18px] font-medium">Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
