import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nftReducer from "./nftSlice";

const rootReducer = combineReducers({
  nftReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
