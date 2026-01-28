import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

export interface IEvent {
  id: string;
  type: string;
  cost: number;
  date: string;
  time: string;
  main_title: string;
  main_description: string;
  card_title: string;
  paragraph: string[];
  motivation: string;
  is_visible: boolean;
  media: {
    id: string;
    path: string;
  };
}

type IGetAllEventsResponse = IEvent[];
interface IGetEventByIdResponse extends IEvent {}
export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllEvents: builder.query<IGetAllEventsResponse, null>({
      query: () => "/api/v1/events",
    }),
    getEventById: builder.query<IGetEventByIdResponse, string>({
      query: (eventId) => `/api/v1/events/${eventId}`,
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useLazyGetEventByIdQuery,
  useGetEventByIdQuery,
} = eventsApi;
