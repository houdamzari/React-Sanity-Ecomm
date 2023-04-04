import React from 'react';

function Button({children,className}) {
  return (
    <button className={`bg-red-400 px-8 py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
}

export default Button;
