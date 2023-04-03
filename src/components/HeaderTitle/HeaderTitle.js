import React from 'react';
import Button from "../Button/Button";

function HeaderTitle(props) {
  return (
    <div>
      <h1 className="text-6xl font-semibold w-1/2 text-[#252525] tracking-wider">Get your awesome sneakers.</h1>
      <p>We offer the best deals in our shop. Check them out now. </p>
      <Button >Test</Button>
    </div>
  );
}

export default HeaderTitle;