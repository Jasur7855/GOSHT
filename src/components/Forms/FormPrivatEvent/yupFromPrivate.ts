import * as yup from "yup";
export const PrivateEventScheme = yup.object({
  userName: yup.string().required("Обязательное поле!"),

  userEmail: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле!"),

  userLastName: yup.string().required("Обязательное поле!"),

  userPhone: yup
    .string()
    .matches(
      /^[+]*[0-9]{10,15}$/,
      "Введите корректный номер телефона (например, +1234567890)"
    )
    .required("Обязательное поле!"),

  userDate: yup
    .string()
    .required("Дата обязательна")
    .test("is-valid-date", "Некорректная дата", (value) =>
      Boolean(value && !isNaN(new Date(value).getTime()))
    ),

  userCompany: yup.string().required("Обязательное поле!"),

  startTime: yup
    .string()
    .required("Время начала обязательно")
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Время должно быть в формате HH:mm"
    ),

  endTime: yup
    .string()
    .required("Время окончания обязательно")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Время должно быть в формате HH:mm")
    .test(
      "is-after-start-time",
      "Время окончания должно быть позже времени начала",
      function (value) {
        const { startTime } = this.parent;
        if (!startTime || !value) return false;
        return value > startTime;
      }
    ),

  eventType: yup.string().required("Обязательное поле!"),

  peopleCount: yup
    .number()
    .positive("Количество людей должно быть положительным числом")
    .integer("Количество людей должно быть целым числом")
    .nullable()
    .required("Обязательное поле!"),

  additionalInfo: yup.string().nullable(),
});
