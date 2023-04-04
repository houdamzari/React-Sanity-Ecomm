import React from 'react';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import sneakers from '../../assets/sneakers_herosection.png'
import sneakerss from '../../assets/sneakers_herosection2.svg'
function HeroSection(props) {
  return (
    <div className="flex flex-row items-start justify-around px-10 pt-10">
      <HeaderTitle />
      <div className=" w-fit h-fit ">
      <img src={sneakerss} alt="sneakers" className="h-[600px] w-[800px] px-10" /></div>
    </div>
  );
}

export default HeroSection;