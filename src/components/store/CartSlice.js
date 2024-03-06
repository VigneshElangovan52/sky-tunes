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
  },
});

export const { addSong,removeSong} = CartSlice.actions;

export default CartSlice.reducer;
