import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNFTAssets = createAsyncThunk(
  "assets/getAssets",
  async (cursor, { rejectWithValue }) => {
    try {
      const response = await axios(
        `https://api.opensea.io/api/v1/assets?limit=20&include_orders=false&cursor=${
          cursor ?? ""
        }`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getNFTAsset = createAsyncThunk(
  "assets/getAsset",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await axios(
        `https://api.opensea.io/api/v1/asset/${queryParams.contract_address}/${queryParams.token_id}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
