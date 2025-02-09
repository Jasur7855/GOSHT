import { FaTrashAlt } from "react-icons/fa";
import { Heading } from "../../typography/Heading/Heading";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormKidsEvent } from "./FormKidsEvents.style";
import { Button } from "../../ui/Button/Button";
import { MdOutlineClear } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import Modal from "react-modal";
import { KidsEventScheme } from "./yupFormKids";
import { yupResolver } from "@hookform/resolvers/yup";

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

export const FormKidsEvents = ({ isOpen, onClose }: IFormKidsEventsProps) => {
  const {
    control,

    formState: { errors },
  } = useForm<IFormKidsEventsScheme>({
    resolver: yupResolver(KidsEventScheme),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
      eventDate: "",
      peopleNumber: 0,
      masterclass: "",
      showType: "",
    },
  });
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <SFormKidsEvent>
        <MdOutlineClear className="exit" onClick={onClose} />

        <Heading
          text="Fill in the form and we will contact you about Kids event"
          variant="h4"
        />
        <form action="">
          <div className="formFlex">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="First Name"
                  placeholder="First Name"
                  value={field.value}
                  onChange={field.onChange}
                  isError={Boolean(errors.firstName)}
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
                  value={field.value}
                  onChange={field.onChange}
                  isError={Boolean(errors.phoneNumber)}
                  errorText={errors.phoneNumber?.message}
                />
              )}
            />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <LabelInput
                labelText="Email"
                placeholder="example@gmail.com"
                value={field.value}
                onChange={field.onChange}
                isError={Boolean(errors.email)}
                errorText={errors.email?.message}
              />
            )}
          />
          <div className="formFlex">
            <Controller
              name="eventDate"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="Event Date"
                  placeholder="DD/MM/YYYY"
                  value={field.value}
                  onChange={field.onChange}
                  isError={Boolean(errors.eventDate)}
                  errorText={errors.eventDate?.message}
                />
              )}
            />

            <Controller
              name="peopleNumber"
              control={control}
              render={({ field }) => (
                <LabelInput
                  labelText="Number of People"
                  placeholder="0"
                  value={field.value}
                  onChange={field.onChange}
                  isError={Boolean(errors.peopleNumber)}
                  errorText={errors.peopleNumber?.message}
                />
              )}
            />
          </div>
          <div className="choose">
            <Heading
              text="Сhoose the event you want and the details of the event."
              variant="h5"
            />
          </div>
          <div className="chooseWrapper">
            <div className="masterClass">
              <Controller
                name="masterclass"
                control={control}
                render={({ field }) => (
                  <LabelInput
                    labelText="Choose the Masterclass"
                    placeholder="Choose the Masterclass"
                    value={field.value}
                    onChange={field.onChange}
                    isError={Boolean(errors.masterclass)}
                    errorText={errors.masterclass?.message}
                  />
                )}
              />
              {/* <div className="checkboxWrapper">
                <CheckBoxLabel labelText="Placholder" />
                <CheckBoxLabel labelText="Placholder" />
                <CheckBoxLabel labelText="Placholder" />
              </div> */}
            </div>
            <div className="show">
              <Controller
                name="showType"
                control={control}
                render={({ field }) => (
                  <LabelInput
                    labelText="Choose Show for Kids"
                    areaPlaceholder={`Placeholder
Create clown costumes and accessories,
enjoying entertaining performances
and laughter-inducing activities.`}
                    isInput={false}
                    value={field.value}
                    onChange={field.onChange}
                    isError={Boolean(errors.masterclass)}
                    errorText={errors.masterclass?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className="btnsWrapper">
            <button className="clear" onClick={() => {}}>
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
      </SFormKidsEvent>
    </Modal>
  );
};
