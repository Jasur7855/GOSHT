import { Heading } from "../../typography/Heading/Heading";
import { FormBtn } from "../../ui/Button/FormBtn";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormWorkWithUs } from "./FormWorkWithUs.style";
import { useNavigate } from "react-router-dom";
import { MdOutlineClear } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormWorkWithUs {
    first_name: string;
    phone_number: string;
    email: string;
    cover_letter: string;
    resume: FileList | null;
  }

// Исправленная схема валидации
const schema = yup.object().shape({
  first_name: yup.string().required("Имя обязательно для заполнения"),
  phone_number: yup.string().required("Телефон обязателен для заполнения"),
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  cover_letter: yup.string().required("Сопроводительное письмо обязательно"),
  resume: yup
    .mixed<FileList>()
    .required("Резюме обязательно")
    .test("fileType", "Только PDF или DOCX", (value) => {
      if (!value || !(value instanceof FileList)) return false;
      const file = value[0];
      return (
        file &&
        (file.type === "application/pdf" ||
          file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      );
    })
    .test("fileSize", "Файл слишком большой (макс. 5MB)", (value) => {
      if (!value || !(value instanceof FileList)) return false;
      return value[0].size <= 5_000_000;
    }),
});

export const FormWorkWithUs = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormWorkWithUs>({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: "",
      phone_number: "",
      email: "",
      cover_letter: "",
      resume: null,
    },
  });

  const selectedFile = watch("resume");

  const onSubmit = (data: IFormWorkWithUs) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("phone_number", data.phone_number);
    formData.append("email", data.email);
    formData.append("cover_letter", data.cover_letter);
    if (data.resume) {
      formData.append("resume", data.resume[0]);
    }
    console.log("Form data prepared:", formData);
  };

  return (
    <SFormWorkWithUs>
      <MdOutlineClear className="exit" onClick={() => navigate("/")} />

      <Heading variant="h4" text="Work with Us" />
      <p className="description">
        We'd love to have you join our team! Feel free to send in your resume
        even if you don't see the position you're looking for listed.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="First Name *"
                placeholder="Enter your name"
                {...field}
                isError={!!errors.first_name}
                errorText={errors.first_name?.message}
              />
            )}
          />

          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Phone Number *"
                placeholder="Phone Number"
                {...field}
                isError={!!errors.phone_number}
                errorText={errors.phone_number?.message}
              />
            )}
          />
        </div>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <LabelInput
              labelText="Email *"
              placeholder="example@gmail.com"
              type="email"
              {...field}
              isError={!!errors.email}
              errorText={errors.email?.message}
            />
          )}
        />

        <div className="textarea-wrapper">
          <label className="input-label">Cover Letter *</label>
          <Controller
            name="cover_letter"
            control={control}
            render={({ field }) => (
              <textarea
                className="form-textarea"
                placeholder="Tell us about yourself..."
                rows={5}
                {...field}
              />
            )}
          />
          {errors.cover_letter && (
            <p className="error-text">{errors.cover_letter.message}</p>
          )}
        </div>

        <div className="form-load">
          <div>
            <label className="input-label">Resume *</label>
            <div className="file-upload">
              <Controller
                name="resume"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.docx"
                      onChange={(e) => field.onChange(e.target.files)}
                      className="file-input"
                    />
                    <label htmlFor="resume-upload" className="file-label">
                      Choose file
                    </label>
                    <span className="file-name">
                      {selectedFile?.[0]?.name || "no file selected"}
                    </span>
                  </>
                )}
              />
            </div>
            {errors.resume && (
              <p className="error-text">{errors.resume.message}</p>
            )}
          </div>
          <div className="submit-row">
            <FormBtn text="Send" typeButton="submit" variant="fill" />
          </div>
        </div>
      </form>
    </SFormWorkWithUs>
  );
};
