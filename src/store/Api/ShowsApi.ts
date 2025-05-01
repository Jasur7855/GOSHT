import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";
import { IShowsResponse } from "./typesApi";

export const showsApi = createApi({
  reducerPath: "showsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllShowsApi: builder.query<IShowsResponse, null>({
      query: () => "/api/v1/show-for-kids",
    }),
  }),
});
export const { useGetAllShowsApiQuery } = showsApi;
