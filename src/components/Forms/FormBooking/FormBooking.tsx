import { MdOutlineClear } from "react-icons/md";
import { Heading } from "../../typography/Heading/Heading";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormBooking } from "./FormBooking.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "react-modal";
import { BookingScheme } from "./yupFormBooking";
import { FormBtn } from "../../ui/Button/FormBtn";
import { useParams } from "react-router-dom";
import { useAddBookingPrivetEventsMutation } from "../../../store/Api/bookingFormsApi";
import { useEffect } from "react";
interface IFormBookingScheme {
  firstName: string;
  phoneNumber: string;
  email: string;
  peopleNumber: string;
}

interface IFormBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles: Modal.Styles = {
  overlay: { zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    inset: 0,
    width: "100vw",
    height: "100vh",
    padding: "20px",
    background: "white",
    border: "none",
  },
};

export const FormBooking = ({ isOpen, onClose }: IFormBookingProps) => {
  const { id } = useParams<{ id?: string }>();
  const [addBookingEvents] = useAddBookingPrivetEventsMutation();
  useEffect(() => {
    if (!id) onClose();
  }, [id, onClose]);

  if (!id) return null;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormBookingScheme>({
    resolver: yupResolver(BookingScheme),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
      peopleNumber: "",
    },
  });

  const onSubmit: SubmitHandler<IFormBookingScheme> = async (data) => {
    try {
      const payload = {
        first_name: data.firstName,
        phone_number: data.phoneNumber,
        email: data.email,
        people_quantity: String(data.peopleNumber),
        eventId: id,
      };
      await addBookingEvents(payload).unwrap();
      reset();
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <SFormBooking>
        <MdOutlineClear className="exit" onClick={onClose} />

        <div className="image"></div>
        <div className="form">
          <Heading
            variant="h4"
            text="Fill in the form and we will contact you about Kids event"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="First Name"
                  placeholder="Enter your name"
                  {...field}
                  isError={!!errors.firstName}
                  errorText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="Phone Number"
                  type="tel"
                  placeholder="+1234567890"
                  {...field}
                  isError={!!errors.phoneNumber}
                  errorText={errors.phoneNumber?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="Email"
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                  isError={!!errors.email}
                  errorText={errors.email?.message} // исправлено
                />
              )}
            />
            <Controller
              name="peopleNumber"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="Number of People"
                  type="number"
                  {...field}
                  isError={!!errors.peopleNumber}
                  errorText={errors.peopleNumber?.message}
                  onWheel={(e) => e.preventDefault()}
                />
              )}
            />
            <FormBtn text="Send" typeButton="submit" variant="fill" />
          </form>
        </div>
      </SFormBooking>
    </Modal>
  );
};
