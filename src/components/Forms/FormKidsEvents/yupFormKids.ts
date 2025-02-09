import * as yup from "yup";

export const KidsEventScheme = yup.object({
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

 
  eventDate: yup
    .string()
    .required("Дата обязательна")
    .test("is-valid-date", "Некорректная дата", (value) =>
      Boolean(value && !isNaN(new Date(value).getTime()))
    ),
  peopleNumber: yup
    .number()
    .positive("Количество людей должно быть положительным числом")
    .integer("Количество людей должно быть целым числом")
    .nullable()
    .required("Обязательное поле!"),

  masterclass:yup.string().required("Обязательное поле !"),
  showType: yup.string().required("Обязательное поле !"),

});
