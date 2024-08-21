import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66be3d3574dfc195586ef7ec.mockapi.io/";

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchAll",
  async (page, thunkApi) => {
    try {
      const res = await axios.get(`/campers?limit=4&page=${page}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeFavoritesCampersThunk = createAsyncThunk(
  "campers/patchFavoriteCamper",
  async (id, thunkApi) => {
    try {
      const res = await axios.patch(`/campers/${id}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
