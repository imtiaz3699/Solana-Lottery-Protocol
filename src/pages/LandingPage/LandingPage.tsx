

import Footer from "../../components/Footer/Footer";
import MyBets from "../../components/Mybets/MyBets";
import OpenBets from "../../components/OpenBets/OpenBets";
import PreviousBets from "../../components/PreviousBets/PreviousBets";

function index() {
  return (
    <div className=" mt-[47px]">
      <div className="relative flex flex-col items-center  md:flex-row rounded-[14.16px] h-[308px] w-[100%]  ">
        <img src = '/Group-8415.png' alt="" className="w-[100%] h-[100%] "/>
      </div>
      <MyBets/>
      <OpenBets/>
      <PreviousBets/>
      <Footer/>
    </div>
  );
}

export default index;
