import React from "react";
import MyBets from "../../components/Mybets/MyBets";
import OpenBets from "../../components/OpenBets/OpenBets";
import PreviousBets from "../../components/PreviousBets/PreviousBets";

function index() {
  return (
    <div className=" mt-[47px]">
      <div className="relative flex flex-col items-center max-w-screen-xl  border-[1px] border-white mx-auto md:flex-row rounded-[14.16px] h-[268px]  ">
        <img src = '/Group-8415.png' alt="" className="w-[100%] h-[100%] object-fit"/>
      </div>
      <MyBets/>
      <OpenBets/>
      <PreviousBets/>
    </div>
  );
}

export default index;
