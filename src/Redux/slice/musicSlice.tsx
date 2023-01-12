import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const musicSlice = createSlice({
  name: "Favourites",
  initialState: {
    status: "idle",
    favourites: [],
  },
  reducers: {
    addFavourites: (state, action) => {
      if (action.payload) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourites: (state, action) => {
      if (action.payload) {
        let musicIndex = state.favourites.findIndex(
          (favourite) => action.payload === favourite.data.title
        );
        state.favourites.splice(musicIndex, 1);
      }
    },
  },
});

export const { addFavourites, removeFavourites } = musicSlice.actions;
export default musicSlice.reducer;
