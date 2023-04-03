import React from 'react';

function Button({children}) {
  return (
    <button className="bg-red-400 p-4">
      {children}
    </button>
  );
}

export default Button;
