import { Image } from 'antd'
import React from 'react'

function MyBets() {
    const arrows = 'w-[42.19px] h-[42.19px] border-[1px] border-[#FFFFFF26] rounded-full flex justify-center items-center'
    
  return (
    <div className='flex flex-col gap-[22px] mt-[51px]'>
        <div className='flex flex-row items-center justify-between '>
            <h1 className='text-white popin-fonts text-[22.25px] font-bold leading-[33.75px]'>My bets</h1>
            <div className='flex flex-row items-center gap-[9.36px]'>
                <p className='text-[#00EC66]'>See all</p>
                <p className='text-[#545961]'>(12)</p>
                <div className = {arrows} >
                    <Image src = '/arrow.png' preview={false}/>
                </div>
                <div className={`rotate-180 ${arrows}`} >
                    <Image src = '/arrow.png' preview={false}/>
                </div>
            </div>
            
        </div>
        <div className={` shadow-xl max-w-[464px] py-[19px] px-[17px] border-[1px] border-[#464B58B4] rounded-[17.96px] gradiant-style`}>
                <div className='flex flex-row items-start justify-between '>
                        <p className='flex flex-col  text-white popin-fonts font-normal'>Bet Name
                            <span className='font-bold text-[12.56px]'>BET Id:#125256</span>
                        </p>
                    <button className='gradiant-button'>Withdraw Bet</button>
                </div>

                <div className='flex flex-row justify-between items-end mt-[21px]'>
                    <div>
                        <p className='text-[#CE2DF9] text-[14.32px] font-normal leading-[21px]'>bet of</p>
                        <p className='text-[#00EC66] text-[29.29px] font-bold popin-fonts leading-[43px]'>$100</p>
                    </div>
                    <div className='flex flex-row items-center gap-8 mt-[21px]'>
                        <div className='flex flex-col'>
                            <img src='/Group 8377.png' alt="" className='w-[36.12px] h-[36.12px] rounded-full'/>
                            <p className='text-[#CCD6F6] font-normal text-[12.28px] leading-[18.42px]'>Amer</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[15.59px] font-bold leading-[15.31px] text-[#CCD6F6] '>Vs</p>
                            <p className='text-[#00EC66] font-bold text-[12.56px] leading-[18.84px]'>$100</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[36.12px] h-[36.12px] rounded-full bg-[#5A5A5A] flex justify-center items-center'>
                            <img src="/_.png" alt="" className=''/>
                            </div>
                            <p className='font-normal text-[12px] leading-[18.42px] text-[#CCD6F6]'>User</p>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default MyBets
