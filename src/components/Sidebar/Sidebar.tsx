
import { Col, Divider, Image, Row, Select, Typography } from "antd";

function Sidebar() {
  const selectStyles ="w-full bg-transparent mt-[30px] h-[54.54px] rounded-[35.68px]";
  const textStyles = 'popin-fonts font-normal text-base leading-6 text-white'
  return (
    <div className=" border-[1.27px] border-[#464B58B4] opacity-100 w-[369px] h-[550px] rounded-[17.83px] radial-color shadow-xl flex flex-col items-center py-[15px] px-[16px]">
      <Image src="/logo.png" alt="" preview={false}/>
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <Select className={selectStyles} />
          <Select className={selectStyles} />
        </Col>
      </Row>
      <div style={{ width: "100%" }} className="relative  flex justify-center items-center">
          <Image src="/rakeback.png" alt="" className="w-full h-[30px]" preview={false}/>
          <Typography className="absolute   text-[#FFC700] popin-fonts text-[16px] font-semibold leading-[24px]" >RAKEBACK VIP CLUB</Typography>
      </div>
    <Divider className=" border-[#282C3A] border-[1.54px]"  />
      <Row style = {{width:'100%',display:'flex',flexDirection:'column',gap:'20px'}} >
        <Col style = {{display:'flex',alignItems:'center',gap:'11.89px'}}>
        <Image src = '__before.png'/>
        <Typography className={textStyles}>Live chat 24/7</Typography>
        </Col>

        <Col style = {{display:'flex',alignItems:'center',gap:'11.89px'}}>
        <Image src = '__before2.png'/>
        <Typography className={textStyles}>Affiliate</Typography>
        </Col>
      </Row>
    </div>

  );
}

export default Sidebar;
