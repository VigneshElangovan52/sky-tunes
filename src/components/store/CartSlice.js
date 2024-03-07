import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state) => {
      state.pop();
    },
    clearSongs: (state) => {
      state.length = 0;
    },
  },
});

export const { addSong, removeSong, clearSongs } = CartSlice.actions;

export default CartSlice.reducer;
