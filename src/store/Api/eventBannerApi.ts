import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IEventBanner {
  id: string;
  tag_text: string;
  main_text: string;
  description: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
  background_image: string;
}

type IGetEventBannersResponse = IEventBanner[];

export const eventBannerApi = createApi({
  reducerPath: "eventBannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getEventBanners: builder.query<IGetEventBannersResponse, void>({
      query: () => "/api/v1/events/banner",
    }),
  }),
});

export const { useGetEventBannersQuery } = eventBannerApi;
