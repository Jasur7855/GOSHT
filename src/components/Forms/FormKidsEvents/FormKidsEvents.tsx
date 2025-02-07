import { FaTrashAlt } from "react-icons/fa";
import { Heading } from "../../typography/Heading/Heading";
import { CheckBoxLabel } from "../../ui/CheckBoxLabel/CheckBoxLabel";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormKidsEvent } from "./FormKidsEvents.style";
import { Button } from "../../ui/Button/Button";
import { MdOutlineClear } from "react-icons/md";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

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
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<IFormKidsEventsProps>({});
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
            <LabelInput
              labelText="First Name"
              isError={false}
              placeholder="First Name"
            />
            <LabelInput
              labelText="Phone Number"
              isError={false}
              placeholder="Phone Number"
            />
          </div>
          <LabelInput
            labelText="Phone Number"
            isError={false}
            placeholder="example@gmail.com"
          />
          <div className="formFlex">
            <LabelInput
              labelText="Event Date"
              isError={false}
              placeholder="DD/MM/YYYY"
            />
            <LabelInput
              labelText="Number of People"
              isError={false}
              placeholder="0"
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
              <LabelInput
                labelText="Choose the Masterclass"
                isError={false}
                placeholder="Choose the Masterclass"
              />
              <div className="checkboxWrapper">
                <CheckBoxLabel labelText="Placholder" />
                <CheckBoxLabel labelText="Placholder" />
                <CheckBoxLabel labelText="Placholder" />
              </div>
            </div>
            <div className="show">
              <LabelInput
                labelText="Choose Show for Kids"
                isError={false}
                areaPlaceholder={`Placeholder
Create clown costumes and accessories,
enjoying entertaining performances
and laughter-inducing activities.`}
                isInput={false}
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
