import { Button, Col, Row,Image, Typography } from 'antd'


function Navbar() {
    const connectWallet = 'w-[197px] h-[53px] bg-[#5A5A5A] rounded-[75px] text-white shadow-inner shadow-[#282D39] popin-fonts font-normal text-[16.49px] leading-[24.74px]';
  return (
    <Row style = {{width:'100%',display:'flex',justifyContent:'space-between'}}>
        <Col>
        
        <Button type="primary" style = {{height:'53px',borderRadius:'102.88px',width:'276px'}} className='popin-fonts text-[16.49px] leading-[24.74px] font-medium' >
        Create a Solana contract
        </Button>
        </Col>
        
        <div className='flex flex-row items-center gap-[15px]'>
        <div className='w-[196.79px] h-[52.77px]   inner-shadow  rounded-[51.54px] border-[1.1px] border-[#E6E6E65C] flex justify-between items-center px-[19px]'>
        <div className='flex flex-row items-center gap-[8.02px]'>
            <Image src = '/Group8370.png' preview = {false}/>
            <Typography className='popin-fonts font-normal text-[17.59px] leading-[26.39px] text-white'>0.00000</Typography>
        </div>
            <Image src = '/Layer_1.png'/>
        </div>
        <button className={connectWallet}>Connect Wallet</button>
        <div className='flex flex-row items-center gap-[6.87px] ml-[20px]'>
            <p className='text-white'>EN</p>
            <Image src = '/en.png'/>
            <Image src = '/arrow_drop_down.png'/>

        </div>
        </div>

        
    </Row>
  )
}

export default Navbar
