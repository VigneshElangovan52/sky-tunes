import React from "react";
import { SKY_LOGO } from "../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=> store?.cart?.songs);
 

  return (
    <div className="p-1 bg-fuchsia-200 flex justify-between">
      <div className="m-2 py-2 pl-2">
        <Link to="/home">
          <img src={SKY_LOGO} alt="sky-logo" className="w-20 h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <button className="m-5 h-8 p-2 cursor-pointer rounded-lg font-sans font-bold text-xl flex items-center hover:bg-purple-300">
          <Link to="/home">Home</Link>
        </button>
        <button className="mr-10 h-8 p-1 cursor-pointer rounded-lg font-sans font-bold text-xl flex items-center hover:bg-purple-300">
          <Link to="/cart">Cart 🛒- {cartItems.length || '0'} Songs</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
