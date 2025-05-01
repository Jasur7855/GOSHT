import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

interface IAddPrivetEventPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  date: string;
  start_time: string;
  end_time: string;
  event_type: string;
  people_quantity: number;
  additional_info: string | null;
  status: string;
}

interface IAddKidsEventPayload {
  people_quantity: number;
  first_name: string;
  email: string;
  phone_number: string;
  date: string;
  showForKidsId: string;
  masterclassId: string;
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
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    addPrivetEvent: builder.mutation<
      IAddPrivetEventResponse,
      IAddPrivetEventPayload
    >({
      query: (payload) => ({
        url: "/api/v1/private-inquiries",
        method: "POST",
        body: payload,
      }),
    }),
    addKidsEvent: builder.mutation<IAddKidsEventResponse, IAddKidsEventPayload>(
      {
        query: (payload) => ({
          url: "/api/v1/kids-inquiries",
          method: "POST",
          body: payload,
        }),
      }
    ),
  }),
});

export const { useAddPrivetEventMutation, useAddKidsEventMutation } =
  inquireFormsApi;
