import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66be3d3574dfc195586ef7ec.mockapi.io/";

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/campers");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperByIdThunk = createAsyncThunk(
  "campers/fetchById",
  async (camperId, thunkApi) => {
    try {
      const res = await axios.get(`/campers/${camperId}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
