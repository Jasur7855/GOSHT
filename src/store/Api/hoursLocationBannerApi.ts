import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IHoursLocationBanner {
  id: string;
  tag_text: string;
  main_text: string;
  description: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
  background_image: string;
  is_visible?: boolean;
}

export const hoursLocationBannerApi = createApi({
  reducerPath: "hoursLocationBannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new.gosht.com/api/v1" }),
  endpoints: (builder) => ({
    getHoursLocationBanners: builder.query<IHoursLocationBanner[], void>({
      query: () => "/hours-location/banner",
    }),
  }),
});

export const { useGetHoursLocationBannersQuery } = hoursLocationBannerApi;
