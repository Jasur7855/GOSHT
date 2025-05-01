import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";
import { IMasterclassesResponse } from "./typesApi";

export const masterclassesApi = createApi({
  reducerPath: "masterclassesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllMasterclasses: builder.query<IMasterclassesResponse, null>({
      query: () => "/api/v1/masterclass",
    }),
  }),
});
export const { useGetAllMasterclassesQuery } = masterclassesApi;
