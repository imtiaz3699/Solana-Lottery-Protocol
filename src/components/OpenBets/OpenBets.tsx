import { Image } from "antd";

import BetCard from "./BetCard";

function OpenBets() {
  const arrows =
    "w-[42.19px] h-[42.19px] border-[1px] border-[#FFFFFF26] rounded-full flex justify-center items-center";
  return (
    <div className="mt-[47px] ">
      <div className="flex flex-row items-center justify-between ">
        <h1 className="text-white popin-fonts text-[22.25px] font-bold leading-[33.75px]">
          Open Bets
        </h1>
        <div className="flex flex-row items-center gap-[9.36px]">
          <p className="text-[#00EC66]">See all</p>
          <p className="text-[#545961]">(12)</p>
          <div className={arrows}>
            <Image src="/arrow.png" preview={false} />
          </div>
          <div className={`rotate-180 ${arrows}`}>
            <Image src="/arrow.png" preview={false} />
          </div>
        </div>
      </div>

      <div className="mt-[31px]">
        <BetCard />
      </div>
    </div>
  );
}

export default OpenBets;
