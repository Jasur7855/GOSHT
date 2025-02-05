import { FaTrashAlt } from "react-icons/fa";
import { Heading } from "../../typography/Heading/Heading";
import { CheckBoxLabel } from "../../ui/CheckBoxLabel/CheckBoxLabel";
import { LabelInput } from "../../ui/LabelInput/LabelInput";
import { SFormKidsEvent } from "./FormKidsEvents.style";
import { Button } from "../../ui/Button/Button";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";

interface IFormKidsEventsProps {}

export const FormKidsEvents = ({}: IFormKidsEventsProps) => {
  return (
    <SFormKidsEvent>
      <Link to="#">
        <MdOutlineClear className="exit" />
      </Link>
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
          <Button btnLink="#" typeButton="submit" text="Send" variant="fill" />
        </div>
      </form>
    </SFormKidsEvent>
  );
};
