import artefactReducer from "./slices/artefactSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    artefacts: artefactReducer,
  },
});
