import { Link } from "react-router-dom";
import { Heading } from "../../typography/Heading/Heading";
import { Button } from "../../ui/Button/Button";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormPrivateEvent } from "./FormPrivateEvent.style";
import { PrivateEventScheme } from "./yupFromPrivate";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "react-modal";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";

export interface IFormPrivateEvent {
  userName: string;
  userEmail: string;
  userLastName: string;
  userPhone: string;
  userDate: string;
  userCompany: string;
  startTime: string;
  endTime: string;
  eventType: string;
  peopleCount: number;
  additionalInfo: string;
}
export interface IFormPrivateProps {
  isOpen: boolean;
  onClose: () => void;
}
const customStyles: Modal.Styles = {
  overlay: {
    zIndex: 1000, // Чтобы быть выше слайдера
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    inset: 0,
    width: "100vw",
    height: "100vh",
    padding: "20px",
    background: "white",
    border: "none",
  },
};


export const FormPrivateEvent = ({ isOpen, onClose }: IFormPrivateProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PrivateEventScheme),
    mode: "onBlur",
    defaultValues: {
      userName: "",
      userEmail: "",
      userLastName: "",
      userPhone: "",
      userDate: "",
      userCompany: "",
      startTime: "",
      endTime: "",
      eventType: "",
      peopleCount: 0,
      additionalInfo: "",
    },
  });
  const clearForm = () => reset();
  const onSubmit: SubmitHandler<IFormPrivateEvent> = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
      <SFormPrivateEvent>
        <Link to="/">
          <MdOutlineClear className="exit" onClick={onClose} />
        </Link>
        <Heading
          text="Fill out the form and we will contact you about a Private event"
          variant="h4"
        />
        <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="First Name"
                inputIcon
                placeholder="First Name"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userName)}
                errorText={errors.userName?.message}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Email"
                inputIcon
                placeholder="example@gmail.com"
                type="email"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userEmail)}
                errorText={errors.userEmail?.message}
              />
            )}
          />
          <Controller
            name="userLastName"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Last Name"
                inputIcon
                placeholder="Last Name"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userLastName)}
                errorText={errors.userLastName?.message}
              />
            )}
          />
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Phone Number"
                inputIcon
                placeholder="Phone Number"
                type="tel"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userPhone)}
                errorText={errors.userPhone?.message}
              />
            )}
          />
          <Controller
            name="userDate"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Event Date"
                inputIcon
                placeholder="DD/MM/YYYY"
                type="date"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userDate)}
                errorText={errors.userDate?.message}
              />
            )}
          />
          <Controller
            name="userCompany"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Company Name"
                inputIcon
                placeholder="Company"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.userCompany)}
                errorText={errors.userCompany?.message}
              />
            )}
          />
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Start Time"
                inputIcon
                placeholder="Start Time"
                type="time"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.startTime)}
                errorText={errors.startTime?.message}
              />
            )}
          />
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="End Time"
                inputIcon
                placeholder="End Time"
                type="time"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.endTime)}
                errorText={errors.endTime?.message}
              />
            )}
          />
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Type of Event"
                inputIcon
                placeholder="Type of Event"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.eventType)}
                errorText={errors.eventType?.message}
              />
            )}
          />
          <Controller
            name="peopleCount"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Number of People"
                inputIcon
                placeholder="0"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.peopleCount)}
                errorText={errors.peopleCount?.message}
              />
            )}
          />
          <Controller
            name="additionalInfo"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Additional Information"
                inputIcon
                placeholder="Additional Information"
                type="text"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.additionalInfo)}
                errorText={errors.additionalInfo?.message}
              />
            )}
          />
          <div className="btnsWrapper">
            <button className="clear" onClick={clearForm}>
              <FaTrashAlt />
              Clear the form
            </button>
            <Button
              btnLink="#"
              typeButton="submit"
              text="Send"
              variant="fill"
            />
          </div>
        </form>
      </SFormPrivateEvent>
    </Modal>
  );
};
