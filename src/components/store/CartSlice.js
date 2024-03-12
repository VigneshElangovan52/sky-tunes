import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    songs: [],
    value: [],
  },
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
      state.value.push(Number(action.payload["im:price"]?.attributes?.amount))
    },
    removeSong: (state, action) => {
      state.songs = state?.songs?.filter(
        (item) => item?.id?.attributes["im:id"] !== action.payload
      );
    },
    clearSongs: (state) => {
      state.songs.length = 0;
    },
  },
});

export const { addSong, removeSong, clearSongs } = CartSlice.actions;

export default CartSlice.reducer;
