import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFooter {
  id: string;
  work_hours: string;
  feedback_text: string;
  address: string;
  instagram_enabled: boolean;
  instagram_link: string;
  telegram_enabled: boolean;
  telegram_link: string;
  facebook_enabled: boolean;
  facebook_link: string;
  is_visible?: boolean;
}

export const footerApi = createApi({
  reducerPath: "footerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new.gosht.com/api/v1" }),
  endpoints: (builder) => ({
    getFooter: builder.query<IFooter, void>({
      query: () => "/footer",
    }),
  }),
});

export const { useGetFooterQuery } = footerApi;
