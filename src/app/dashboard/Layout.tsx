import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "@/components/Dashboard/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-row justify-start">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto bg-[#14151A] text-[#fff]">
        <Navbar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
