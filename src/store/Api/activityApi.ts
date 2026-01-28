import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";
import { IEvent } from "./eventsApi";

export interface IActivity {
  id: string;
  title: string;
  description: string;
  events: IEvent[];
}

export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getActivityById: builder.query<IActivity, string>({
      query: (id) => `/api/v1/activities/${id}`,
    }),
  }),
});

export const { useGetActivityByIdQuery } = activityApi;
