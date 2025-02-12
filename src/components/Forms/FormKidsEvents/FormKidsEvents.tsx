import { FaTrashAlt } from "react-icons/fa";
import { Heading } from "../../typography/Heading/Heading";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormKidsEvent } from "./FormKidsEvents.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { KidsEventScheme } from "./yupFormKids";
import { useAddKidsEventMutation } from "../../../store/Api/inquireFormsApi";
import { FormBtn } from "../../ui/Button/FormBtn";
import { MdOutlineClear } from "react-icons/md";

interface IFormKidsEventsScheme {
  firstName: string;
  phoneNumber: string;
  email: string;
  eventDate: string;
  peopleNumber: number;
  masterclass: string;
  showType: string;
}

interface IFormKidsEventsProps {
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

export const FormKidsEvents = ({ isOpen, onClose }: IFormKidsEventsProps) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormKidsEventsScheme>({
    resolver: yupResolver(KidsEventScheme),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
      eventDate: "",
      peopleNumber: 0, // Исправлено
      masterclass: "",
      showType: "",
    },
  });

  const [addKidsEvent] = useAddKidsEventMutation();

  const onSubmit: SubmitHandler<IFormKidsEventsScheme> = async (data) => {
    try {
      const payload = { ...data, peopleNumber: Number(data.peopleNumber) };
      console.log("Отправка формы:", payload);
      await addKidsEvent(payload).unwrap();
      reset();
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  const clearForm = (e: React.MouseEvent) => {
    e.preventDefault();
    reset({}, { keepErrors: false, keepDirty: false, keepTouched: false });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <SFormKidsEvent>
      <MdOutlineClear className="exit" onClick={onClose} />
        <Heading
          text="Fill in the form and we will contact you about Kids event"
          variant="h4"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="First Name"
                placeholder="First Name"
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
                type="number"
                labelText="Phone Number"
                placeholder="Phone Number"
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
                type="email"
                labelText="Email"
                placeholder="example@gmail.com"
                {...field}
                isError={!!errors.email}
                errorText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="eventDate"
            control={control}
            render={({ field }) => (
              <LabelInput
                type="date"
                labelText="Event Date"
                {...field}
                isError={!!errors.eventDate}
                errorText={errors.eventDate?.message}
              />
            )}
          />
          <Controller
            name="peopleNumber"
            control={control}
            render={({ field }) => (
              <LabelInput
                type="number"
                labelText="Number of People"
                {...field}
                isError={!!errors.peopleNumber}
                errorText={errors.peopleNumber?.message}
                onWheel={(e) => e.preventDefault()}
              />
            )}
          />
          <Controller
            name="masterclass"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Choose the Masterclass"
                {...field}
                isError={!!errors.masterclass}
                errorText={errors.masterclass?.message}
              />
            )}
          />
          <Controller
            name="showType"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Choose Show for Kids"
                {...field}
                isError={!!errors.showType}
                errorText={errors.showType?.message}
              />
            )}
          />
          <div className="btnsWrapper">
            <button className="clear" onClick={clearForm} type="button">
              <FaTrashAlt /> Clear the form
            </button>
            <FormBtn text="Send" variant="fill" typeButton="submit" />
          </div>
        </form>
      </SFormKidsEvent>
    </Modal>
  );
};
