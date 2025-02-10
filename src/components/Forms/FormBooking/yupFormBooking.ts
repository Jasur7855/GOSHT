import * as yup from "yup";

export const BookingScheme = yup.object({
  firstName: yup.string().required("Обязательное поле!"),
  phoneNumber: yup
  .string()
  .matches(
    /^[+]*[0-9]{10,15}$/,
    "Введите корректный номер телефона (например, +1234567890)"
  )
  .required("Обязательное поле!"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле!"),
  peopleNumber: yup
    .number()
    .required("Обязательное поле!"),
  privateEventId: yup
    .number()
    .required("Обязательное поле!"),
});
