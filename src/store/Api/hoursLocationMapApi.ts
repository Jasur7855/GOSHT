import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IHoursLocationMap {
  id: string;
  title: string;
  description: string;
  is_visible?: boolean;
}

export const hoursLocationMapApi = createApi({
  reducerPath: "hoursLocationMapApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new.gosht.com/api/v1" }),
  endpoints: (builder) => ({
    getHoursLocationMap: builder.query<IHoursLocationMap, void>({
      query: () => "/hours-location/map",
    }),
  }),
});

export const { useGetHoursLocationMapQuery } = hoursLocationMapApi;
