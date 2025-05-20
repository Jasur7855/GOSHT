import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config/envConfig";

interface IAddContactUsPayload {
  first_name: string;
  email: string;
  phone_number: string;
  getting_touch: string;
  your_message: string;
}

interface IAddContactUsResponse extends IAddContactUsPayload {
  id: number;
  updatedAt: string;
  createdAt: string;
}
export const contactUsApi = createApi({
  reducerPath: "contactUsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    addContactUs: builder.mutation<IAddContactUsResponse, IAddContactUsPayload>(
      {
        query: (payload) => ({
          url: "/api/v1/contact-us",
          method: "POST",
          body: payload,
        }),
      }
    ),
  }),
});

export const { useAddContactUsMutation } = contactUsApi;
