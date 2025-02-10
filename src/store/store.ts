import { configureStore } from "@reduxjs/toolkit/react";
import { eventsApi } from "./Api/eventsApi";
import { inquireFormsApi } from "./Api/inquireFormsApi";
import { bookingFormsApi } from "./Api/bookingFormsApi";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
    [inquireFormsApi.reducerPath]: inquireFormsApi.reducer,
    [bookingFormsApi.reducerPath]: bookingFormsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      eventsApi.middleware,
      inquireFormsApi.middleware,
      bookingFormsApi.middleware
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
