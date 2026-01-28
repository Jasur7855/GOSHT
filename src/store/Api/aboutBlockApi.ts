import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IProjectInfo {
  title: string;
  description: string;
}

export interface IProject {
  name: string;
  short_description: string;
  image: string;
  info_1: IProjectInfo;
  info_2: IProjectInfo;
}

export interface IAboutBlock {
  id: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
  first_project: IProject;
  second_project: IProject;
}

type IGetAboutBlockResponse = IAboutBlock[];

export const aboutBlockApi = createApi({
  reducerPath: "aboutBlockApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAboutBlock: builder.query<IGetAboutBlockResponse, void>({
      query: () => "/api/v1/about-block",
    }),
  }),
});

export const { useGetAboutBlockQuery } = aboutBlockApi;
