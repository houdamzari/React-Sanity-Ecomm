import React from 'react';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import sneakers from '../../assets/sneakers_herosection.svg'
function HeroSection(props) {
  return (
    <div className="flex flex-row items-start justify-around px-10 pt-10 h-fit">
      <HeaderTitle />
      <div className=" w-fit h-fit ">
      <img src={sneakers} alt="sneakers" className="h-[500px] w-[800px] px-10" /></div>
    </div>
  );
}

export default HeroSection;