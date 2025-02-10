import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

interface IAddBookingPrivetPayload {
  firstName: string;
  email: string;
  phoneNumber: string;
  peopleNumber: number;
  privateEventId: number;
}
interface IAddBookingPrivetResponse extends IAddBookingPrivetPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}
export const bookingFormsApi = createApi({
  reducerPath: "bookingFormsApi",
  baseQuery: fetchBaseQuery({ baseUrl:API_URL }),
  endpoints: (builder) => ({
    addBookingPrivetEvents: builder.mutation<IAddBookingPrivetResponse,IAddBookingPrivetPayload>({
      query: (payload) => ({
        url: "/book/private",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

const { useAddBookingPrivetEventsMutation }=bookingFormsApi;