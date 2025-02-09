import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

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

interface IAddPrivetEventResponse extends IAddPrivetEventPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}

export const inquireForms = createApi({
  reducerPath: "inquireForms",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    addPrivetEvent: builder.mutation<IAddPrivetEventResponse, IAddPrivetEventPayload>({
      query: (payload) => ({
        url: "/inquire/private",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddPrivetEventMutation } = inquireForms;
