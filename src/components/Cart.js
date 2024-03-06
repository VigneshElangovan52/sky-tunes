import React from "react";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";

const Cart = () => {
  const items = useSelector((store) => store?.cart);

  return (
    <div className="pt-24 h-screen bg-fuchsia-200 flex flex-wrap">
      {items.length === 0 ? (
        <div className="h-8 p-10 ml-60 w-3/5 border border-stone-400 rounded-3xl flex justify-center items-center font-bold text-xl">
          Your cart is empty!! Would you like some music?🎶📻🎧
        </div>
      ) : (
        items.map((item) => {
          return <SongCard data={item} cartFlag={"cart"}/>;
        })
      )}
    </div>
  );
};

export default Cart;
