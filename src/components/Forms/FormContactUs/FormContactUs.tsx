import { MdOutlineClear } from "react-icons/md";
import { Heading } from "../../typography/Heading/Heading";
import { FormBtn } from "../../ui/Button/FormBtn";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormContactUs } from "./FormContactUs.style";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddContactUsMutation } from "../../../store/Api/contacUsApi";

interface IFormContactUs {
  firstName: string;
  email: string;
  phoneNumber: string;
  gettingTouch: string;
  yourMessage: string;
}

// Обновленная схема валидации
const ContactUsSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, "Name should contain only letters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^[\d\s()+-\/]+$/,
      "Phone number should contain only numbers and allowed symbols (+, -, (, ), /)"
    ),
  gettingTouch: yup.string().required("This field is required"),
  yourMessage: yup.string().required("Message is required"),
});

export const FormContactUs = () => {
  const navigate = useNavigate();
  const [contactUsAdd, { data }] = useAddContactUsMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormContactUs>({
    resolver: yupResolver(ContactUsSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      gettingTouch: "",
      yourMessage: "",
    },
  });

  const onSubmit: SubmitHandler<IFormContactUs> = async (data) => {
    const payload = {
      first_name: data.firstName,
      email: data.email,
      phone_number: data.phoneNumber,
      getting_touch: data.gettingTouch,
      your_message: data.yourMessage,
    };

    try {
      contactUsAdd(payload);
      // Здесь будет вызов API
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Функция для форматирования ввода
  const formatInput = (value: string, fieldName: keyof IFormContactUs) => {
    if (fieldName === "firstName") {
      // Удаляем все, кроме букв и пробелов
      return value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "");
    }
    if (fieldName === "phoneNumber") {
      // Удаляем все, кроме цифр и разрешенных символов
      return value.replace(/[^\d\s()+-\/]/g, "");
    }
    return value;
  };

  return (
    <SFormContactUs>
      <MdOutlineClear className="exit" onClick={() => navigate("/")} />

      <Heading variant="h4" text="Contact Us" />
      <p>Send us a message and we`ll get back to you as soon as possible </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="First Name"
                placeholder="Enter your name"
                type="text"
                value={field.value}
                onChange={(e) => {
                  const formattedValue = formatInput(
                    e.target.value,
                    "firstName"
                  );
                  field.onChange(formattedValue);
                }}
                isError={Boolean(errors.firstName)}
                errorText={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Email"
                placeholder="example@gmail.com"
                type="email"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.email)}
                errorText={errors.email?.message}
              />
            )}
          />
        </div>

        <div className="wrapper">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Phone Number"
                placeholder="Phone Number"
                type="tel"
                value={field.value}
                onChange={(e) => {
                  const formattedValue = formatInput(
                    e.target.value,
                    "phoneNumber"
                  );
                  field.onChange(formattedValue);
                }}
                isError={Boolean(errors.phoneNumber)}
                errorText={errors.phoneNumber?.message}
              />
            )}
          />

          <Controller
            name="gettingTouch"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="What are you getting in touch about?"
                placeholder="What are you getting in touch about?"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.gettingTouch)}
                errorText={errors.gettingTouch?.message}
              />
            )}
          />
        </div>

        <div className="textarea-wrapper">
          <label>Your Message</label>
          <Controller
            name="yourMessage"
            control={control}
            render={({ field }) => (
              <>
                <textarea
                  placeholder="Type your message here..."
                  rows={5}
                  value={field.value}
                  onChange={field.onChange}
                />
                {errors.yourMessage && (
                  <p className="error-message">{errors.yourMessage.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="sendWrapper">
          <div className="text">
            You can also reach us by phone at <span>(718) 504-8880.</span>
          </div>
          <FormBtn text="Send" typeButton="submit" variant="fill" />
        </div>
      </form>
    </SFormContactUs>
  );
};
