import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";


interface IAddPrivetEventPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  eventDate: string;
  companyName: string;
  startTime: string;
  endTime: string;
  eventType: string;
  peopleNumber: number;
  additionalInformation: string;
}
interface IAddKidsEventPayload {
  peopleNumber: number;
  firstName: string;
  email: string;
  phoneNumber: string;
  eventDate: string;
  showType: string;
  masterclass: string;
}
interface IAddKidsEventResponse extends IAddKidsEventPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}
interface IAddPrivetEventResponse extends IAddPrivetEventPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}

export const inquireFormsApi = createApi({
  reducerPath: "inquireForms",
  baseQuery: fetchBaseQuery({ baseUrl:API_URL }),
  endpoints: (builder) => ({
    addPrivetEvent: builder.mutation<
      IAddPrivetEventResponse,
      IAddPrivetEventPayload
    >({
      query: (payload) => ({
        url: "/inquire/private",
        method: "POST",
        body: payload,
      }),
    }),
    addKidsEvent: builder.mutation<IAddKidsEventResponse, IAddKidsEventPayload>({
      query: (payload) => ({
        url: "/inquire/kids",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddPrivetEventMutation, useAddKidsEventMutation } = inquireFormsApi;
