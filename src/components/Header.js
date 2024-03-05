import React from "react";
import { SKY_LOGO } from "../constants";

const Header = () => {
  return (
    <div className="p-1 bg-fuchsia-200 flex justify-between">
      <div className="m-2 py-2 pl-2">
        <img src={SKY_LOGO} alt="sky-logo" className="w-20 h-10" />
      </div>
      <h1 className="m-5 mr-10 h-8 p-1 cursor-pointer border-2 border-solid rounded-lg border-stone-400 font-sans font-bold text-2xl flex items-center hover:bg-purple-300">Cart 🛒</h1>
    </div>
  );
};

export default Header;
