"use client";
import { store } from "@/store";
import { usePathname } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

interface WapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WapperProps) => {
  // const pathname = usePathname();

  return (
    <>
      <section className="w-full h-full">
        <Provider store={store}>
        <>{children}</>
        </Provider>
      </section>
    </>
  );
};

export default Wrapper;
