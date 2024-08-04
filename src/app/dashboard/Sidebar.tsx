"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { links } from "../../ultilities/ultils";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logout from "@/hooks/Logout";
import Spinner from "@/components/Spinner";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const activePath = pathname;

  const { handleLogout } = Logout();

  useEffect(() => {
    const handleResize = () => {
      setOnSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const wrapperClasses = classNames(
    "flex flex-col h-[100%]  overflow-hidden md:block hidden pb-2 rounded-tr-[0] bg-[#202126]",
    {
      ["w-60"]: !toggleCollapse,
      ["w-14 "]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 rounded bg-[#fff] text-[#000] text-[16px] absolute right-3",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (link: any) => {
    return classNames(
      "flex items-center cursor-pointer text-[15px] rounded-full w-[190px] ",
      {
        "bg-[#ffffff] text-[#000]":
          (activePath === link.link && !toggleCollapse) ||
          (toggleCollapse && activePath === link.link),
        " hover:text-[#000] ": !toggleCollapse,
        "px-4 py-3": !toggleCollapse,
        "py-3 pl-4 pr-2": toggleCollapse,
        "mb-2": !toggleCollapse,
        "ml-6": !toggleCollapse,
        // "bg-[white] ml-0  rounded-tl-[80px] rounded-bl-[80px]":
        //   activePath === link.link && link.link === "/dashboard",
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleLinkClick = (link: any) => {
    if (pathname !== link) {
      setLoading(true);
      setTimeout(() => {
        router.push(link);
      }, 200);
    }
  };

  return (
    <div className=" relative ">
      <div
        className={`${wrapperClasses} hide-scrollbar `}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{
          transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
          zIndex: 1000,
          // height: "100vh",
          width: "",
        }}
      >
        <div className="flex items-center justify-around relative pt-7 w-full">
          {!toggleCollapse && (
            <div
              onClick={() => router.push("/")}
              className={cn("flex cursor-pointer items-center gap-4 ")}
            >
              <Image
                src="/logo.svg"
                alt="logo"
                aria-hidden="true"
                width={500}
                height={500}
                className="sm:h-[30px] sm:w-[30px] w-[30px]"
              />
              <h1 className="text-[20px] md:text-[20px] font-bold text-[#E89578] ">
                LumoAI
              </h1>
            </div>
          )}

          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <IoIosArrowBack />
            </button>
          )}
        </div>

        <div className="flex flex-col w-full items-start mt-10 ">
          {/* {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
          <Spinner />
        </div>
      )} */}

          {links?.map(({ title, links: sublinks }) => (
            <div key={title} className="w-[100%]">
              {sublinks?.map((link) => (
                <Link href={link?.link} key={link?.name}>
                  <span className={getNavItemClasses(link)}>
                    <div
                      style={{ width: "1.5rem" }}
                      className={` ${
                        activePath === link.link
                          ? "text-[#000000]"
                          : "text-[#ffffff] hover:text-[#8F8E94] font-semibold"
                      }`}
                    >
                      {typeof link.icon === "string" ? (
                        <Image
                          src={link.icon}
                          alt={link.name}
                          width={500}
                          height={500}
                          className="md:h-[22px] md:w-[22px] sm:h-[18px] sm:w-[18px]"
                        />
                      ) : (
                        <span className="text-[24px]">{link.icon}</span>
                      )}
                    </div>{" "}
                    &nbsp;&nbsp;
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          `text-md font-medium ${
                            activePath === link.link
                              ? "text-[#000000]"
                              : "text-[#ffffff] hover:text-[#8F8E94]"
                          }`
                        )}
                      >
                        {link?.name}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          ))}

          <div className=" w-full cursor-pointer mt-24" onClick={handleLogout}>
            {!toggleCollapse ? (
              <span className="flex gap-2 pl-10">
                <MdLogout className="text-[24px] text-[#fff]" />
                <p className="text-[18px] text-[#fff] font-medium">Logout</p>
              </span>
            ) : (
              <MdLogout className=" text-[#fff] text-[28px] mx-auto " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
