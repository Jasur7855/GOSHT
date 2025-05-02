import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormFeedBack } from "./FormFeedback.style";
import { FormBtn } from "../../ui/Button/FormBtn";
import { MdOutlineClear } from "react-icons/md";
import { Heading } from "../../typography/Heading/Heading";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { FeedbackScheme } from "./yupFeedBackScheme";
import { useAddFeedBackMutation } from "../../../store/Api/FeedbackApi";
import { Link } from "react-router-dom";

interface IFormFeedbackScheme {
  first_name: string;
  email: string;
  last_name: string;
  rate: string;
  additional_info?: string | null;
}

export const FormFeedback = () => {
  const [addFeedback] = useAddFeedBackMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FeedbackScheme),
    mode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      rate: "",
      additional_info: "",
    },
  });
  const formFeedbackSubmit: SubmitHandler<IFormFeedbackScheme> = (data) => {
    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      rate: data.rate,
      additional_info: data.additional_info?.trim()
        ? data.additional_info.trim()
        : "",
    };
    addFeedback(payload);
  };
  return (
    <SFormFeedBack>
      <Link to={"/"} className="exit">
        х
      </Link>

      <div className="image"></div>
      <div className="form">
        <Heading variant="h4" text="Customer Feedback" />
        <form onSubmit={handleSubmit(formFeedbackSubmit)}>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="First Name"
                placeholder="Enter your name"
                {...field}
                isError={!!errors.first_name}
                errorText={errors.first_name?.message}
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
                {...field}
                isError={!!errors.email}
                errorText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Last Name"
                placeholder="Last Name"
                {...field}
                isError={!!errors.last_name}
                errorText={errors.last_name?.message}
              />
            )}
          />
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Please Rate Your Experience (1-10)"
                placeholder="Please Rate Your Experience (1-10)"
                {...field}
                isError={!!errors.rate}
                errorText={errors.rate?.message}
              />
            )}
          />
          <Controller
            name="additional_info"
            control={control}
            render={({ field }) => (
              <div>
                <label htmlFor="additional_info">
                  Additional Information
                  <textarea
                    id="additional_info"
                    placeholder="Additional Information"
                    rows={5}
                    name={field.name}
                    // если field.value = null или undefined, подставляем ""
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                  />
                </label>

                {errors.additional_info && (
                  <p className="error-text">{errors.additional_info.message}</p>
                )}
              </div>
            )}
          />
          <FormBtn text="Send" typeButton="submit" variant="fill" />
        </form>
      </div>
    </SFormFeedBack>
  );
};
