

function BetCard() {
  return (
    <div className='max-w-[342px]  bet-card-gradiant '>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                    <p className='font-normal text-[15.75px] leading-[23.62px] text-[#CCD6F6]'>
                    Bet Name  
                    </p>
                    <p className='text-[#CCD6F6]'>
                    BET ID: #125256
                    </p>
                </div>
                <div className=''>
                    <p className='text-[#CE2DF9]'>bet of</p>
                    <p className='text-[#00EC66] font-bold text-[22.66px] leading-[33.98px]'>$100</p>
                </div>
            </div>
            <div className=''>
            <div className='flex flex-row items-center justify-between mt-[21px]'>
                        <div className='flex flex-col'>
                            <img src='/Group 8377.png' alt="" className='w-[46.32px] h-[46.32px] rounded-full'/>
                            <p className='text-[#CCD6F6] font-normal text-[15.75px] leading-[23.62px]'>Amer</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[20px] font-bold leading-[19.63px] text-[#CCD6F6] '>Vs</p>
                            <p className='text-[#00EC66] font-bold text-[16.11px] leading-[24.17px]'>$100</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-[46.36px] h-[46.32px] rounded-full bg-[#5A5A5A] flex justify-center items-center'>
                            <img src="/Frame.png" alt="" className=''/>
                            </div>
                            <p className='font-normal text-[12px] leading-[18.42px] text-[#CCD6F6]'>User</p>
                        </div>
                    </div>
            </div>
            <button className='gradiant-button'>Bet $100</button>
        </div>
    </div>
  )
}

export default BetCard
