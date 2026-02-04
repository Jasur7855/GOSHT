import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IProjectInfo {
  title: string;
  description: string;
}

export interface IFirstProject {
  name: string;
  short_description: string;
  image: string;
  info_1: IProjectInfo;
  info_2: IProjectInfo;
}

export interface ISecondProjectInfo {
  image: string;
  main_text: string;
  description: string;
  button_enabled: boolean;
  button_text: string;
  button_link: string;
}

export interface ISecondProject {
  name: string;
  short_description: string;
  image: string;
  info: ISecondProjectInfo;
}

export interface IAboutBlock {
  id: string;
  buttonEnabled: boolean;
  buttonText: string;
  buttonLink: string;
  firstProject: IFirstProject;
  secondProject: ISecondProject;
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
