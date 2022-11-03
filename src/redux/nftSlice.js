import { createSlice } from "@reduxjs/toolkit";
import { getNFTAssets, getNFTAsset } from "./nftActions";

const initialState = {
  cursor: "",
  assets: [],
  getAssets: {
    loading: false,
    success: false,
    failed: false,
  },
  asset: {},
  getAsset: {
    loading: false,
    success: false,
    failed: false,
  },
};

const nftSlice = createSlice({
  name: "assets",
  initialState,
  extraReducers: {
    [getNFTAssets.pending.type]: (state, action) => {
      state.getAssets = {
        loading: true,
        success: false,
        failed: false,
      };
    },
    [getNFTAssets.fulfilled.type]: (state, action) => {
      state.getAssets = {
        loading: false,
        success: true,
        failed: false,
      };
      state.assets = [...state.assets, ...action.payload.assets];
      state.cursor = action.payload.next;
    },
    [getNFTAssets.rejected.type]: (state, action) => {
      state.getAssets = {
        loading: false,
        success: false,
        failed: true,
      };
    },
    [getNFTAsset.pending.type]: (state, action) => {
      state.getAsset = {
        loading: true,
        success: false,
        failed: false,
      };
    },
    [getNFTAsset.fulfilled.type]: (state, action) => {
      state.getAsset = {
        loading: false,
        success: true,
        failed: false,
      };
      state.asset = action.payload;
    },
    [getNFTAsset.rejected.type]: (state, action) => {
      state.getAsset = {
        loading: false,
        success: false,
        failed: true,
      };
    },
  },
});

export default nftSlice.reducer;
