import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

interface IFeedbackPayload {
  first_name: string;
  last_name: string;
  email: string;
  rate: number;
  additional_info: string | null;
}

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    addFeedBack: builder.mutation<any, IFeedbackPayload>({
      query: (payload) => ({
        url: "/api/v1/feedback",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddFeedBackMutation } = feedbackApi;
