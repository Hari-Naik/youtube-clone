import { createSlice } from "@reduxjs/toolkit";

const initialState: any | [] = {
  likedVideos: [],
};

const likedVideosSlice = createSlice({
  name: "likedVideos",
  initialState,
  reducers: {
    setLikedVideos: (state, action) => {
      state.likedVideos = [...state.likedVideos, action.payload];
    },
  },
});

export const { setLikedVideos } = likedVideosSlice.actions;
export default likedVideosSlice.reducer;
