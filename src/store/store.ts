import { configureStore } from "@reduxjs/toolkit/react";
import { eventsApi } from "./Api/eventsApi";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
