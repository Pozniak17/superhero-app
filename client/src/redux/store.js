import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./heroesSlice";

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});
