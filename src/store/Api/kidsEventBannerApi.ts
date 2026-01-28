import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IKidsEventBanner {
  id: string;
  is_visible: boolean;
  tag_text: string;
  main_text: string;
  description: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
  background_image: string;
}

type IGetKidsEventBannersResponse = IKidsEventBanner[];

export const kidsEventBannerApi = createApi({
  reducerPath: "kidsEventBannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getKidsEventBanners: builder.query<IGetKidsEventBannersResponse, void>({
      query: () => "/api/v1/kids-events/banner",
    }),
  }),
});

export const { useGetKidsEventBannersQuery } = kidsEventBannerApi;
