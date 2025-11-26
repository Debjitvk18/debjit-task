import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <h1 className='text-primary font-krona text-[32px] font-bold'>
        Noda
      </h1>
      <div className="flex items-center space-x-4">
        <button className="
          px-6 py-2
          text-primary
          border border-primary
          rounded-lg
          font-primary
          hover:bg-primary hover:text-white
          transition
        ">
          Sign In
        </button>
        <button className="
          px-6 py-2
          bg-primary 
          text-white 
          rounded-lg
          font-primary
          font-semibold
        ">
          Sign Up
        </button>

      </div>
    </div>
  );
};

export default Navbar;
