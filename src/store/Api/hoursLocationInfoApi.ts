import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IHoursLocationInfo {
  id?: string;
  type: "first" | "second" | "third";
  title: string;
  description: string;
  is_visible?: boolean;
}

export const hoursLocationInfoApi = createApi({
  reducerPath: "hoursLocationInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new.gosht.com/api/v1" }),
  endpoints: (builder) => ({
    getHoursLocationInfo: builder.query<IHoursLocationInfo[], void>({
      query: () => "/hours-location/info",
    }),
  }),
});

export const { useGetHoursLocationInfoQuery } = hoursLocationInfoApi;
