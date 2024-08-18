import { createSlice } from "@reduxjs/toolkit";
import { changeFavoritesCampersThunk } from "../campers/operations";

const initialState = {
  items: [],
};

const isPanding = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeFavorite: (state, action) => {
      state.items.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(changeFavoritesCampersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addMatcher(isPanding, (state) => {
        state.error = null;
        state.items = [];
        state.isLoading = true;
      })
      .addMatcher(isRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
