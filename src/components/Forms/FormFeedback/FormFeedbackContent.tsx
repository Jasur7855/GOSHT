import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { FormBtn } from "../../ui/Button/FormBtn";
import { Heading } from "../../typography/Heading/Heading";
import { yupResolver } from "@hookform/resolvers/yup";
import { FeedbackScheme } from "./yupFeedBackScheme";
import { useAddFeedBackMutation } from "../../../store/Api/FeedbackApi";

interface IFormFeedbackScheme {
  first_name: string;
  email: string;
  last_name: string;
  rate: number;
  additional_info?: string | null;
}

interface FormFeedbackContentProps {
  onSuccess?: () => void;
}

export const FormFeedbackContent: React.FC<FormFeedbackContentProps> = ({ onSuccess }) => {
  const [addFeedback] = useAddFeedBackMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFeedbackScheme>({
    resolver: yupResolver(FeedbackScheme),
    mode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      rate: 0,
      additional_info: "",
    },
  });

  const formFeedbackSubmit: SubmitHandler<IFormFeedbackScheme> = (data) => {
    const payload = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      email: data.email.trim(),
      rate: Number(data.rate),
      additional_info: data.additional_info?.trim() || null,
    };

    addFeedback(payload)
      .unwrap()
      .then(() => {
        if (onSuccess) onSuccess();
      })
      .catch((error) => console.error("Submission error:", error));
  };

  return (
    <>
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
              placeholder="Enter a number from 1 to 10"
              type="number"
              min={1}
              max={10}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  field.onChange("");
                  return;
                }
                const numValue = Math.min(Math.max(Number(value), 1), 10);
                field.onChange(numValue);
              }}
              value={field.value}
              isError={!!errors.rate}
              errorText={errors.rate?.message}
            />
          )}
        />

        <Controller
          name="additional_info"
          control={control}
          render={({ field }) => (
            <div className="textarea-wrapper">
              <label htmlFor="additional_info">
                Additional Information
                <textarea
                  id="additional_info"
                  placeholder="Additional Information"
                  rows={5}
                  {...field}
                  value={field.value ?? ""}
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
    </>
  );
};
