import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IHomeBanner {
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

type IGetHomeBannersResponse = IHomeBanner[];

export const homeBannerApi = createApi({
  reducerPath: "homeBannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHomeBanners: builder.query<IGetHomeBannersResponse, void>({
      query: () => "/api/v1/home-banner",
    }),
  }),
});

export const { useGetHomeBannersQuery } = homeBannerApi;
