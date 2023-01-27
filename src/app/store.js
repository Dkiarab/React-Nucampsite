import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { partnersReducer } from "../features/partners/PartnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";

export const store = configureStore({
  reducer: {
    promotions: promotionsReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    campsites: campsitesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
