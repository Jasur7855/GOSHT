import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IHomeMenu {
  id: string;
  is_visible: boolean;
  tag_icon_url: string[];
  main_text: string;
  description: string;
  image: string;
}

type IGetHomeMenuResponse = IHomeMenu[];

export const homeMenuApi = createApi({
  reducerPath: "homeMenuApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHomeMenu: builder.query<IGetHomeMenuResponse, void>({
      query: () => "/api/v1/home-menu",
    }),
  }),
});

export const { useGetHomeMenuQuery } = homeMenuApi;
