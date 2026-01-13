import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IReviewSettings {
  id: string;
  tag: string;
  title: string;
  counter: number;
}

type IGetReviewsResponse = IReviewSettings[];

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllReviews: builder.query<IGetReviewsResponse, void>({
      query: () => "/api/v1/reviews/all",
    }),
  }),
});

export const { useGetAllReviewsQuery } = reviewApi;
