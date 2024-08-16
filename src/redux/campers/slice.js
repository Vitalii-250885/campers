import { createSlice } from "@reduxjs/toolkit";

import { fetchCamperByIdThunk, fetchCampersThunk } from "./operations";

const isPanding = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    camper: {},
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
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

export const campersReducer = campersSlice.reducer;
