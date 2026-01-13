import { configureStore } from "@reduxjs/toolkit/react";
import { eventsApi } from "./Api/eventsApi";
import { inquireFormsApi } from "./Api/inquireFormsApi";
import { bookingFormsApi } from "./Api/bookingFormsApi";
import { showsApi } from "./Api/ShowsApi";
import { masterclassesApi } from "./Api/MasterclassesApi";
import { feedbackApi } from "./Api/FeedbackApi";
import { contactUsApi } from "./Api/contacUsApi";
import { homeBannerApi } from "./Api/homeBannerApi";
import { homeMenuApi } from "./Api/homeMenuApi";
import { achievementApi } from "./Api/achievementApi";
import { homeInformationApi } from "./Api/homeInformationApi";
import { aboutBlockApi } from "./Api/aboutBlockApi";
import { activityApi } from "./Api/activityApi";
import { reviewApi } from "./Api/reviewApi";
import { eventBannerApi } from "./Api/eventBannerApi";
import { kidsEventBannerApi } from "./Api/kidsEventBannerApi";
import { hoursLocationBannerApi } from "./Api/hoursLocationBannerApi";
import { hoursLocationInfoApi } from "./Api/hoursLocationInfoApi";
import { hoursLocationMapApi } from "./Api/hoursLocationMapApi";
import { footerApi } from "./Api/footerApi";
import { menuApi } from "./Api/menuApi";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
    [inquireFormsApi.reducerPath]: inquireFormsApi.reducer,
    [bookingFormsApi.reducerPath]: bookingFormsApi.reducer,
    [showsApi.reducerPath]: showsApi.reducer,
    [masterclassesApi.reducerPath]: masterclassesApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer,
    [homeBannerApi.reducerPath]: homeBannerApi.reducer,
    [homeMenuApi.reducerPath]: homeMenuApi.reducer,
    [achievementApi.reducerPath]: achievementApi.reducer,
    [homeInformationApi.reducerPath]: homeInformationApi.reducer,
    [aboutBlockApi.reducerPath]: aboutBlockApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [eventBannerApi.reducerPath]: eventBannerApi.reducer,
    [kidsEventBannerApi.reducerPath]: kidsEventBannerApi.reducer,
    [hoursLocationBannerApi.reducerPath]: hoursLocationBannerApi.reducer,
    [hoursLocationInfoApi.reducerPath]: hoursLocationInfoApi.reducer,
    [hoursLocationMapApi.reducerPath]: hoursLocationMapApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      eventsApi.middleware,
      inquireFormsApi.middleware,
      bookingFormsApi.middleware,
      showsApi.middleware,
      masterclassesApi.middleware,
      feedbackApi.middleware,
      contactUsApi.middleware,
      homeBannerApi.middleware,
      homeMenuApi.middleware,
      achievementApi.middleware,
      homeInformationApi.middleware,
      aboutBlockApi.middleware,
      activityApi.middleware,
      reviewApi.middleware,
      eventBannerApi.middleware,
      kidsEventBannerApi.middleware,
      hoursLocationBannerApi.middleware,
      hoursLocationInfoApi.middleware,
      hoursLocationMapApi.middleware,
      footerApi.middleware,
      menuApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
