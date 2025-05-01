import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

interface IAddBookingPrivetPayload {
  first_name: string;
  email: string;
  phone_number: string;
  people_quantity: string;
  eventId: string;
}
interface IAddBookingPrivetResponse extends IAddBookingPrivetPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}
export const bookingFormsApi = createApi({
  reducerPath: "bookingFormsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    addBookingPrivetEvents: builder.mutation<
      IAddBookingPrivetResponse,
      IAddBookingPrivetPayload
    >({
      query: (payload) => ({
        url: "/api/v1/book",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddBookingPrivetEventsMutation } = bookingFormsApi;
