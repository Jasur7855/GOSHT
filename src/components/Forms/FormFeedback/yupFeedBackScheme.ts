import * as yup from "yup";

export const FeedbackScheme = yup.object({
  first_name: yup.string().required("Обязательное поле!"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле!"),
  rate: yup.number().required("Обязательное поле!"),
  last_name: yup.string().required("Обязательное поле!"),
  additional_info: yup
    .string()
    .transform((val, orig) => (orig === "" ? undefined : val))
    .notRequired()
    .nullable(),
});
