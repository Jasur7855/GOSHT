import { configureStore } from "@reduxjs/toolkit/react";
import { eventsApi } from "./Api/eventsApi";
import { inquireFormsApi } from "./Api/inquireFormsApi";
import { bookingFormsApi } from "./Api/bookingFormsApi";
import { showsApi } from "./Api/ShowsApi";
import { masterclassesApi } from "./Api/MasterclassesApi";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
    [inquireFormsApi.reducerPath]: inquireFormsApi.reducer,
    [bookingFormsApi.reducerPath]: bookingFormsApi.reducer,
    [showsApi.reducerPath]: showsApi.reducer,
    [masterclassesApi.reducerPath]: masterclassesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      eventsApi.middleware,
      inquireFormsApi.middleware,
      bookingFormsApi.middleware,
      showsApi.middleware,
      masterclassesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
