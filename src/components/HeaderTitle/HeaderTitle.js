import React from 'react';
import Button from "../Button/Button";

function HeaderTitle(props) {
  return (
    <div className=" w-[800px] h-fit  flex flex-col gap-8 pt-20">
      <h1 className="text-7xl font-semibold w-fit text-[#252525] tracking-wider">Get your awesome sneakers.</h1>
      <p className="w-fit">We offer the best deals in our shop. Check them out now. We offer the best deals in our shop. Check them out now. </p>
      <Button className='w-fit'>Test</Button>
    </div>
  );
}

export default HeaderTitle;