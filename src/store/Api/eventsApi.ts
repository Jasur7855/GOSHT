import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IEvent {
  id: string;
  event_title: string;
  event_subtitle: string;
  title: string;
  paragraph: string;
  motivation: string;
  cost: string;
  date: string;
  time: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

type IGetAllEventsResponse = IEvent[] 
interface IGetEventByIdResponse extends IEvent{}
export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllEvents: builder.query<IGetAllEventsResponse, null>({
      query: () => "events/private",
    }),
    getEventById: builder.query<IGetEventByIdResponse, string>({
      query: (eventId) => `events/private/${eventId}`,
    }),
  }),
});

export const { useGetAllEventsQuery, useLazyGetEventByIdQuery,useGetEventByIdQuery } = eventsApi;
