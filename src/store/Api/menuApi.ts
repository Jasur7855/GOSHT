import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IMenuItem {
  id: string;
  category?: string;
  title: string;
  subTitle: string;
  img: string;
  badge?: string;
  masterId?: number;
  price: number;
}

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://new.gosht.com" }),
  endpoints: (builder) => ({
    getMenu: builder.query<IMenuItem[], string | void>({
      query: (catId) => catId ? `/api-back/menu?cat_id=${catId}` : "/api-back/menu",
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
