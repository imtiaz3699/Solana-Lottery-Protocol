import { Select } from 'antd'
import React from 'react'

function Footer() {
  return (
    <div className='text-white mt-[103px]'>
      <div className='border-y-[1px] border-[#C4C4C417] py-[31.4px] flex flex-row justify-between px-[44px]'>
        <div className='flex flex-row items-center gap-[32.33px]'>
        <img src = '/18.png'/>
        <img src = '/ssl.png'/>
        <Select style = {{width:'326px',height:'64.47px'}}/>
        </div>
        <div className='flex flex-row items-center gap-[18.42px]'>
        <img src = '/twitter.png'/>
        <img src = '/github.png'/>
        <img src = '/bitcoin.png'/>
        <img src = '/discord.png'/>
        <img src = '/Link.png'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
