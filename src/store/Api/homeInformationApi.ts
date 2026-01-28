import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IHomeInformation {
  id: string;
  tag_icon_url: string[];
  tag_text: string;
  title: string;
  description: string;
  image: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
}

type IGetHomeInformationResponse = IHomeInformation[];

export const homeInformationApi = createApi({
  reducerPath: "homeInformationApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHomeInformation: builder.query<IGetHomeInformationResponse, void>({
      query: () => "/api/v1/home-information",
    }),
  }),
});

export const { useGetHomeInformationQuery } = homeInformationApi;
