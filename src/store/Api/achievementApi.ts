import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IAchievement {
  type: "first" | "second" | "third";
  title: string;
  description: string;
}

type IGetAchievementsResponse = IAchievement[];

export const achievementApi = createApi({
  reducerPath: "achievementApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAchievements: builder.query<IGetAchievementsResponse, void>({
      query: () => "/api/v1/home/achievement",
    }),
  }),
});

export const { useGetAchievementsQuery } = achievementApi;
