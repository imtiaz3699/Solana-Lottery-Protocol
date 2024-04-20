import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function Root() {
  return (
    <div className="bg-[#0C121E] w-[100%] h-[100%] ">
      <section className="container mx-auto py-[50px] flex  gap-[35px]">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar/>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Root;
