import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  ac: false,
  automatic: false,
  kitchen: false,
  TV: false,
  shower: false,
  van: false,
  fully: false,
  alcove: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.location = action.payload.location;
      state.TV = action.payload.tv;
      state.ac = action.payload.ac;
      state.automatic = action.payload.automatic;
      state.kitchen = action.payload.kitchen;
      state.shower = action.payload.shower;
      state.van = action.payload.van;
      state.fully = action.payload.fully;
      state.alcove = action.payload.alcove;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
