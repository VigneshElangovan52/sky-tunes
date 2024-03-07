import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "./SongCard";
import { clearSongs } from "./store/CartSlice";

const Cart = () => {
  const items = useSelector((store) => store?.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-fuchsia-200 ">
      {items?.length !== 0 && <button className="p-1 w-40 border-2 border-stone-500 rounded-3xl" onClick={()=>dispatch(clearSongs())}>Clear Cart</button>}
      <div className="pt-3 h-screen flex flex-wrap">
        {items.length === 0 ? (
          <div className="h-8 p-10 ml-60 w-3/5 border border-stone-400 rounded-3xl flex justify-center items-center font-bold text-xl">
            Your cart is empty!! Would you like some music?🎶📻🎧
          </div>
        ) : (
          items.map((item) => {
            return <SongCard data={item} cartFlag={"cart"} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
