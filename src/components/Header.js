import React from "react";
import { SKY_LOGO } from "../constants";

const Header = () => {
  return (
    <div className="p-2 bg-fuchsia-200">
      <div className="m-2 py-2 pl-2">
        <img src={SKY_LOGO} alt="sky-logo" className="w-20 h-10" />
      </div>
    </div>
  );
};

export default Header;
